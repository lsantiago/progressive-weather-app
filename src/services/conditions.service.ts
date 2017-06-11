import { conditions } from '../data/data';

export class ConditionsService {

    json = conditions;

    constructor() {}

    getDataFromCode(code) {
        return this.json.filter(function(elem) {
            return elem.code === code;
        })[0];
    }
} 