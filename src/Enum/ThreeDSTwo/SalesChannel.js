'use strict';

/**
 * Constant values of Sales Channel
 *
 * Sales Channel is used to check the way the customer made the payment
 *
 *     DEFAULT
 *     ECOMMERCE_API: The customer paid directly on the merchant's website
 *     HOSTED_PAYMENT_PAGE: The customer paid on a hosted payment page hosted by HiPay
 *     POS: The customer paid on a physical terminal
 *
 * @type {{DEFAULT: Number, ECOMMERCE_API: Number, HOSTED_PAYMENT_PAGE: Number, POS: Number}}
 */
module.exports = {
    DEFAULT: 0,
    ECOMMERCE_API: 1,
    HOSTED_PAYMENT_PAGE: 2,
    POS: 3
};
