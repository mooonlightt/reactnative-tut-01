import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

const ScreenB = ({navigation, route}) => {
  const {itemName, itemId} = route.params;
  const onPressHandler = () => {
    //navigation.goBack();
    //navigation.setParams({itemId: 14});
    navigation.navigate('Screen_A', {Message: 'Message from Screen B to A'});
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go Back to Screen A</Text>
      </Pressable>
      <Text style={styles.text}>{itemName}</Text>
      <Text style={styles.text}>{itemId}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default ScreenB;
