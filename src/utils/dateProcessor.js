import moment from 'moment';

export default function hasAcomplishedFiveDays(startDate) {
  const currentdate = moment();
  const fiveDays = 5;
  return currentdate.diff(moment(startDate), 'days') === fiveDays;
}
