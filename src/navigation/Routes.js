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
import { useSelector } from 'react-redux';



const Stack = createDrawerNavigator();


export default function Routes() {
  //const userData =useSelector(state=>state.Continue)
  const userData=useSelector(state=>state.Continue)

  return (
    <NavigationContainer>
     

      {userData? MainStack(Stack) : AuthStack(Stack)}

    </NavigationContainer>
  );
}
