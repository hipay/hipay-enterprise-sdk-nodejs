'use strict';

/**
 * # The Card Verification Code (CVC) constant values
 *
 * The CVC is available on the following credit and debit cards:
 * - Visa (Card Verification Value CVV2)
 * - MasterCard (Card Validation Code CVC2)
 * - Maestro, Diners Club, Discover (Card Identification Number CID)
 * - American Express (Card Identification Number CID).
 *
 * ## Procedure
 * When the acquirer enables you to perform a CVC check, a result code (returned along with the response to authorization request) informs you on the CVC check status.
 * You evaluate the CVC result code that you received with the transaction authorization,
 * and you take appropriate action based on all transaction characteristics.
 *
 * ## Warning
 * **Only a few acquirers return specific CVC check results.**
 * **For most acquirers, the CVC is assumed to be correct if the transaction is successfully authorized.
 *
 * NOT_APPLICABLE NoCVC check was not possible.
 * MATCH  CVC match.
 * NO_MATCH CVC does not match.
 * NOT_PROCESSED CVC request not processed.
 * MISSING CVC should be on the card, but the cardholder has reported that it isn't.
 * NOT_SUPPORTED Card issuer does not support CVC.
 *
 * @type {{NOT_APPLICABLE: String, NOT_SUPPORTED: String, NOT_PROCESSED: String, NO_MATCH: String, MISSING: String, MATCH: String}}
 */
module.exports = {
    NOT_APPLICABLE: ' ',
    MATCH: 'M',
    NO_MATCH: 'N',
    NOT_PROCESSED: 'P',
    MISSING: 'S',
    NOT_SUPPORTED: 'U'
};
