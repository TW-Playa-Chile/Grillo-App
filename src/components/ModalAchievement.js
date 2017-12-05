import React, { Component } from 'react';
import { Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import PropTypes from 'prop-types';

import ACHIEVEMENT_IMAGE from './../images/dont_give_up.png';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: 300
  },
  image: {
    flex: 0,
    alignItems: 'center',
    alignSelf: 'stretch',
    width: win.width * 0.8,
    height: win.height * 0.6,
  }
});

const renderAchievement = (habitName, index) => (
  <Text key={index}>{habitName}</Text>
);

export default class ModalAchievement extends Component {
  static propTypes = {
    achievements: PropTypes.arrayOf(PropTypes.object).isRequired,
    updateHabits: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      achievements: props.achievements
    };
  }

  componentWillMount() {
    this.showModal();
  }

  showModal() {
    if (this.state.achievements.length > 0) {
      this.setState({ isOpen: true });
    }
  }

  closeModal() {
    this.setState({ isOpen: false, habits: this.state.habits });
    this.props.updateHabits(this.state.achievements);
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Modal
        position="center"
        backdropContent={<Icon size={40} color="white" style={{ position: 'absolute', top: 20, right: 20 }} name="close" type="font-awesome" onPress={() => this.closeModal()} />}
        swipeToClose={false}
        backButtonClose
        isOpen={isOpen}
        style={styles.modal}
      >
        <Text h1 style={styles.welcome} >Eres genial!</Text>
        <Image
          source={ACHIEVEMENT_IMAGE}
          style={styles.image}
          resizeMode="contain"
        />
        <Text h1 style={styles.welcome}>Ya cumpliste 5 días de:</Text>
        <ScrollView>
          {this.props.achievements.map((habit, index) => renderAchievement(habit.name, index))}
        </ScrollView>
      </Modal>
    );
  }
}

