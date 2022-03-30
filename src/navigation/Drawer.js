import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import Home from '../screens/Home/Home';
// import Profile from '../screens/Profile/Profile';
// import Cart from '../screens/card/Cart';
// import Banner from '../screens/Banner/Banner';


// import { DrawerContent } from '../DrawerContent';
// DrawerScreen
import { Home, Profile, Cart,  } from '../Screens';
import { DrawerCustom } from './DrawerCustom'
import TabStack from './TabStack';
import navigationStrings from './navigationStrings';


const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator drawerContent={(props=><DrawerCustom {...props} /> )}
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
      <Drawer.Screen
        name={navigationStrings.CART}
        component={Cart}
        options={{
          headerShown: false,
         
        }}
      />
      <Drawer.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={navigationStrings.TABSTACK}
        component={TabStack}
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
