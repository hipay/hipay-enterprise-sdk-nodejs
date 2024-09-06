'use strict';
const AbstractPaymentMethod = require('./AbstractPaymentMethod');
const InvalidArgumentException = require('../../../Error/InvalidArgumentException');

class XTimesCreditCardPaymentMethod extends AbstractPaymentMethod {
    /**
     * Creates an Oney Xtimes Payment Method Object
     *
     * @param {Object} values
     * @param {Number} values.eci Transaction Electronic Commerce Indicator. See the Transaction.ECI Enum
     * @param {String} [values.orderCategoryCode] Category of the order. See ProductCategory Collection
     * @param {String} [values.carrierDescription] Short Description of your carrier
     * @param {Object} [values.paymentProductParameters] Additional parameters
     */
    constructor(values) {
        super();

        if (Object.prototype.hasOwnProperty.call(values, 'eci')) {
            this.eci = values.eci;
        } else {
            throw new InvalidArgumentException('ECI must be present');
        }

        if (Object.prototype.hasOwnProperty.call(values, 'orderCategoryCode')) {
            this.orderCategoryCode = values.orderCategoryCode;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'carrierDescription')) {
            this.carrierDescription = values.carrierDescription;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'paymentProductParameters')) {
            if (typeof values.paymentProductParameters === 'object') {
                this.paymentProductParameters = JSON.stringify(values.paymentProductParameters);
            } else {
                this.paymentProductParameters = values.paymentProductParameters;
            }
        }
    }

    initValues() {
        super.initValues();

        this.eci = null;
        this.orderCategoryCode = null;
        this.carrierDescription = null;
        this.paymentProductParameters = null;
    }
}

module.exports = XTimesCreditCardPaymentMethod;
