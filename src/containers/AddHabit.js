import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormLabel, FormInput, FormValidationMessage, Button, Card } from 'react-native-elements';
// import Snackbar from 'react-native-snackbar';
import * as HabitActions from '../actions/habits';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_BACKGROUND, BORDER_RADIUS, FONT_NORMAL, FONT_BOLD } from './../styles/common';

const styles = StyleSheet.create({
    header: {
      backgroundColor: COLOR_PRIMARY,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLOR_BACKGROUND,
    },
    welcome: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
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
  dispatch => bindActionCreators(HabitActions, dispatch),
)


export default class AddHabit extends Component {
  constructor(props) {
    super(props);
    const { addHabit } = props;
    this.state = {
        habit: '',
        habitError: false,
    }

    this.addHabit = (name) => addHabit(name);
  }

  addHabitToStore = () => {
    if (this.isEmptyString(this.state.habit)) {
        this.setState({ habitError: true });

    } else {
        this.addHabit(this.state.habit);
        this.props.navigation.goBack();
        // Snackbar.show({
        //   title: 'Se añadió su nuevo hábito',
        //   backgroundColor: 'green',
        //   duration: Snackbar.LENGTH_SHORT,
        // });
    }
  };

  isEmptyString = function(habitName) {
    return habitName.trim().length < 1;
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
          <Text h1 style={styles.welcome}>Nuevo Hábito</Text>
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


