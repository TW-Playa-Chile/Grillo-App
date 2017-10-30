import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ListView, TouchableOpacity, ScrollView } from 'react-native';
import { List, Button, Card } from 'react-native-elements';
import HabitItem from './../components/HabitItem';
import * as HabitActions from '../actions/habits';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_BACKGROUND, BORDER_RADIUS, FONT_NORMAL, FONT_BOLD } from './../styles/common';

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLOR_PRIMARY,
  },
  container: {
    flex: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_BACKGROUND,
  },
  card: {
    backgroundColor: '#fff',
    width:'90%',
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
  state => ({
    habits: state.habits,
  }),
  dispatch => bindActionCreators(HabitActions, dispatch),
)

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  toAddHabit = () => {
    this.props.navigation.navigate('AddHabit');
  };

  render() {
    const {habits} = this.props;
    let currentHabits = habits.get('habits');
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text h1 style={styles.welcome}>MIS HABITOS</Text>
          <ScrollView>
            <List>
              { currentHabits.map((item, i) => <HabitItem key={i} habit={item} />) }
            </List>
          </ScrollView>
          <Button
            onPress={this.toAddHabit}
            raised
            icon={{name: 'add'}}
            buttonStyle={styles.buttonAdd}
            title='Agregar'
            textStyle={styles.boldText}
            raised={true}
          />
        </Card>
      </View>
    );
  }
}
