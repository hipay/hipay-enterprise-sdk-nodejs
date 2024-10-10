'use strict';

/**
 * Constant values of Computed Authentication Status
 *
 * Value must be a member of the following list:
 * - "NOT_LAUNCHED",
 * - "PENDING",
 * - "ACCEPTED",
 * - "REQUEST EXEMPTION",
 * - "BLOCKED",
 * - "CHALLENGED",
 * - "AUTHENTICATE",
 * - "FORCE_AUTHENTICATE"
 * - "OVERRIDE",
 * - "ACCEPT WITH NO PREFERENCE",
 * - "DENIED",
 * - "ALLOWED"
 *
 * NOT_LAUNCHED not_launched
 * PENDING pending
 * ACCEPTED accepted
 * REQUEST EXEMPTION REQUEST exemption
 * BLOCKED blocked
 * CHALLENGED challenged
 * AUTHENTICATE authenticate
 * FORCE_AUTHENTICATE force_authenticate
 * OVERRIDE override
 * ACCEPT WITH NO PREFERENCE accept with no preference
 * DENIED denied
 * ALLOWED allowed
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
