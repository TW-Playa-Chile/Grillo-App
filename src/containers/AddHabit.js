import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as HabitActions from '../actions/habits';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  back: {
    margin: 10,
    fontSize: 20,
  },
  buttonAdd: {
    margin: '5%',
    backgroundColor: '#83B96B', 
    borderRadius: 100
  }
});

@connect(
  null,
  dispatch => bindActionCreators(HabitActions, dispatch),
)
export default class AddHabit extends Component {
  static propTypes = {
    addHabit: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    const { addHabit } = props;
    this.state = {
        habit: ''
    }
    this.addHabit = (name) => addHabit(name);
  }

  addHabitToStore = () => {
    // console.log("@@@@@@@@@@@@@habit state: ", this.state.habit);
    this.addHabit(this.state.habit);
    this.props.navigation.goBack();
  };

  enterHabit = (txt) => {
    console.log("#", txt)
    this.setState({ habit: txt });
  };

  handleBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text h1>NUEVO HÁBITO</Text>
        <FormLabel>Ingresa tu nuevo habito</FormLabel>
        <FormInput 
            ref={input => this.textInput = input}
            onChangeText={this.enterHabit}
        />
        {/* <FormValidationMessage>Hubo un error</FormValidationMessage> */}
        <Button
            onPress={this.addHabitToStore}
            raised
            icon={{name: 'add'}}
            buttonStyle={styles.buttonAdd}
            title='Agregar'
            textStyle={{textAlign: 'center'}}
            raised={true}
        />

        <TouchableOpacity onPress={this.handleBack}>
          <Text style={styles.back}>Volver</Text>
        </TouchableOpacity>
      </View>
    );
  }

  
}


