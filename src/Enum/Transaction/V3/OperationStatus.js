'use strict';

/**
 * Operation Status constants values
 *
 * CANCELLED Operation status is cancelled
 * COMPLETED Operation status is completed
 * CREATED Operation status is created
 * FAILURE Operation status is failure
 * NOT_PROCESSED Operation status is not_processed
 * PENDING Operation status is pending
 * RECONCILED Operation status is reconciled
 * REMITTED Operation status is remitted
 * REQUESTED Operation status is requested 
 * RETRIED Operation status is retried
 * SPLIT Operation status is split
 *
 * @type {{CANCELLED: String, COMPLETED: String, CREATED: String, FAILURE: String, NOT_PROCESSED: String, PENDING: String, RECONCILED: String, REMITTED: String, REQUESTED: String, RETRIED: String, SPLIT: String}}
 */
module.exports = {
    CANCELLED: 'CANCELLED',
    COMPLETED: 'COMPLETED',
    CREATED: 'CREATED',
    FAILURE: 'FAILURE',
    NOT_PROCESSED: 'NOT_PROCESSED',
    PENDING: 'PENDING',
    RECONCILED: 'RECONCILED',
    REMITTED: 'REMITTED',
    REQUESTED: 'REQUESTED',
    RETRIED: 'RETRIED',
    SPLIT: 'SPLIT'
};
