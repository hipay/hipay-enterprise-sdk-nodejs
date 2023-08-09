'use strict';

const AbstractPaymentMethod = require('./AbstractPaymentMethod');
const CardTokenPaymentMethod = require('./CardTokenPaymentMethod');
const IllicadoPaymentMethod = require('./IllicadoPaymentMethod');
const IssuerBankIDPaymentMethod = require('./IssuerBankIDPaymentMethod');
const MultibancoPaymentMethod = require('./MultibancoPaymentMethod');
const OneyCarteCadeauPaymentMethod = require('./OneyCarteCadeauPaymentMethod');
const SEPADirectDebitPaymentMethod = require('./SEPADirectDebitPaymentMethod');
const XTimesCreditCardPaymentMethod = require('./XTimesCreditCardPaymentMethod');

module.exports = {
    AbstractPaymentMethod,
    CardTokenPaymentMethod,
    IllicadoPaymentMethod,
    IssuerBankIDPaymentMethod,
    MultibancoPaymentMethod,
    OneyCarteCadeauPaymentMethod,
    SEPADirectDebitPaymentMethod,
    XTimesCreditCardPaymentMethod
};
