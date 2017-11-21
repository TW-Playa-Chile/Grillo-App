import React from 'react';
import { Modal, View, Text, Image, StyleSheet, Dimensions, Button } from 'react-native';
import PropTypes from 'prop-types';
import NoHabitImage from './../../images/no_habits.png';
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_BACKGROUND, BORDER_RADIUS, FONT_BOLD } from '../../styles/common';


const win = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    flex: 0,
    alignSelf: 'stretch',
    width: win.width * 0.9,
    height: win.height * 0.6,
  },
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_BACKGROUND,
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
      <Modal visible>
        <Text h1 style={styles.welcome} >Eres genial!</Text>
        <Image
          source={NoHabitImage}
          style={styles.image}
          resizeMode="contain"
        />
        <Text h1 style={styles.welcome}>Ya cumpliste 5 días de:</Text>
        <Button title="" onPress={onPress}>Close Modal...</Button>
      </Modal>
    </View>
  );
};

HabitAchievement.propTypes = {
  onPress: PropTypes.func
};

HabitAchievement.defaultProps = {
  onPress: () => {}
};

export default HabitAchievement;
