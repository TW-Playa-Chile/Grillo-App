import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Card } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HabitActions from '../actions/habits';
import * as NotificationActions from '../actions/notifications';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_BACKGROUND, BORDER_RADIUS, FONT_NORMAL, FONT_BOLD } from './../styles/common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_BACKGROUND,
  },
  welcome: {
    color: COLOR_PRIMARY,
    fontSize: 25,
    margin: 10,
    letterSpacing: -1,
    textAlign: 'center',
    ...FONT_BOLD,
  },
  instructions: {
    margin: 5,
    textAlign: 'center',
    ...FONT_NORMAL,
  },
  boldText: {
    fontSize: 20,
    textAlign: 'center',
    ...FONT_BOLD,
  },
  buttonAdd: {
    margin: '5%',
    backgroundColor: COLOR_SECONDARY,
    borderRadius: BORDER_RADIUS,
  },
  back: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 15,
  },
});

@connect(
  null,
  dispatch => bindActionCreators(Object.assign({}, HabitActions, NotificationActions), dispatch),
)

export default class AddHabit extends Component {
  constructor(props) {
    super(props);

    const { addHabit, addNotification } = props;
    this.state = {
        habit: '',
        habitError: false,
    }

    this.addHabit = (name) => addHabit(name);
    this.addNotification = (msg, color) => addNotification(msg, color);
  }

  addHabitToStore = () => {
    if (this.isEmptyString(this.state.habit)) {
        this.setState({ habitError: true });
    } else {
        this.addHabit(this.state.habit);
        this.addNotification("Se añadio su nuevo hábito", "green");
        this.props.navigation.goBack();
    }
  };

  isEmptyString = function(name) {
    return name.trim().length < 1;
  };

  enterHabit = (txt) => {
    this.setState({ habit: txt });
  };

  handleBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { habitError } = this.state;
    return (
      <View style={styles.container}>
        <Card style={{backgroundColor: '#fff', width:'90%'}}>
          <Text h1 style={styles.welcome}>NUEVO HÁBITO</Text>
            <Text style={styles.instructions}>Ingresa tu nuevo hábito</Text>
            {/* <FormLabel>Titulo hábito</FormLabel> */}
            <FormInput
                shake={!habitError ? false : true}
                ref={input => this.textInput = input}
                onChangeText={this.enterHabit}
            />
            { habitError &&
                <FormValidationMessage >Debes ingresar un nombre para agregar el habito.</FormValidationMessage>
            }
            <Button
                onPress={this.addHabitToStore}
                raised
                icon={{name: 'add'}}
                buttonStyle={styles.buttonAdd}
                title='Agregar'
                textStyle={styles.boldText}
                raised={true}
            />
        </Card>
        <TouchableOpacity onPress={this.handleBack}>
            <Text style={styles.back}>Volver</Text>
        </TouchableOpacity>
      </View>
    );
  }
  static propTypes = {
    // addHabit: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };

}


