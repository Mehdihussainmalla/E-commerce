import React from 'react';
import {useSelector} from 'react-redux';
import {Home, Login} from '../Screens';
import navigationStrings from './navigationStrings';
import MainStack from './MainStack';
import TabStack from './TabStack';
import SignUp from '../Screens/SignUp/SignUp';

export default function (Stack) {
  return (
    <>
    <Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        // component={LoginLayoutFour}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={SignUp}
        // component={LoginLayoutFour}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    </>
  );
}
