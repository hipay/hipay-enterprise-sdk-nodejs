'use strict';

const CommonRequest = require('./CommonRequest');
const InvalidArgumentException = require('../../Error/InvalidArgumentException');

class MaintenanceRequest extends CommonRequest {
    /**
     *  Creates a Maintenance Request Object ready to use with the SDK
     *
     * @param {Object} values
     *
     * Inherited from CommonRequest
     * @param {Object} [values.customData] Request's custom data
     * @param {Object} [values.source] Request's source data
     * @param {'AUTO'|'SAPI'|'CONS'|'PAGE'|'TPE'|'RTRY'|'MANU'|'PREF'|'REVI'|'CMS'|'SSDK'|'CSDK'} [values.source.source] Technical source of this call
     * @param {String} [values.source.integration_version] Integration version (version of the CMS module for example)
     * @param {String} [values.source.brand] Source Brand (CMS name or Site name)
     * @param {String} [values.source.brand_version] Version of the brand (version of your site)
     * @param {Object} [values.basket] Request's basket data. You must send only items that must be captured or refunded.
     *
     * @param {String} values.operation Maintenance Operation. See Transaction.Operation Enum
     * @param {String} [values.currency] Maintenance Operation currency. This three-character currency code complies with ISO 4217.
     * @param {String} [values.amount] Maintenance Operation amount. Amount is required for partial maintenances. Do not specify amount for full captures or refunds.
     * @param {String} [values.operationId] Maintenance Operation ID. This will be returned in the notifications related to this operation.
     * @param {String} [values.subTransactionReference] Sub Transaction Reference targeted by the operation, if relevant.
     */
    constructor(values) {
        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'operation')) {
            this.operation = values.operation;
        } else {
            throw new InvalidArgumentException('Maintenance Request must have an Operation');
        }

        if (Object.prototype.hasOwnProperty.call(values, 'currency')) {
            this.currency = values.currency;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'amount')) {
            this.amount = values.amount;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'operationId')) {
            this.operationId = values.operationId;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'subTransactionReference')) {
            this.subTransactionReference = values.subTransactionReference;
        }
    }

    initValues() {
        super.initValues();

        this.operation = null;
        this.currency = null;
        this.amount = null;
        this.operationId = null;
        this.subTransactionReference = null;
    }
}

module.exports = MaintenanceRequest;
