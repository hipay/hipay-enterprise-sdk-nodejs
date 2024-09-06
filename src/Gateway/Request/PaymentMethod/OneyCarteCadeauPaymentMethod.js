'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');
const InvalidArgumentException = require('../../../Error/InvalidArgumentException');

class OneyCarteCadeauPaymentMethod extends AbstractPaymentMethod {
    /**
     * Creates an Oney Carte Cadeau Payment Method Object
     *
     * @param {Object} values
     * @param {Object} values.paymentProductParameters Carte cadeau parameters
     * @param {Number} values.paymentProductParameters.prepaidCardNumber Carte cadeau number
     * @param {Number} values.paymentProductParameters.prepaidCardSecurityCode Carte cadeau security code
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.prototype.hasOwnProperty.call(values, 'paymentProductParameters')) {
            if (typeof values.paymentProductParameters === 'object') {
                if (!Object.prototype.hasOwnProperty.call(values.paymentProductParameters, 'prepaidCardNumber')) {
                    throw new InvalidArgumentException('Card Number must be present');
                }

                if (!Object.prototype.hasOwnProperty.call(values.paymentProductParameters, 'prepaidCardSecurityCode')) {
                    throw new InvalidArgumentException('Card Security Code must be present');
                }

                this.paymentProductParameters = JSON.stringify({
                    prepaidCardNumber: values.paymentProductParameters.prepaidCardNumber,
                    prepaidCardSecurityCode: values.paymentProductParameters.prepaidCardSecurityCode
                });
            } else {
                this.paymentProductParameters = values.paymentProductParameters;
            }
        }
    }

    initValues() {
        super.initValues();

        this.paymentProductParameters = null;
    }
}

module.exports = OneyCarteCadeauPaymentMethod;
