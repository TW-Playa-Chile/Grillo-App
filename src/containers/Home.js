import React, { Component } from 'react';
import Moment from 'react-moment';
import 'moment/locale/es';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ListView, TouchableOpacity } from 'react-native';
import { List, ListItem, Button, Header, Card } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
});

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    badge: '3',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    badge: '2',
  },

];

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

  render() {
    const { habits } = this.props;

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
              habits.get('habits').map((item, i) => (
                <ListItem
                  key={i}
                  title={item.name}
                  leftIcon={{name: 'timer'}}
                  badge={{element: <Moment toNow element={Text}>{item.lastTimestamp}</Moment>}}
                  // avatar={item.avatar_url}
                />
              ))
            }
          </List>
          <Button
            raised
            icon={{name: 'add'}}
            buttonStyle={{width:'40%', backgroundColor: 'red', borderRadius: 100}}
            title='Agregar'
            textStyle={{textAlign: 'center'}}
            raised={true}
          />
        </Card>
        
        <TouchableOpacity onPress={this.toCounter}>
          <Text style={styles.instructions}>Navigate to Counter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
