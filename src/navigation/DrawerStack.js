import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Home, Profile, Cart,  } from '../Screens';
import DrawerCustom from '../navigation/DrawerCustom'
import navigationStrings from './navigationStrings';


const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator initialRouteName='Home' >
    <Drawer.Screen
           name={navigationStrings.HOME}
           component={Home}
           options={{
             headerShown: false,
             
           }}
         />
          

    </Drawer.Navigator>
  );
}
