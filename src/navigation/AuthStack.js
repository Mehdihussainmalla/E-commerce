import React from 'react';
import {useSelector} from 'react-redux';
import {Home, Login} from '../Screens';

import navigationStrings from './navigationStrings';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={Home}
        // component={LoginLayoutFour}
        options={{headerShown: false}}
      />
    </>
  );
}
