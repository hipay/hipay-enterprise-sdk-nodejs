'use strict';

/**
 * Constant values of Purchase Indicator
 *
 * Purchase Indicator is used to check if the merchandise is already available, or if it this is a preorder
 *
 *     MERCHANDISE_AVAILABLE: The merchandise is in stock
 *     FUTURE_AVAILABILITY: The merchandise is not yet available
 *
 * @type {{MERCHANDISE_AVAILABLE: number, FUTURE_AVAILABILITY: number}}
 */
module.exports = {
    MERCHANDISE_AVAILABLE: 1,
    FUTURE_AVAILABILITY: 2
};
