'use strict';

/**
 * Constant values of wished Authentication Indicator
 *
 * If the payment product is a credit or debit card, this parameter indicates if the 3-D Secure authentication should be performed for this transaction.
 *
 * BYPASS : Bypass 3-D Secure Authentication
 * AVAILABLE : Trigger 3-D Secure Authentication if available
 * MANDATORY : Always trigger 3-D Secure Authentication
 *
 * If the payment product is SEPA Direct Debit, this parameter indicates if the debit agreement (mandate) must be electronically signed or not.
 *
 * BYPASS : Bypass electronic signature
 * SIGN : Ask for electronic signature
 *
 * @type {{AVAILABLE: Number, BYPASS: Number, MANDATORY: Number, SIGN: Number}}
 */
module.exports = {
    BYPASS: 0,
    AVAILABLE: 1,
    MANDATORY: 2,
    SIGN: 1
};
