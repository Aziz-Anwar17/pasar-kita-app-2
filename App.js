import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/config/router';
import { Provider } from 'react-redux';
import { store } from './src/redux/index';

const App = () => {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
