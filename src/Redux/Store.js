import React from 'react';
import { createStore } from 'redux';
import StringsPass from './Actions/StringsPass';
import rootReducer from './Reducer/RootReducer';
const store= createStore(rootReducer)
export default store