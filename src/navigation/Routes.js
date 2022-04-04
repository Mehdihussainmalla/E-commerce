import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HeaderCustom from '../Components/HeaderCustom';
import { Home, Login } from '../Screens';
import AuthStack from './AuthStack';
import { DrawerCustom } from './DrawerCustom';
import MainStack from './MainStack';
import navigationStrings from './navigationStrings';

const Stack = createDrawerNavigator();

export default function Routes() {

  return (
    <NavigationContainer>
     

      {false? MainStack(Stack) : AuthStack(Stack)}

    </NavigationContainer>
  );
}
