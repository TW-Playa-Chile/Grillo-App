import moment from 'moment';
import { v4 } from 'uuid';

export const status = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  REACTIVATED: 'reactivated',
};

export class Habit {
  constructor(name) {
    this.index = v4();
    this.name = name;
    this.startDate = moment().format();
    this.endDate = null;
    this.status = status.ACTIVE;
  }
}
