import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ListView, TouchableOpacity, ScrollView } from 'react-native';
import { List, ListItem, Button, Card, Badge } from 'react-native-elements';
import Moment from 'react-moment';
import 'moment/locale/es';
import moment from 'moment';
import * as HabitActions from '../actions/habits';

import { fontMaker } from './../helpers/fontMaker';
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
  // passing state as props
  state => ({
    habits: state.habits,
  }),
  dispatch => bindActionCreators(HabitActions, dispatch),
)

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  renderRow = (rowData, sectionID) => {
    return (
      <ListItem
        roundAvatar
        key={sectionID}
        title={rowData.name}
        subtitle={rowData.subtitle}
        avatar={{uri:rowData.avatar_url}}
      />
    )
  }

  toCounter = () => {
    this.props.navigation.navigate('Counter');
  };

  toAddHabit = () => {
    this.props.navigation.navigate('AddHabit');
  };

  timeBadge = (timestamp) => {
    const timeStr = moment(timestamp).fromNow().replace("hace ", "");
    return timeStr
  }

  render() {
    const {habits} = this.props;
    let currentHabits = habits.get('habits');
    // console.log("asqdasdadsa: ", currentHabits);
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <Text h1 style={styles.welcome}>Mis Habitos</Text>
          <ScrollView>
            <List>
              {
                currentHabits.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.name}
                    leftIcon={{name: 'timer'}}
                    badge={{value: this.timeBadge(item.lastTimestamp)}}
                  />
                ))
              }
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
        {/*
        <TouchableOpacity onPress={this.toCounter}>
          <Text style={styles.instructions}>Navigate to Counter</Text>
        </TouchableOpacity>
        */}
      </View>
    );
  }
}
