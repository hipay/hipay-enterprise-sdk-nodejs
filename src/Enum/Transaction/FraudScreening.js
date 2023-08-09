'use strict';

/**
 * Fraud screening constant values
 *
 * Constants result: The overall result of risk assessment returned by the Payment Gateway.
 * Constants review: The decision made when the overall risk result returns challenged.
 *
 * RESULT_UNKNOWN Unknown result
 * RESULT_PENDING Rules were not checked
 * RESULT_ACCEPTED Transaction accepted
 * RESULT_BLOCKED transaction rejected due to system rules
 * RESULT_CHALLENGED transaction has been marked for review
 *
 * REVIEW_NONE No value
 * REVIEW_PENDING A decision to release or cancel the transaction is pending
 * REVIEW_ALLOWED The transaction has been released for processing
 * REVIEW_DENIED The transaction has been cancelled
 *
 * @type {{RESULT_BLOCKED: String, REVIEW_DENIED: String, RESULT_PENDING: String, RESULT_ACCEPTED: String, REVIEW_ALLOWED: String, REVIEW_PENDING: String, RESULT_CHALLENGED: String, REVIEW_NONE: String, RESULT_UNKNOWN: String}}
 */
module.exports = {
    RESULT_UNKNOWN: 'unknown',
    RESULT_PENDING: 'pending',
    RESULT_ACCEPTED: 'accepted',
    RESULT_BLOCKED: 'blocked',
    RESULT_CHALLENGED: 'challenged',
    REVIEW_NONE: 'none',
    REVIEW_PENDING: 'pending',
    REVIEW_ALLOWED: 'allowed',
    REVIEW_DENIED: 'denied'
};
