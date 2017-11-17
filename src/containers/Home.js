import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ListView, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { List, Button, Card, Icon } from 'react-native-elements';
import HabitItem from './../components/HabitItem';
import * as HabitActions from '../actions/habits';
import * as NotificationActions from '../actions/notifications';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_BACKGROUND, BORDER_RADIUS, FONT_NORMAL, FONT_BOLD } from './../styles/common';

const NO_HABITS_IMAGE = require('./../images/no_habits.png');

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: win.width * 0.9,
    height: win.height * 0.62,
    zIndex: -1,
  },
  scrollbox: {
    height: win.height * 0.62,
  },
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
    color: COLOR_SECONDARY,
    marginLeft: ((win.width) / 2 ) + 50
  }
});

@connect(
  state => ({ habits: state.habits }),
  dispatch => bindActionCreators(Object.assign({}, HabitActions, NotificationActions), dispatch),
)

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    habits: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  constructor(props) {
    super(props);
    const {stopHabit, addNotification} = props;

    this.stopHabit = (habit) => stopHabit(habit);
    this.addNotification = (msg) => addNotification(msg);
  }

  toStopHabit = (habit) => {
    this.stopHabit(habit);
  }

  toAddNotification = (msg, color) => {
    this.addNotification(msg, color);
  }

  toAddHabit = () => {
    this.props.navigation.navigate('AddHabit');
  };

  habitList = () => {
    if (this.props.habits.length < 1)
      return <Image
              style={styles.image}
              resizeMode={'contain'}   /* <= changed  */
              source={NO_HABITS_IMAGE}
            />
    return (
      <ScrollView style={styles.scrollbox}>
        <List>
          { this.props.habits.map((item, i) => <HabitItem
                                              key={i}
                                              habit={item}
                                              toStopHabit={this.toStopHabit}
                                              toAddNotification={this.toAddNotification} />) }
        </List>
      </ScrollView>
    )
  }

  render() {
    return (
        <View style={styles.innerContainer}>
          <Card style={styles.card}>
            <Text h1 style={styles.welcome}>MIS HÁBITOS</Text>
            { this.habitList() }
            <Icon
              name = 'add-circle'
              type = 'material-icons'
              color = '#000000'
              size = { 70 }
              iconStyle = {styles.buttonAdd}
              onPress = { () => this.toAddHabit() }
            />
          </Card>
        </View>
    );
  }
}
