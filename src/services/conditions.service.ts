import { conditions } from '../data/data';

export class ConditionsService {

  json = conditions;

  getDataFromCode(code) {
    return this.json.filter(elem => {
      return elem.code === code;
    })[0];
  }
}
