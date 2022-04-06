import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './src/navigation/Routes';
// import FlashMessage from "react-native-flash-message";
import {View} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';



const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
