import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  Alert,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';

import CustomButton from './components/CustomButton';
import Header from './components/Header';

const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const submitHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <ImageBackground
      style={styles.body}
      source={{
        uri: 'https://i.pinimg.com/474x/15/f9/00/15f9007cc00d7f54dec4ba5ab8dd5816.jpg',
      }}>
      <Header />
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => setShowWarning(false)}
        animationType="fade">
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>WARNING!</Text>
            </View>

            <View style={styles.warning_body}>
              <Text style={styles.text}>
                Yuo must enter more than 3 letters!
              </Text>
            </View>
            <View style={styles.warning_button}>
              <Pressable onPress={() => setShowWarning(false)}>
                <Text style={styles.text}>OK</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}> Write your name</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder=" input a name"
        onChangeText={v => setName(v)}
      />

      <CustomButton
        submitHandler={submitHandler}
        title={submitted ? 'Clear' : 'Submit'}
        color={'#55ff55'}
      />
      <CustomButton
        submitHandler={() => {}}
        title={submitted ? 'Clear' : 'Send'}
        color={'#c2a577'}
        style={{margin: 10}}
      />
      {submitted ? (
        <View style={styles.body}>
          <Text>You have been submitted: {name} </Text>
          <Image
            source={require('../assets/done.png')}
            style={styles.image}
            resizeMode="stretch"
            blurRadius={1}
          />
        </View>
      ) : (
        <Image
          source={require('../assets/error.png')}
          style={styles.image}
          blurRadius={1}
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',

    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#a5cf16',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
  button: {
    borderRadius: 8,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: 302,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRightColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    width: 300,
    height: 50,
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    width: 300,
    height: 50,
    backgroundColor: '#fa2',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default App;
