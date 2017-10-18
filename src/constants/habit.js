import moment from 'moment';

export const status = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    REACTIVATED: 'reactivated',
}

export class Habit {
    constructor(name) {
        this.name = name;
        this.startDate = moment().format();
        this.endDate = null;
        this.status = status.ACTIVE;
    }
}


