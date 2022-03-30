import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Cart from '../../screens/card/Cart';
import Profile from '../../screens/Profile/Profile';
import imagePath from '../constants/imagePath';
import {View, Text, Image, TouchableOpacity} from 'react-native';
const Tab = createBottomTabNavigator();
function Footer() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInActiveTintColor: 'yellow',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={imagePath.ic_Profile_Image}
              style={{width: 30, height: 30, top: 5}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={imagePath.cartBasket}
              style={{width: 30, height: 30, top: 5}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={imagePath.cartBasket}
              style={{height: 31, width: 31, top: 5}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Footer;
