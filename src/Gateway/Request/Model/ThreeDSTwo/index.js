'use strict';

const AccountInfo = require('./AccountInfo');
AccountInfo.Customer = require('./AccountInfo/Customer');
AccountInfo.Payment = require('./AccountInfo/Payment');
AccountInfo.Purchase = require('./AccountInfo/Purchase');
AccountInfo.Shipping = require('./AccountInfo/Shipping');

const BrowserInfo = require('./BrowserInfo');

const MerchantRiskStatement = require('./MerchantRiskStatement');
MerchantRiskStatement.GiftCard = require('./MerchantRiskStatement/GiftCard');

const PreviousAuthInfo = require('./PreviousAuthInfo');
const RecurringInfo = require('./RecurringInfo');

module.exports = {
    AccountInfo,
    BrowserInfo,
    MerchantRiskStatement,
    PreviousAuthInfo,
    RecurringInfo
};
