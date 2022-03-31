import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Home, Profile, Cart,  } from '../Screens';
import { DrawerCustom } from './DrawerCustom'
import TabStack from './TabStack';
import navigationStrings from './navigationStrings';


const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator initialRouteName='Home' drawerContent={(props=><DrawerCustom {...props} /> )}
      screenOptions={{
        headerShown: false,
        
      }}>
      <Drawer.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          headerShown: false,
          
        }}
      />
      {/* <Drawer.Screen
        name={navigationStrings.CART}
        component={Cart}
        options={{
          headerShown: false,
         
        }}
      /> */}
      {/* <Drawer.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
        }}
      /> */}
      <Drawer.Screen
        name={navigationStrings.TABSTACK}
        component={TabStack}
        options={{
          headerShown: false,
        }}
      />

    </Drawer.Navigator>
  );
}
