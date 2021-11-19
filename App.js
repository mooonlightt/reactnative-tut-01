// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//     color: '#ac2154',
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '900',
//     color: '#ac2154',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: '#ac2154',
//   },
//   highlight: {
//     fontWeight: '700',
//     color: '#ac2154',
//   },
// });

// export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
      {/* <Button title={submitted ? 'Clear' : 'Submit'} onPress={submitHandler} /> */}

      {/* <TouchableOpacity style={styles.button} onPress={submitHandler}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </TouchableOpacity> */}

      {/* <TouchableHighlight
        style={styles.button}
        onPress={submitHandler}
        underlayColor="red">
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'} </Text>
      </TouchableHighlight> */}

      {/* <TouchableWithoutFeedback style={styles.button} onPress={submitHandler}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'} </Text>
      </TouchableWithoutFeedback> */}
      <Pressable
        onPress={submitHandler}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#555' : '#55ff55',
          },
          styles.button,
        ]}>
        <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>
      {submitted ? (
        <View style={styles.body}>
          <Text>You have been submitted: {name} </Text>
          <Image
            source={require('./assets/done.png')}
            style={styles.image}
            resizeMode="stretch"
            blurRadius={1}
          />
        </View>
      ) : (
        <Image
          source={require('./assets/error.png')}
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
