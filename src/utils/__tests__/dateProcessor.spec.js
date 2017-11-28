import moment from 'moment';
import hasAcomplishedFiveDays from './../dateProcessor';

it('Should return true if start date was 5 days before now', () => {
  const startDate = moment();
  const fiveDays = 5;
  startDate.subtract(fiveDays, 'days');
  expect(hasAcomplishedFiveDays(startDate.format())).toBe(true);
});

it('Should return false if start date was 4 days and 23 hours, 59 minutes and 59 seconds before now', () => {
  const startDate = moment();
  const boundaryConditionFiveDays = moment.duration('4 23:59:59.000');
  startDate.subtract(boundaryConditionFiveDays);
  expect(hasAcomplishedFiveDays(startDate.format())).toBe(false);
});

it('Should return true if start date was 6 days before now', () => {
  const startDate = moment();
  const sixDays = 6;
  startDate.subtract(sixDays, 'days');
  expect(hasAcomplishedFiveDays(startDate.format())).toBe(true);
});

