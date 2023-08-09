'use strict';

/**
 * Constant values of Shipping Indicator
 *
 * Shipping Indicator is used to check the cutomer shipping address
 *
 *     SHIP_TO_CARDHOLDER_BILLING_ADDRESS: The shipping and billing address match
 *     SHIP_TO_VERIFIED_ADDRESS: The shipping and billing address don't match, but the customer has already used this address in the past
 *     SHIP_TO_DIFFERENT_ADDRESS: The shipping and billing address don't match, and the customer has never used this address in the past
 *     SHIP_TO_STORE: The order is meant to be fetched at a physical store
 *     DIGITAL_GOODS: The order contains no physical goods
 *     DIGITAL_TRAVEL_EVENT_TICKETS: The order contains no physical goods, but contains travel or event tickets
 *     OTHER: Any other situation
 *
 * @type {{SHIP_TO_CARDHOLDER_BILLING_ADDRESS: Number, SHIP_TO_VERIFIED_ADDRESS: Number, SHIP_TO_DIFFERENT_ADDRESS: Number, SHIP_TO_STORE: Number, DIGITAL_GOODS: Number, DIGITAL_TRAVEL_EVENT_TICKETS: Number, OTHER: Number}}
 */
module.exports = {
    SHIP_TO_CARDHOLDER_BILLING_ADDRESS: 1,
    SHIP_TO_VERIFIED_ADDRESS: 2,
    SHIP_TO_DIFFERENT_ADDRESS: 3,
    SHIP_TO_STORE: 4,
    DIGITAL_GOODS: 5,
    DIGITAL_TRAVEL_EVENT_TICKETS: 6,
    OTHER: 7
};
