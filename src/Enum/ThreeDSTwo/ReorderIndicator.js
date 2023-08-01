'use strict';

/**
 * Constant values of Reorder Indicator
 *
 * Reorder Indicator is used to check if the customer has already ordered the same items
 *
 *     FIRST_TIME_ORDERED: This order has never been done by the customer
 *     REORDERED: The customer has already made this order in the past
 *
 * @type {{FIRST_TIME_ORDERED: number, REORDERED: number}}
 */
module.exports = {
    FIRST_TIME_ORDERED: 1,
    REORDERED: 2
};
