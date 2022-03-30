import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Footer from './Footer';
//import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import { MyOrders,Profile,Cart,Home } from '../Screens';

import NavigationUsingdrawer from '../navigation/Drawer';
import HeaderCustom from './HeaderCustom';


const Stacks = createStackNavigator();

const Stack = () => {
  return (
      <Stacks.Navigator initialRouteName="Drawer">

        <Stacks.Screen
          name="Drawer"
          component={NavigationUsingdrawer}
          options={{headerShown: false}}
        />
        <Stacks.Screen
          name="Footer"
          component={Footer}
          options={{headerShown: false}}
        />

        <Stacks.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stacks.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stacks.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />

        <Stacks.Screen
          name="MyOrders"
          component={MyOrders}
          options={{headerShown: false}}
        />

        <Stacks.Screen name='HeaderCustom' 
        component={HeaderCustom} 
        options={{headerShown:false}}/>
      </Stacks.Navigator>
  );
};

export default Stack;
