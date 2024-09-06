'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');
const InvalidArgumentException = require('../../../Error/InvalidArgumentException');

class IllicadoPaymentMethod extends AbstractPaymentMethod {
    /**
     * Creates an Illicado Payment Method Object
     *
     * @param {Object} values
     * @param {String} values.prepaidCardNumber Illicado card number
     * @param {String} values.prepaidCardSecurityCode Illicado card security code
     */
    constructor(values) {
        super();

        if (Object.prototype.hasOwnProperty.call(values, 'prepaidCardNumber')) {
            this.prepaidCardNumber = values.prepaidCardNumber;
        } else {
            throw new InvalidArgumentException('Card Number must be present');
        }

        if (Object.prototype.hasOwnProperty.call(values, 'prepaidCardSecurityCode')) {
            this.prepaidCardSecurityCode = values.prepaidCardSecurityCode;
        } else {
            throw new InvalidArgumentException('Card Security Code must be present');
        }
    }

    initValues() {
        super.initValues();

        this.prepaidCardNumber = null;
        this.prepaidCardSecurityCode = null;
    }
}

module.exports = IllicadoPaymentMethod;
