import React, { Component, } from 'react';
import { Modal, View, Text, Image } from 'react-native';

class HabitAchievement extends Component {
  render() {
    return (
      <View>
        <Modal>
          <Text>Eres genial!</Text>
          <Image source={require('./../../images/no_habits.png')} />
          <Text>Ya cumpliste 5 días de:</Text>
        </Modal>
      </View>
    );
  }
}


export default HabitAchievement;
