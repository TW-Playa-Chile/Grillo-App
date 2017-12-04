import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Card, Icon } from 'react-native-elements';

import HabitListContainer from './../containers/HabitList';

import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_BACKGROUND, FONT_BOLD } from './../styles/common';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  innerContainer: {
    height: win.height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_BACKGROUND,
  },
  card: {
    position: 'relative',
    backgroundColor: '#fff',
    marginTop: 20,
    width: win.width * 0.9,
    height: win.height * 0.9,
  },
  welcome: {
    color: COLOR_PRIMARY,
    fontSize: 25,
    marginTop: 50,
    letterSpacing: -1,
    textAlign: 'center',
    ...FONT_BOLD,
  },
  buttonAdd: {
    color: COLOR_SECONDARY,
    marginLeft: ((win.width) / 2) + 50
  }
});

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  toAddHabit = () => {
    this.props.navigation.navigate('AddHabit');
  };

  render() {
    return (
      <View style={styles.innerContainer}>
        <Card style={styles.card}>
          <Text h1 style={styles.welcome}>MIS HABITOS</Text>
          <HabitListContainer />
          <Icon
            name="add-circle"
            type="material-icons"
            color="#000000"
            size={70}
            iconStyle={styles.buttonAdd}
            onPress={() => this.toAddHabit()}
            accessible
            accessibilityLabel="Enter habit button"
          />
        </Card>
      </View>
    );
  }
}

export default Home;
