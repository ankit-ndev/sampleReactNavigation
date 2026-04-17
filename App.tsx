// In App.js in a new project

import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page1 from './src/Page1';
import Page2 from './src/Page2';
import Page3 from './src/Page3';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Page1,
    Page2: Page2,
    Page3: Page3,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
