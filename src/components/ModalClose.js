import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import PropTypes from 'prop-types';

import CLOSE_HABIT_IMAGE from './../images/dont_give_up.png';

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

export default class ModalClose extends Component {
  static propTypes = {
    modals: PropTypes.arrayOf(PropTypes.object).isRequired,
    toAddNotification: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const lastModal = nextProps.modals.pop();
    if (lastModal) { this.showModal(); }
  }

  showModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Modal
        position="center"
        backdropContent={<Icon color="white" style={{ position: 'absolute', top: 20, right: 20 }} name="close" type="font-awesome" onPress={() => this.closeModal()} />}
        swipeToClose={false}
        backButtonClose
        isOpen={isOpen}
        style={styles.modal}
        onClosed={() => this.props.toAddNotification('El hábito se ha detenido', 'red')}
      >
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={CLOSE_HABIT_IMAGE}

        />
      </Modal>
    );
  }
}

