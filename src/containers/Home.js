import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { List, Button, Card } from 'react-native-elements';
import HabitItem from './../components/HabitItem';
import * as HabitActions from '../actions/habits';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_BACKGROUND, BORDER_RADIUS, FONT_BOLD } from './../styles/common';
import HabitAchievement from './../components/achievement/HabitAchievement';
import noHabits from './../images/no_habits.png';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    flex: 0,
    alignSelf: 'stretch',
    width: win.width * 0.9,
    height: win.height * 0.6,
  },
  header: {
    backgroundColor: COLOR_PRIMARY,
  },
  scrollbox: {
    height: win.height - 300,
  },
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_BACKGROUND,
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    paddingTop: 15,
  },
  welcome: {
    color: COLOR_PRIMARY,
    fontSize: 25,
    margin: 10,
    textAlign: 'center',
    ...FONT_BOLD,
  },
  boldText: {
    fontSize: 20,
    textAlign: 'center',
    ...FONT_BOLD,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonAdd: {
    margin: '5%',
    backgroundColor: COLOR_SECONDARY,
    borderRadius: BORDER_RADIUS,
  }
});

@connect(
  state => ({ habits: state.habits }),
  dispatch => bindActionCreators(HabitActions, dispatch),
)

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    const { stopHabit } = props;

    this.stopHabit = habit => stopHabit(habit);
  }

  toStopHabit = (habit) => {
    this.stopHabit(habit);
  }

  toAddHabit = () => {
    this.props.navigation.navigate('AddHabit');
  };

  habitList = () => {
    const currentHabits = Immutable.Map(this.props.habits).get('habits');
    if (currentHabits.length < 1) {
      return (<Image
        style={styles.image}
        resizeMode="contain"
        source={noHabits}
      />);
    }

    return (
      <ScrollView style={styles.scrollbox}>
        <List>
          { currentHabits.map((item, index) => <HabitItem key={index} habit={item} toStopHabit={this.toStopHabit} />) }
        </List>
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text h1 style={styles.welcome}>MIS HABITOS</Text>
          { this.habitList() }
          <Button
            onPress={this.toAddHabit}
            raised
            icon={{ name: 'add' }}
            buttonStyle={styles.buttonAdd}
            title="Agregar"
            textStyle={styles.boldText}
          />
        </Card>
        <HabitAchievement />
      </View>
    );
  }
}
