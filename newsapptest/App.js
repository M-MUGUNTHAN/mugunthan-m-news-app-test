import React from 'react';
import Router from './components/Router';
import {Provider} from 'react-redux';
import { View, Text } from 'react-native';
import store from './components/reduxUtils';
const App = () => {
  return (
    <Provider store={store}>
     <Router/>
    </Provider>
  );
};



export default App;
