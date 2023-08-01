'use strict';

/**
 * Constant values of Delivery Time Frame
 *
 * Delivery Time Frame is used to specify the delivery time of the order
 *
 *     ELECTRONIC_DELIVERY: Electronic only goods, no physical delivery
 *     SAME_DAY_SHIPPING: Goods will be delivered the day they are ordered
 *     OVERNIGHT_SHIPPING: Goods will be delivered the day after the order
 *     TWO_DAY_OR_MORE_SHIPPING: Goods will be delivered at a later date
 *
 * @type {{ELECTRONIC_DELIVERY: number, SAME_DAY_SHIPPING: number, OVERNIGHT_SHIPPING: number, TWO_DAY_OR_MORE_SHIPPING: number}}
 */
module.exports = {
    ELECTRONIC_DELIVERY: 1,
    SAME_DAY_SHIPPING: 2,
    OVERNIGHT_SHIPPING: 3,
    TWO_DAY_OR_MORE_SHIPPING: 4
};
