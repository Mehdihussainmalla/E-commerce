import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import Home from '../screens/Home/Home';
// import Profile from '../screens/Profile/Profile';
// import Cart from '../screens/card/Cart';
// import Banner from '../screens/Banner/Banner';
Home


// import { DrawerContent } from '../DrawerContent';
// DrawerScreen
import { Home, Profile, Cart,  } from '../Screens';
import { DrawerCustom } from './DrawerCustom'


const Drawer = createDrawerNavigator();

export default function NavigationUsingdrawer() {
  return (
    <Drawer.Navigator drawerContent={(props=><DrawerCustom {...props} /> )}
      screenOptions={{
        headerShown: false,
        
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
         
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
         
        }}
      />

      {/* <Drawer.Screen
        name="Banner"
        component={Banner}
        options={{
          headerShown: false,
          
        }}

      /> */}
    </Drawer.Navigator>
  );
}
