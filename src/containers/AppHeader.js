import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Button } from 'react-native-elements';
import { COLOR_PRIMARY, FONT_BOLD } from './../styles/common';

export default class AppHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
  }

  cleanHabits = () => {
    console.log("hi");

    this.setState({counter: this.state.counter + 1});

    console.log("@@", this.state.counter);

  }

  deleteButton() {
    return <Button
              icon={{name: "delete"}}
              onPress = {this.cleanHabits}
              buttonStyle={{padding: 0, margin: 0, backgroundColor: 'transparent'}}
              textStyle={{padding: 0, margin: 0}}
            />
  }

  render() {
    return (
      <Header

        backgroundColor={COLOR_PRIMARY}
        leftComponent={{ icon: 'menu', color: '#fff'}}
        centerComponent={{ text: 'Grillo App', style: { ...FONT_BOLD, color: '#fff' } }}
        rightComponent={this.deleteButton()}
      />
    )
  }
}
