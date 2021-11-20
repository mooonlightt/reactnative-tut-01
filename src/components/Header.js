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

const Header = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>React native tutorial</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 40,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  view: {
    width: '100%',
    height: 100,
    backgroundColor: '#5a2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
