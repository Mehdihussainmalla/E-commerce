import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';
import { Cart, Home, Profile } from '../Screens';
import navigationStrings from './navigationStrings';

const Tab = createBottomTabNavigator();
function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarInactiveTintColor:'green',
        tabBarActiveTintColor:'red',
        tabBarShowLabel:false,
        tabBarStyle:{
          position:'absolute',
          backgroundColor:'pink',borderRadius:15, bottom:5,
          marginHorizontal:5
        }
      }}>
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePath.homeIcon}
              style={{ width: 30, height: 30, top: 5,
                 //tintColor:focused ?'': 'grey'
                 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.CART}
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={  imagePath.cartBasket}

            //{used to change the bottom tab icon}  focused ? imagePath.emailLogo: imagePath.cartBasket
              style={{ width: 30, height: 30, top: 5,
               // tintColor:focused ?'': 'green' 
               }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={imagePath.cartBasket}
              style={{ height: 31, width: 31, top: 5 }}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default TabStack;
