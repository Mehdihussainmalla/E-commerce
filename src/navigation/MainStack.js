import React from 'react';
import { Cart,Home,Profile,MyOrders, DrawerScreen} from '../Screens';
import DrawerStack from './DrawerStack';
import navigationStrings from './navigationStrings';
import TabStack from './TabStack';


export default function (Stack) {
  // const {appData, appStyle} = useSelector(state => state?.initBoot);

  return (
    <>
     <Stack.Navigator >

    
      <Stack.Screen
        name={navigationStrings.TABSTACK}
        component={TabStack}
        options={{headerShown: false}}
      />
     
     <Stack.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={navigationStrings.CART}
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
     // options={{title:'Profile'}}
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{headerShown: true}}
      /> 
      <Stack.Screen
        name={navigationStrings.DRAWER}
        component={DrawerStack}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.MYORDERS}
        component={MyOrders}
        options={{headerShown: false}}
      />
   </Stack.Navigator>
    </>
    
  );
}
