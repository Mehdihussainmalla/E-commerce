import React from 'react';
import {useSelector} from 'react-redux';
import { Cart,Home,Profile,MyOrders, DrawerScreen} from '../Screens';
import HomeStack from './HomeStack';
import navigationStrings from './navigationStrings';

export default function (Stack) {
  // const {appData, appStyle} = useSelector(state => state?.initBoot);

  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{headerShown: false}}
      />
       {/* <Stack.Screen
        name={navigationStrings.CART}
        component={Cart}
        options={{headerShown: false}}
      /> */}

{/* <Stack.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{headerShown: false}}
      /> */}

    {/* <Stack.Screen
        name={navigationStrings.MYORDERS}
        component={MyOrders}
        options={{headerShown: false}}
      /> */}

{/* <Stack.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{headerShown: false}}
      /> */}
    </>
  );
}
