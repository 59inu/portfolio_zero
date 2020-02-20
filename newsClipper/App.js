import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import AppNav from './src/navigator/AppNav';

import store from './src/redux/StoreConfig';

export default function App() {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}
