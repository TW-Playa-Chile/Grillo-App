import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/es';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ListView, TouchableOpacity } from 'react-native';
import { List, ListItem, Button, Header, Card, Badge } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import * as HabitActions from '../actions/habits';


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#255B86',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonAdd: {
    margin: '5%',
    width:'40%', 
    backgroundColor: '#83B96B', 
    borderRadius: 100
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
    const timeStr = moment(timestamp).fromNow();
    return timeStr
  }

  render() {
    const {habits} = this.props;
    let currentHabits = habits.get('habits');
    console.log("asqdasdadsa: ", currentHabits);
    return (
      <View style={styles.container}>
        <Header
          backgroundColor='#255B86'
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Pepe Grillo', style: { color: '#fff' } }} 
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Card style={{backgroundColor: '#fff', width:'90%'}}>
          <Text h1 style={styles.welcome}>Mis Habitos</Text>
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
          <Button
            onPress={this.toAddHabit}
            raised
            icon={{name: 'add'}}
            buttonStyle={styles.buttonAdd}
            title='Agregar'
            textStyle={{textAlign: 'center'}}
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
