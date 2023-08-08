'use strict';

/**
 * Constant values of Device Channel
 *
 * Device Channel is used to specify the type of device making the order
 *
 *     APP_BASED: The order is made from a heavy application
 *     BROWSER: The order is made from a website on a browser
 *     THREE_DS_REQUESTOR_INITIATED: The order is made from an automatic process
 *
 * @type {{APP_BASED: Number, BROWSER: Number, THREE_DS_REQUESTOR_INITIATED: Number}}
 */
module.exports = {
    APP_BASED: 1,
    BROWSER: 2,
    THREE_DS_REQUESTOR_INITIATED: 3
};
