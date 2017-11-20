import { StackNavigator } from 'react-navigation';
import React from 'react';
import AppHeader from './containers/AppHeader';
import Home from './components/Home';
import AddHabit from './containers/AddHabit';

const AppNavigator = new StackNavigator(
  {
    Home: { screen: Home },
    AddHabit: { screen: AddHabit },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: <AppHeader />,
    },
  },
);

export default AppNavigator;
