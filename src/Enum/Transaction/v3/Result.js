'use strict';

/**
 * Fraud screening result constant values
 *
 * Constants result: The overall result of risk assessment returned by the Payment Gateway.
 *
 * NOT_LAUNCHED Result not launched
 * PENDING Result pending
 * ACCEPTED Result accepted
 * REQUEST Result requested
 * BLOCKED Result blocked
 * CHALLENGED Result challenged
 * AUTHENTICATE Result authenticated
 * FORCE_AUTHENTICATE Result force authenticated
 * OVERRIDE Result overrided
 * ACCEPT Result accepted
 * DENIED Result denied
 * ALLOWED Result allowed
 *
 * @type {{NOT_LAUNCHED: String, PENDING: String, ACCEPTED: String, REQUEST: String, BLOCKED: String, CHALLENGED: String, AUTHENTICATE: String, FORCE_AUTHENTICATE: String, OVERRIDE: String, ACCEPT: String, DENIED: String, ALLOWED: String }}
 */
module.exports = {
    NOT_LAUNCHED: 'NOT_LAUNCHED',
    PENDING: 'PENDING',
    ACCEPTED: 'ACCEPTED',
    REQUEST: 'REQUEST',
    BLOCKED: 'BLOCKED',
    CHALLENGED: 'CHALLENGED',
    AUTHENTICATE: 'AUTHENTICATE',
    FORCE_AUTHENTICATE: 'FORCE_AUTHENTICATE',
    OVERRIDE: 'OVERRIDE',
    ACCEPT: 'ACCEPT',
    DENIED: 'DENIED',
    ALLOWED: 'ALLOWED'
};
