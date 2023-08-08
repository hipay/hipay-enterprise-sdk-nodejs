'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');
const InvalidArgumentException = require('../../../Error/InvalidArgumentException');

class IllicadoPaymentMethod extends AbstractPaymentMethod {
    /**
     * Creates an Illicado Payment Method Object
     *
     * @param {Object} values
     * @param {String} values.prepaid_card_number Illicado card number
     * @param {String} values.prepaid_card_security_code Illicado card security code
     */
    constructor(values) {
        super();

        if (Object.prototype.hasOwnProperty.call(values, 'prepaid_card_number')) {
            this.prepaid_card_number = values.prepaid_card_number;
        } else {
            throw new InvalidArgumentException('Card Number must be present');
        }

        if (Object.prototype.hasOwnProperty.call(values, 'prepaid_card_security_code')) {
            this.prepaid_card_security_code = values.prepaid_card_security_code;
        } else {
            throw new InvalidArgumentException('Card Security Code must be present');
        }
    }

    initValues() {
        super.initValues();

        this.prepaid_card_number = null;
        this.prepaid_card_security_code = null;
    }
}

module.exports = IllicadoPaymentMethod;
