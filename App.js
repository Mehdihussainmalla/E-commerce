import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
// import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import Routes from './src/navigation/Routes';
import store from './src/redux/store';

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
