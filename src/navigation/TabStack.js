import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import imagePath from '../constants/imagePath';
import { Cart, Home, Profile } from '../Screens';
import navigationStrings from './navigationStrings';
// import DrawerStack from './Drawer';
const Tab = createBottomTabNavigator();
function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInActiveTintColor: '#87CEEB',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={imagePath.homeIcon}
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

export default TabStack;
