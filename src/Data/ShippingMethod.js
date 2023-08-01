'use strict';

class ShippingMethod {
    static DEFAULT_LANG_ISO_CODE = 'EN';

    static PREDEFINED_SHIPPING_MODES = [
        {
            code: 'STORE',
            displayName: {
                EN: 'store',
                FR: 'boutique'
            }
        },
        {
            code: 'CARRIER',
            displayName: {
                EN: 'carrier',
                FR: 'transporteur'
            }
        },
        {
            code: 'RELAYPOINT',
            displayName: {
                EN: 'relay point',
                FR: 'point relai'
            }
        },
        {
            code: 'ELECTRONIC',
            displayName: {
                EN: 'electronic',
                FR: 'electronique'
            }
        },
        {
            code: 'TRAVEL',
            displayName: {
                EN: 'travel',
                FR: 'voyage'
            }
        }
    ];

    static PREDEFINED_SHIPPING_TYPES = [
        {
            code: 'STANDARD',
            displayName: {
                EN: 'standard',
                FR: 'standard'
            }
        },
        {
            code: 'EXPRESS',
            displayName: {
                EN: 'express',
                FR: 'express'
            }
        },
        {
            code: 'PRIORITY24H',
            displayName: {
                EN: 'priority 24H',
                FR: 'priorité 24H'
            }
        },
        {
            code: 'PRIORITY2H',
            displayName: {
                EN: 'priority 2H',
                FR: 'priorité 2H'
            }
        },
        {
            code: 'PRIORITY1H',
            displayName: {
                EN: 'priority 1H',
                FR: 'priorité 1H'
            }
        },
        {
            code: 'INSTANT',
            displayName: {
                EN: 'instant',
                FR: 'instantané'
            }
        }
    ];

    /**
     * Technical code
     * @type {"STORE"|"CARRIER"|"RELAYPOINT"|"ELECTRONIC"|"TRAVEL"|"STANDARD"|"EXPRESS"|"PRIORITY24H"|"PRIORITY2H"|"PRIORITY1H"|"INSTANT"}
     * @private
     */
    _code;

    /**
     * Human readable name, localized
     * @type {{isoCode: string}}
     * @private
     */
    _displayName;

    /**
     * Creates a new ShippingMethod instance with the provided data
     * @param {Object} [shippingMethodData = {}]
     */
    constructor(shippingMethodData = {}) {
        for (let prop in shippingMethodData) {
            if (Object.prototype.hasOwnProperty.call(this, '_' + prop)) {
                this[`_${prop}`] = shippingMethodData[prop];
            }
        }
    }

    /**
     * Technical code
     * @returns {"STORE"|"CARRIER"|"RELAYPOINT"|"ELECTRONIC"|"TRAVEL"|"STANDARD"|"EXPRESS"|"PRIORITY24H"|"PRIORITY2H"|"PRIORITY1H"|"INSTANT"}
     */
    get code() {
        return this._code;
    }

    /**
     * @param {"STORE"|"CARRIER"|"RELAYPOINT"|"ELECTRONIC"|"TRAVEL"|"STANDARD"|"EXPRESS"|"PRIORITY24H"|"PRIORITY2H"|"PRIORITY1H"|"INSTANT"} value
     */
    set code(value) {
        this._code = value;
    }

    /**
     *
     * @returns {string}
     */
    getDisplayName(langIsoCode = ShippingMethod.DEFAULT_LANG_ISO_CODE) {
        return this._displayName?.[langIsoCode] ?? this._displayName?.[ShippingMethod.DEFAULT_LANG_ISO_CODE];
    }

    /**
     * @param {{isoCode: string}} value
     */
    set displayName(value) {
        this._displayName = value;
    }

    static getShippingMethods() {
        let shippingModes = this.PREDEFINED_SHIPPING_MODES.map((elt) => new ShippingMethod(elt));
        let shippingTypes = this.PREDEFINED_SHIPPING_TYPES.map((elt) => new ShippingMethod(elt));

        return {
            mode: shippingModes,
            shipping: shippingTypes
        };
    }
}

module.exports = ShippingMethod;
