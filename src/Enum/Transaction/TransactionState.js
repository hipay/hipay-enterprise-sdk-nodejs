'use strict';

/**
 * Constant values of Transaction States
 *
 * Value must be a member of the following list:
 * - completed
 * - waiting
 * - forwarding
 * - pending
 * - declined
 * - error
 *
 * For any others information, you can refer to the section *Transaction Workflow*
 * in HiPayTPP-GatewayAPI documentation
 *
 * COMPLETED Transaction is completed
 * WAITING Transaction is waiting action
 * FORWARDING Transaction is forwarding action
 * PENDING Transaction is in pending process
 * DECLINED Transaction is declined
 * ERROR an error occurred
 *
 * @type {{COMPLETED: String, WAITING: String, ERROR: String, PENDING: String, FORWARDING: String, DECLINED: String}}
 */
module.exports = {
    COMPLETED: 'completed',
    WAITING: 'waiting',
    FORWARDING: 'forwarding',
    PENDING: 'pending',
    DECLINED: 'declined',
    ERROR: 'error'
};
