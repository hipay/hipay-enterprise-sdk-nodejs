'use strict';

/**
 * Constant values of Computed Authentication Status
 *
 * Value must be a member of the following list:
 * - "issuer",
 * - "merchant",
 * - "not applicable",
 *
 * ISSUER Liability to issuer
 * MERCHANT Liability to merchant
 * NOT_APPLICABLE Liability not applicable
 *
 * @type {{ISSUER: String, MERCHANT: String, NOT_APPLICABLE: String}}
 */
module.exports = {
    ISSUER: 'issuer',
    MERCHANT: 'merchant',
    NOT_APPLICABLE: 'not applicable',
};
