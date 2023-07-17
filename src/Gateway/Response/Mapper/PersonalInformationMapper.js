'use strict';

const AbstractMapper = require('./AbstractMapper');
const PersonalInformation = require('../PersonalInformation');

class PersonalInformationMapper extends AbstractMapper {
  mapResponseToModel() {
    let values = {
      firstname:
        typeof this.source.firstname !== 'undefined'
          ? this.source.firstname
          : null,
      lastname:
        typeof this.source.lastname !== 'undefined'
          ? this.source.lastname
          : null,
      streetAddress:
        typeof this.source.streetAddress !== 'undefined'
          ? this.source.streetAddress
          : null,
      locality:
        typeof this.source.locality !== 'undefined'
          ? this.source.locality
          : null,
      postalCode:
        typeof this.source.postalCode !== 'undefined'
          ? this.source.postalCode
          : null,
      country:
        typeof this.source.country !== 'undefined' ? this.source.country : null,
      msisdn:
        typeof this.source.msisdn !== 'undefined' ? this.source.msisdn : null,
      phone:
        typeof this.source.phone !== 'undefined' ? this.source.phone : null,
      phoneOperator:
        typeof this.source.phoneOperator !== 'undefined'
          ? this.source.phoneOperator
          : null,
      email: typeof this.source.email !== 'undefined' ? this.source.email : null
    };

    this._modelObject = new PersonalInformation(values);
  }
}

module.exports = PersonalInformationMapper;
