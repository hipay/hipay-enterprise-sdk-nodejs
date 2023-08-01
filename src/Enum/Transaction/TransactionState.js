'use strict';

/**
 * Constant values of Transaction States
 *
 * Value must be a member of the following list:
 * - completed
 * - forwarding
 * - pending
 * - declined
 * - error
 *
 * For any others information, you can refer to the section *Transaction Workflow*
 * in HiPayTPP-GatewayAPI documentation
 *
 * COMPLETED Transaction is completed
 * FORWARDING Transaction is forwarding action
 * PENDING Transaction is in pending process
 * DECLINED Transaction is declined
 * ERROR an error occurred
 *
 * @type {{COMPLETED: string, ERROR: string, PENDING: string, FORWARDING: string, DECLINED: string}}
 */
module.exports = {
    COMPLETED: 'completed',
    FORWARDING: 'forwarding',
    PENDING: 'pending',
    DECLINED: 'declined',
    ERROR: 'error'
};
