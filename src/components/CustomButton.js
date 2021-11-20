import React from 'react';
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

const CustomButton = props => {
  return (
    <Pressable
      onPress={props.submitHandler}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? '#555' : props.color,
        },
        styles.button,
        {...props.style},
      ]}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    textAlign: 'center',
  },
  button: {
    borderRadius: 8,
  },
});

export default CustomButton;
