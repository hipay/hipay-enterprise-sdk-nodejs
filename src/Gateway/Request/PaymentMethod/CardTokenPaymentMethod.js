'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');
const InvalidArgumentException = require('../../../Error/InvalidArgumentException');
const AuthenticationIndicator = require('../../../Enum/Transaction/AuthenticationIndicator');

class CardTokenPaymentMethod extends AbstractPaymentMethod {
    /**
     * Creates a Card Token Payment Method Object
     *
     * @param {Object} values
     * @param {String} values.cardtoken Card token as returned by the HiPay Tokenization API, or by the HiPay Front JS SDK
     * @param {Number} values.eci Transaction Electronic Commerce Indicator. See the Transaction.ECI Enum
     * @param {Number} [values.authentication_indicator] Card Authentication Indicator. See the Transaction.AuthenticationIndicator Enum
     */
    constructor(values) {
        super();

        if (Object.hasOwn(values, 'cardtoken')) {
            this.cardtoken = values.cardtoken;
        } else {
            throw new InvalidArgumentException('Card Token must be present');
        }

        if (Object.hasOwn(values, 'eci')) {
            this.eci = values.eci;
        } else {
            throw new InvalidArgumentException('ECI must be present');
        }

        if (Object.hasOwn(values, 'authentication_indicator')) {
            this.authentication_indicator = values.authentication_indicator;
        }
    }

    initValues() {
        super.initValues();

        this.cardtoken = null;
        this.eci = null;
        this.authentication_indicator = AuthenticationIndicator.AVAILABLE;
    }
}

module.exports = CardTokenPaymentMethod;
