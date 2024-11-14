'use strict';

/**
 * Constant values of Computed Authentication Status
 *
 * Value must be a member of the following list:
 * - "No authentication",
 * - "Abandoned strong authentication",
 * - "Unsuccessful authentication attempted",
 * - "Challenge authentication",
 * - "Frictionless authentication",
 * - "Successful authentication",
 * - "Failed authentication",
 * - "Unknown authentication"
 *
 * NO_AUTHENTICATION There is no authentication
 * ABANDONED Authentication is abandoned
 * UNSUCCESSFUL Authentication is unsuccessful
 * CHALLENGE Authentication is challenge
 * FRICTIONLESS Authentication is frictionless
 * SUCCESSFUL Authentication is successful
 * FAILED Authentication is failed
 * UNKNOWN Authentication is unknown
 *
 *
 *
 * @type {{NO_AUTHENTICATION: String, ABANDONED: String, UNSUCCESSFUL: String, CHALLENGE: String, FRICTIONLESS: String, SUCCESSFUL: String, FAILED: String, UNKNOWN: String}}
 */
module.exports = {
    NO_AUTHENTICATION: 'No authentication',
    ABANDONED: 'Abandoned strong',
    UNSUCCESSFUL: 'Unsuccessful authentication',
    CHALLENGE: 'Challenge authentication',
    FRICTIONLESS: 'Frictionless authentication',
    SUCCESSFUL: 'Successful authentication',
    FAILED: 'Failed authentication',
    UNKNOWN: 'Unknown authentication'
};
