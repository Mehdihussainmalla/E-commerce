import React from 'react';
import {useSelector} from 'react-redux';
import {Home, Login} from '../Screens';
import navigationStrings from './navigationStrings';
import MainStack from './MainStack';
import TabStack from './TabStack';

export default function (Stack) {
  return (
    <>

<Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        // component={LoginLayoutFour}
        options={{headerShown: false}}
      />
    
    </>
  );
}
