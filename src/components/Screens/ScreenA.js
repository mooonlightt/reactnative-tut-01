import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

const ScreenA = ({navigation, route}) => {
  // const {Message} = route.params;
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
    // navigation.navigate('Screen_B', {
    //   itemName: 'Item from screen A',
    //   itemId: 12,
    // });
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
      <Text style={styles.text}>{route.params?.Message}</Text>
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

export default ScreenA;
