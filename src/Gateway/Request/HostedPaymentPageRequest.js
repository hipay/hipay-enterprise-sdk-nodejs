'use strict';

const TransactionRequest = require('./TransactionRequest');
const Template = require('../../Enum/Transaction/Template');
const { AuthenticationIndicator } = require('../../Enum/Transaction');

class HostedPaymentPageRequest extends TransactionRequest {
    /**
     * Creates a Hosted Payment Page Request Object Ready to use with the SDK
     *
     * @param {Object} values
     *
     * --- Inherited from TransactionRequest
     * @param {Object} [values.customData] Request's custom data
     * @param {Object} [values.source] Request's source data
     * @param {'AUTO'|'SAPI'|'CONS'|'PAGE'|'TPE'|'RTRY'|'MANU'|'PREF'|'REVI'|'CMS'|'SSDK'|'CSDK'} [values.source.source] Technical source of this call
     * @param {String} [values.source.integration_version] Integration version (version of the CMS module for example)
     * @param {String} [values.source.brand] Source Brand (CMS name or Site name)
     * @param {String} [values.source.brand_version] Version of the brand (version of your site)
     * @param {Object} [values.basket] Request's basket data
     * @param {String} values.orderid Order unique id
     * @param {'Sale'|'Authorization'} [values.operation] Transaction type: Sale indicates that the transaction is automatically submitted for capture. Authorization indicates that this transaction is sent for authorization only.
     * @param {String} values.description The order short description
     * @param {String} [values.longDescription] Additional description for the order
     * @param {String} values.currency Base currency for the order. This three-character currency code complies with ISO 4217.
     * @param {Number} values.amount Total order amount
     * @param {Number} [values.shipping = 0] Order shipping fee. Defaults to 0.
     * @param {Number} [values.tax = 0] Order tax fee. Defaults to 0.
     * @param {Number} [values.taxRate = 0] Order tax rate. Defaults to 0.
     * @param {String} [values.cid] Customer id, defined by the merchant
     * @param {String} [values.ipaddr] IP Adress of the customer
     * @param {String} [values.acceptUrl] URL to redirect the customer after payment success
     * @param {String} [values.declineUrl] URL to redirect the customer after payment decline
     * @param {String} [values.pendingUrl] URL to redirect the customer after payment pending
     * @param {String} [values.exceptionUrl] URL to redirect the customer after system error
     * @param {String} [values.cancelUrl] URL to redirect the customer after cancellation by the customer
     * @param {String} [values.notifyUrl] URL to send the notifications to
     * @param {String} [values.httpAccept] This should contain the exact content of the HTTP ACCEPT header sent from the customer's browser.
     * @param {String} [values.httpUserAgent] This should contain the exact content of the HTTP User-Agent header sent from the customer's browser.
     * @param {String} [values.deviceFingerprint] This element should contain the value of the device fingerprint generated by the HiPay Front JS SDK.
     * @param {String} [values.language] Locale code of your customer. This will be used to display the next pages in the correct language.
     * @param {CustomerBillingInfoRequest} [values.customerBillingInfo] Billing information of the customer
     * @param {CustomerShippingInfoRequest} [values.customerShippingInfo] Shipping information of the customer
     * @param {DeliveryShippingInfoRequest} [values.deliveryInformation] Delivery information of this order
     * @param {PreviousAuthInfo} [values.previousAuthInfo] Previous Authentication info, for 3DS validation purposes
     * @param {MerchantRiskStatement} [values.merchantRiskStatement] Merchant risk information, for 3DS validation purposes
     * @param {AccountInfo} [values.accountInfo] Customer's account information, for 3DS validation purposes
     * @param {Number} [values.deviceChannel] Device Channel. See the Device Channel Enumeration
     * @param {RecurringInfo} [values.recurringInfo] Reccurent order information, for 3DS validation purposes
     * @param {Number} [values.requestId] The request ID
     * @param {String} [values.softDescriptor] Billing descriptor.
     *
     * @param {Array<String>|string} [values.paymentProductList] List of payment means you want to display on the payment page
     * @param {Array<String>|string} [values.paymentProductCategoryList] List of payment means categories you want to display on the payment page
     * @param {String} [values.template='basic-js'] Template to use. See Transaction.Template enum
     * @param {String} [values.timeLimitToPay] Time validity of the payment page, in seconds
     * @param {Number} [values.multiUse] 0 : Generated Token is not reusable, 1 : Generated Token is reusable
     * @param {String} [values.merchantDisplayName] Merchant name displayed on the payment page
     * @param {String} [values.css] DEPRECATED, ONLY WORKS WITH LEGACY HOSTEDPAGE. CSS URL to use on the Payment Page
     * @param {Number} [values.displaySelector] DEPRECATED, ONLY WORKS WITH LEGACY HOSTEDPAGE. 0 : Do not display payment means selector | 1 : Display selector
     * @param {Number} [values.eci] Transaction Electronic Commerce Indicator. See the Transaction.ECI Enum
     * @param {Number} [values.authenticationIndicator] Card Authentication Indicator. See the Transaction.AuthenticationIndicator Enum
     * @param {Number} [values.expirationLimit = 3] Expiration limit in days
     * @param {String} [values.orderCategoryCode] Category of the order. See ProductCategory Collection
     * @param {String} [values.carrierDescription] Short Description of your carrier
     * @param {Number} [values.salesChannel = 1] Sales Channel. See the Sales Channel Enumeration
     * @param {String} [values.themeCode] Custom theme code to display in the payment page
     * @param {0|1} [values.displayCancelButton = 0] Whether to add a cancel button to the page or not
     */
    constructor(values) {
        super(values);

        if (Object.prototype.hasOwnProperty.call(values, 'paymentProductList')) {
            this.paymentProductList = values.paymentProductList;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'paymentProductCategoryList')) {
            this.paymentProductCategoryList = values.paymentProductCategoryList;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'template')) {
            this.template = values.template;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'timeLimitToPay')) {
            this.timeLimitToPay = values.timeLimitToPay;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'multiUse')) {
            this.multiUse = values.multiUse;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'merchantDisplayName')) {
            this.merchantDisplayName = values.merchantDisplayName;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'css')) {
            this.css = values.css;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'displaySelector')) {
            this.displaySelector = values.displaySelector;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'eci')) {
            this.eci = values.eci;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'authenticationIndicator')) {
            this.authenticationIndicator = values.authenticationIndicator;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'expirationLimit')) {
            this.expirationLimit = values.expirationLimit;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'orderCategoryCode')) {
            this.orderCategoryCode = values.orderCategoryCode;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'carrierDescription')) {
            this.carrierDescription = values.carrierDescription;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'salesChannel')) {
            this.salesChannel = values.salesChannel;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'themeCode')) {
            this.themeCode = values.themeCode;
        }

        if (Object.prototype.hasOwnProperty.call(values, 'displayCancelButton')) {
            this.displayCancelButton = values.displayCancelButton;
        }
    }

    initValues() {
        super.initValues();

        this.paymentProductList = null;
        this.paymentProductCategoryList = null;
        this.template = Template.BASIC_JS;
        this.timeLimitToPay = null;
        this.multiUse = null;
        this.merchantDisplayName = null;
        this.css = null;
        this.displaySelector = null;

        this.eci = null;
        this.authenticationIndicator = AuthenticationIndicator.AVAILABLE;
        this.expirationLimit = 3;
        this.orderCategoryCode = null;
        this.carrierDescription = null;
        this.salesChannel = null;
        this.themeCode = null;
        this.displayCancelButton = 0;
    }
}

module.exports = HostedPaymentPageRequest;
