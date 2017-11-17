import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HabitAchievement from './../HabitAchievement';


Enzyme.configure({ adapter: new Adapter() });

describe('Display achievements every 5 days', () => {
  let achievementComponent;

  beforeEach(() => {
    achievementComponent = shallow(<HabitAchievement />);
  });

  it('Should Render a HabbitAchievement component', () => {
    expect(achievementComponent.find('View').exists()).toBe(true);
  });


  it('Should Render a Modal with the following message: Eres genial!', () => {
    expect(achievementComponent.find('Text').exists()).toBe(true);
    expect(achievementComponent.find('Text').children().at(0).text()).toContain('Eres genial!');
  });

  it('Should Render a Image', () => {
    expect(achievementComponent.find('Image').exists()).toBe(true);
  });

  it('Should Render a Modal with the following message: Ya cumpliste 5 días de:', () => {
    expect(achievementComponent.find('Text').children().at(1).text()).toContain('Ya cumpliste 5 días de:');
  });

  it('Should Render a Modal with the list of achievements', () => {
    const achievements = ['No fumar', 'Salir a Correr', 'Beber agua'];
    achievementComponent = shallow(<HabitAchievement achievements={achievements} />);
  });
});

