import { StackNavigator } from 'react-navigation';
import React from 'react';
import { Header } from 'react-native-elements';

import Home from './containers/Home';
import Counter from './containers/Counter';
import AddHabit from './containers/AddHabit';

const AppNavigator = new StackNavigator(
  {
    Home: { screen: Home },
    Counter: { screen: Counter },
    AddHabit: { screen: AddHabit },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: <Header
        backgroundColor='#255B86'
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Pepe Grillo', style: { color: '#fff' } }} 
        rightComponent={{ icon: 'home', color: '#fff' }}
      />,
    },
  },
);

export default AppNavigator;
