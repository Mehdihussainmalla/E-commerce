import React from 'react';
import {useSelector} from 'react-redux';
import { Cart,Home,Profile,MyOrders, DrawerScreen} from '../Screens';
//import DrawerStack from './Drawer';
// import Drawer from './Drawer';
import navigationStrings from './navigationStrings';
import TabStack from './TabStack';

export default function (Stack) {
  // const {appData, appStyle} = useSelector(state => state?.initBoot);

  return (
    <>
      {/* <Stack.Screen
        name={navigationStrings.DRAWER}
        component={DrawerStack}
        options={{headerShown: false}}
      /> */}
       <Stack.Screen
        name={navigationStrings.TABSTACK}
        component={TabStack}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{headerShown: false}}
      />

    <Stack.Screen
        name={navigationStrings.MYORDERS}
        component={MyOrders}
        options={{headerShown: false}}
      />
    </>
  );
}
