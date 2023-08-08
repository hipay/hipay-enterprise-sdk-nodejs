'use strict';

/**
 * Operation type constant values
 *
 * CAPTURE operation capture
 * REFUND operation refund
 * CANCEL operation cancel
 * ACCEPT_CHALLENGE operation acceptChallenge
 * DENY_CHALLENGE operation denyChallenge
 *
 * @type {{DENY_CHALLENGE: String, REFUND: String, CANCEL: String, ACCEPT_CHALLENGE: String, CAPTURE: String}}
 */
module.exports = {
    CAPTURE: 'capture',
    REFUND: 'refund',
    CANCEL: 'cancel',
    ACCEPT_CHALLENGE: 'acceptChallenge',
    DENY_CHALLENGE: 'denyChallenge'
};
