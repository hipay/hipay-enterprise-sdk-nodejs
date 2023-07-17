'use strict';

/**
 * Security Code Type constant values
 *
 * NONE no security code. Ex.: Maestro
 * NOT_APPLICABLE Security code not applicable. Ex.: CMC (for domestic networks or specific issuer payment products, we don't know if there's a security code as it depends on the card scheme)
 * CVV Type CVV. EX.: Visa, MasterCard
 * CID Type cid. Ex.: American Express
 * @type {{NOT_APPLICABLE: string, CVV: string, NONE: string, CID: string}}
 */
module.exports = {
  NONE: 'none',
  NOT_APPLICABLE: 'not_applicable',
  CVV: 'cvv',
  CID: 'cid'
};
