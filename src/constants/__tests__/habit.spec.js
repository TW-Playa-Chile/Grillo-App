import uuid from 'uuid';

import moment from 'moment';

import { Habit } from '../../constants/habit';

jest.mock('moment')

describe('Generate a new Habit', () => {
  const fakeUuid = 'fake uuid';
  const fakeDate = 'some fake date';

  beforeEach(() => {
    moment.mockReturnValue({ format: jest.fn().mockReturnValue(fakeDate) });
  });

  it('Should generate an uuid for a new Habit', () => {
    uuid.v4 = jest.fn().mockReturnValue(fakeUuid);

    const habit = new Habit('Correr');

    expect(habit.index).toBe(fakeUuid);
  });

  it('Should generate an date for a new Habit', () => {
    const habit = new Habit('Correr');

    expect(habit.startDate).toBe(fakeDate);
  });
});
