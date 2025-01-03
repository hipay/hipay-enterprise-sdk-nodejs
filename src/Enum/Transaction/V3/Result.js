 'use strict';

/**
 * Fraud screening result constant values
 *
 * Constants result: The overall result of risk assessment returned by the Payment Gateway.
 *
 * NOT_LAUNCHED Result not launched
 * PENDING Result pending
 * ACCEPTED Result accepted
 * REQUEST_EXEMPTION
 * BLOCKED Result blocked
 * CHALLENGED Result challenged
 * AUTHENTICATE Result authenticated
 * FORCE_AUTHENTICATE Result force authenticated
 * OVERRIDE Result overrided
 * ACCEPT_WITH_NO_PREFERENCE
 * DENIED Result denied
 * ALLOWED Result allowed
 *
 * @type {{NOT_LAUNCHED: String, PENDING: String, ACCEPTED: String, REQUEST_EXEMPTION: String, BLOCKED: String, CHALLENGED: String, AUTHENTICATE: String, FORCE_AUTHENTICATE: String, OVERRIDE: String, ACCEPT_WITH_NO_PREFERENCE: String, DENIED: String, ALLOWED: String}}
 */
module.exports = {
    NOT_LAUNCHED: 'NOT_LAUNCHED',
    PENDING: 'PENDING',
    ACCEPTED: 'ACCEPTED',
    REQUEST_EXEMPTION: 'REQUEST EXEMPTION',
    BLOCKED: 'BLOCKED',
    CHALLENGED: 'CHALLENGED',
    AUTHENTICATE: 'AUTHENTICATE',
    FORCE_AUTHENTICATE: 'FORCE_AUTHENTICATE',
    OVERRIDE: 'OVERRIDE',
    ACCEPT_WITH_NO_PREFERENCE: 'ACCEPT WITH NO PREFERENCE',
    DENIED: 'DENIED',
    ALLOWED: 'ALLOWED'
};
