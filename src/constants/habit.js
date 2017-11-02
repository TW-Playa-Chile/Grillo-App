import moment from 'moment';

export const status = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  REACTIVATED: 'reactivated',
}

export class Habit {
  constructor(name) {
    this.index = guid();
    this.name = name;
    this.startDate = moment().format();
    this.endDate = null;
    this.status = status.ACTIVE;
  }
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}


