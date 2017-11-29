import React from 'react';
import { Modal, View, Text, Image, StyleSheet, Dimensions, Button } from 'react-native';
import PropTypes from 'prop-types';
import NoHabitImage from './../../images/no_habits.png';
import { COLOR_PRIMARY, FONT_BOLD } from '../../styles/common';
import HabitListContainer from '../../containers/HabitList';


const win = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    flex: 0,
    alignItems: 'center',
    alignSelf: 'stretch',
    width: win.width * 0.8,
    height: win.height * 0.6,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: 300
  },
  welcome: {
    color: COLOR_PRIMARY,
    fontSize: 25,
    margin: 10,
    textAlign: 'center',
    ...FONT_BOLD,
  },
});

const HabitAchievement = (props) => {
  const { onPress } = props;
  return (
    <View>
      <Modal visible={false} style={styles.modal}>
        <Text h1 style={styles.welcome} >Eres genial!</Text>
        <Image
          source={NoHabitImage}
          style={styles.image}
          resizeMode="contain"
        />
        <Text h1 style={styles.welcome}>Ya cumpliste 5 días de:</Text>
        <HabitListContainer />
        <Button title="" onPress={onPress}>Close Modal</Button>
      </Modal>
    </View>
  );
};

HabitAchievement.propTypes = {
  onPress: PropTypes.func.isRequired
};


export default HabitAchievement;
