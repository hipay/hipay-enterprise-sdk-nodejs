'use strict';

const PaymentMethod = require('./PaymentMethod');

class PaymentCardToken extends PaymentMethod {
    /**
     * @inheritdoc
     *
     * @param {Object}  values
     * @param {String}  [values.requestId]
     * @param {Boolean} [values.multiUse]
     * @param {String}  [values.domesticNetwork]
     * @param {String}  [values.cardHash]
     * @param {String}  [values.cardType]
     * @param {String}  [values.cardCategory]
     * @param {Boolean} [values.forbiddenIssuerCountry]
     * @param {String}  [values.bin]
     */
    constructor(values) {
        if (typeof values !== 'object') {
            values = {};
        }

        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'requestId')) {
            this.requestId = values.requestId;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'multiUse')) {
            this.multiUse = values.multiUse;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'domesticNetwork')) {
            this.domesticNetwork = values.domesticNetwork;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'cardHash')) {
            this.cardHash = values.cardHash;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'cardType')) {
            this.cardType = values.cardType;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'cardCategory')) {
            this.cardCategory = values.cardCategory;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'forbiddenIssuerCountry')) {
            this.forbiddenIssuerCountry = values.forbiddenIssuerCountry;
        }
        if (Object.prototype.hasOwnProperty.call(values, 'bin')) {
            this.bin = values.bin;
        }
    }

    initValues() {
        super.initValues();

        this.requestId = null;
        this.multiUse = null;
        this.domesticNetwork = null;
        this.cardHash = null;
        this.cardType = null;
        this.cardCategory = null;
        this.forbiddenIssuerCountry = null;
        this.bin = null;
    }
}

module.exports = PaymentCardToken;
