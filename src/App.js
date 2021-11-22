import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenA from './components/Screens/ScreenA';
import ScreenB from './components/Screens/ScreenB';

//const tab = createBottomTabNavigator();
const tab = createMaterialBottomTabNavigator();
//const tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Screen_A') {
              iconName = 'btc';
              size = focused ? 25 : 20;
              color = focused ? '#da1' : '#555';
            } else if (route.name === 'Screen_B') {
              iconName = 'autoprefixer';
              size = focused ? 25 : 20;
              color = focused ? '#da1' : '#555';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTinColor: '#da1',
          inactiveTinColor: '#555',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#999',
          showLabel: true,
          labelStyle: {fontSize: 15},
          showIcon: true,
        }}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#feadaa'}}>
        <tab.Screen
          name="Screen_A"
          component={ScreenA}
          options={{tabBarBadge: 3}}
        />
        <tab.Screen name="Screen_B" component={ScreenB} />
      </tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
