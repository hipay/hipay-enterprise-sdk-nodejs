'use strict';

/**
 * Constant values of Electronic Commerce Indicator (ECI)
 *
 * The ECI indicates the security level at which the payment information is processed between the cardholder and merchant.
 *
 * UNDEFINED default value
 * MOTO MO/TO (Card Not Present)
 * RECURRING_MOTO Recurring MO/TO
 * INSTALLMENT_PAYMENT Partial payment of goods/services that have already been delivered, but will be paid for in several spread payments.
 * MANUALLY_KEYED_CARD_PRESENT Manually Keyed (Card Present)
 * SECURE_ECOMMERCE Secure E-commerce with SSL/TLS Encryption
 * RECURRING_ECOMMERCE The first transaction of the customer was an e-Commerce transaction.
 *
 * @type {{RECURRING_MOTO: Number, MANUALLY_KEYED_CARD_PRESENT: Number, UNDEFINED: Number, MOTO: Number, RECURRING_ECOMMERCE: Number, INSTALLMENT_PAYMENT: Number, SECURE_ECOMMERCE: Number}}
 */
module.exports = {
    UNDEFINED: -1,
    MOTO: 1,
    RECURRING_MOTO: 2,
    INSTALLMENT_PAYMENT: 3,
    MANUALLY_KEYED_CARD_PRESENT: 4,
    SECURE_ECOMMERCE: 7,
    RECURRING_ECOMMERCE: 9
};
