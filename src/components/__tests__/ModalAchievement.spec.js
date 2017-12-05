import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import ModalAchievement from './../ModalAchievement';
import { Habit } from '../../constants/habit';


Enzyme.configure({ adapter: new Adapter() });

describe('Display achievements every 5 days', () => {
  let modalAchievement;
  let achievements;

  beforeEach(() => {
    const updateHabits = sinon.spy();
    achievements = [new Habit('No fumar'), new Habit('Salir a Correr'), new Habit('Beber agua')];
    modalAchievement = shallow(<ModalAchievement achievements={achievements} updateHabits={updateHabits} />);
  });

  it('Should Render a ModalAchievement component', () => {
    expect(modalAchievement).toBeDefined();
  });

  it('Should Render a Modal with the following message: Eres genial!', () => {
    expect(modalAchievement.find('Text').exists()).toBe(true);
    expect(modalAchievement.find('Text').children().at(0).text()).toContain('Eres genial!');
  });

  it('Should Render a Image', () => {
    expect(modalAchievement.find('Image').exists()).toBe(true);
  });

  it('Should Render a Modal with the following message: Ya cumpliste 5 días de:', () => {
    expect(modalAchievement.find('Text').children().at(1).text()).toContain('Ya cumpliste 5 días de:');
  });

  it('isOpen property should be false if there not are achievements', () => {
    const emptyAchievements = [];
    const updateHabits = sinon.spy();
    const invisibleModalAchievement = shallow(<ModalAchievement achievements={emptyAchievements} updateHabits={updateHabits} />);

    invisibleModalAchievement.instance().showModal();

    expect(invisibleModalAchievement.state().isOpen).toBe(false);
  });

  it('isOpen property should be true if there are achievements', () => {
    expect(modalAchievement.state().isOpen).toBe(true);
  });

  it('Should Render a Modal with the list of achievements', () => {
    const totalTextModal = 2;
    const totalTextAchievements = 3;
    const totalTextFields = totalTextModal + totalTextAchievements;

    expect(modalAchievement.find('Text').length).toBe(totalTextFields);
  });

  it('Should close modal pressing the close icon', () => {
    const modalIcon = modalAchievement.at(0).props().backdropContent;

    modalAchievement.instance().showModal();
    modalIcon.props.onPress();

    expect(modalAchievement.state().isOpen).toBe(false);
  });
});

