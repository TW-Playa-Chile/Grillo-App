import { StackNavigator } from 'react-navigation';
import React from 'react';
import { Header } from 'react-native-elements';

import Home from './containers/Home';
import AddHabit from './containers/AddHabit';
import { COLOR_PRIMARY, FONT_BOLD } from './styles/common';


const AppNavigator = new StackNavigator(
  {
    Home: { screen: Home },
    AddHabit: { screen: AddHabit },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: <Header
        backgroundColor={COLOR_PRIMARY}
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Grillo App', style: { ...FONT_BOLD, color: '#fff' } }}
        // rightComponent={{ icon: 'home', color: '#fff' }}
      />,
    },
  },
);

export default AppNavigator;
