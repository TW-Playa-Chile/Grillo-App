import moment from 'moment';
import dateProcessor from './../dateProcessor';

it('Should return day number when startDate and currentDate is given', () => {
  const startDate = moment();
  startDate.subtract(5, 'days');
  expect(dateProcessor(startDate.format())).toBe(true);
});
