'use strict';

/**
 * The Address Verification Service (AVS) constant values
 *
 * The Address Verification Service (AVS) is a system that allows ecommerce merchants to check a cardholder's billing address.
 * AVS provides merchants with a key indicator that helps verify whether or not a transaction is valid.
 *
 * NOT_APPLICABLE No AVS response was obtained (Default value empty).
 * EXACT_MATCH  Street addresses and postal codes match.
 * ADDRESS_MATCH  The street addresses match but the postal codes do not match.
 * POSTCODE_MATCH  The postal codes match but the street addresses do not match.
 * NO_MATCH  Neither the street addresses nor the postal codes match.
 * NOT_COMPATIBLE  Street addresses and postal codes not verified due to incompatible formats.
 * NOT_ALLOWED  AVS data is invalid or AVS is not allowed for this card type.
 * UNAVAILABLE  Address information is unavailable for that account number, or the card issuer does not support AVS.
 * RETRY  Issuer authorization system is unavailable, try again later.
 * NOT_SUPPORTED  Card issuer does not support AVS.
 * @type {{NOT_APPLICABLE: String, EXACT_MATCH: String, ADDRESS_MATCH: String, NOT_SUPPORTED: String, NO_MATCH: String, NOT_ALLOWED: String, UNAVAILABLE: String, NOT_COMPATIBLE: String, RETRY: String, POSTCODE_MATCH: String}}
 */
module.exports = {
    NOT_APPLICABLE: ' ',
    EXACT_MATCH: 'Y',
    ADDRESS_MATCH: 'A',
    POSTCODE_MATCH: 'P',
    NO_MATCH: 'N',
    NOT_COMPATIBLE: 'C',
    NOT_ALLOWED: 'E',
    UNAVAILABLE: 'U',
    RETRY: 'R',
    NOT_SUPPORTED: 'S'
};
