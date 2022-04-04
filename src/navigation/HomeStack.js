import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useSelector} from 'react-redux';
import {Home, MyOrders} from '../Screens';

import navigationStrings from './navigationStrings';
import TabStack from './TabStack';

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator 
   // screenOptions={{presentation:'modal'}}
     initialRouteName={navigationStrings.HOME}>
      <Stack.Screen 
        name={navigationStrings.HOME}
        component={Home}
        options={{headerShown: false}}
        
      />
    </Stack.Navigator>
  );
}
