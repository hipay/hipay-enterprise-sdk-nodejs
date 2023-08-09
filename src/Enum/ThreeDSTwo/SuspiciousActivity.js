'use strict';

/**
 * Constant values of Suspicious Activity
 *
 * Suspicious Activity is used in case the merchant wants to mention a detected suspicious activity from the customer
 *
 *     NO_SUSPICIOUS_ACTIVITY: No suspicious activity detected
 *     SUSPICIOUS_ACTIVITY: Suspicious activity detected, this payment should be made with care
 *
 * @type {{NO_SUSPICIOUS_ACTIVITY: Number, SUSPICIOUS_ACTIVITY: Number}}
 */
module.exports = {
    NO_SUSPICIOUS_ACTIVITY: 1,
    SUSPICIOUS_ACTIVITY: 2
};
