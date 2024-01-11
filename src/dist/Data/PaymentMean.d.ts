export = PaymentMean;
/**
 * The collection of all payment means handled by this SDK
 */
declare class PaymentMean {
    static _PAYMENT_CONFIG_FILE_PATH: string;
    /**
     * Returns the payment mean with the specified payment mean code, or null if the payment mean does not exist
     * @param {String} paymentMeanCode A payment mean code
     * @returns {PaymentMean|null}
     */
    static getPaymentMean(paymentMeanCode: string): PaymentMean | null;
    /**
     * Returns all payment means in the selected categories, or all payment means if no category is sent
     * @param {Array<String>} categories An array of payment means categories
     */
    static getPaymentMeans(categories?: Array<string>): PaymentMean[];
    static _getPaymentMeansData(): any[];
    /**
     * Sorts payment mean code list by priority and returns associated Payment Means
     *
     * @param {Array<String>} paymentMeanList
     * @returns {Array<PaymentMean>}
     */
    static orderByPriority(paymentMeanList?: Array<string>): Array<PaymentMean>;
    /**
     * Creates a new PaymentMean instance with the provided data
     * @param {Object} [paymentMeanData = {}]
     */
    constructor(paymentMeanData?: any);
    /**
     * The technical code of the payment mean
     * @type {String}
     * @private
     */
    private _paymentMeanCode;
    /**
     * Human readable name of the payment mean
     * @type {String}
     * @private
     */
    private _brandName;
    /**
     * Payment mean's category
     * @type {String}
     * @private
     */
    private _category;
    /**
     * Short payment mean description
     * @type {String}
     * @private
     */
    private _comment;
    /**
     * Can use 3DS security
     * @type {Boolean}
     * @private
     */
    private _can3ds;
    /**
     * Can be used for recurring payment
     * @type {Boolean}
     * @private
     */
    private _canRecurring;
    /**
     * Can be captured manually
     * @type {Boolean}
     * @private
     */
    private _canManualCapture;
    /**
     * Can be captured partially
     * @type {Boolean}
     * @private
     */
    private _canManualCapturePartially;
    /**
     * Can be refunded
     * @type {Boolean}
     * @private
     */
    private _canRefund;
    /**
     * Can be refunded partially
     * @type {Boolean}
     * @private
     */
    private _canRefundPartially;
    /**
     * Is the basket description required
     * @type {Boolean}
     * @private
     */
    private _basketRequired;
    /**
     * Accepted currencies for this payment mean
     * @type {Array<String>}
     * @private
     */
    private _currencies;
    /**
     * Accepted countries for this payment mean
     * @type {Array<String>}
     * @private
     */
    private _countries;
    /**
     * Mandatory fields for this payment mean
     * @type {Array<Object>}
     * @private
     */
    private _checkoutFieldsMandatory;
    /**
     * Optional fields for this payment mean
     * @type {PaymentMeanAdditionalFields}
     * @private
     */
    private _additionalFields;
    /**
     * Payment mean priority in the payment page
     * @type {Number}
     * @private
     */
    private _priority;
    /**
     * The technical code of the payment mean
     * @returns {String}
     */
    get paymentMeanCode(): string;
    /**
     * Human readable name of the payment mean
     * @returns {String}
     */
    get brandName(): string;
    /**
     * Payment mean's category
     * @returns {String}
     */
    get category(): string;
    /**
     * Short payment mean description
     * @returns {String}
     */
    get comment(): string;
    /**
     * Can use 3DS security
     * @returns {Boolean}
     */
    get can3ds(): boolean;
    /**
     * Can be used for recurring payment
     * @returns {Boolean}
     */
    get canRecurring(): boolean;
    /**
     * Can be captured manually
     * @returns {Boolean}
     */
    get canManualCapture(): boolean;
    /**
     * Can be captured partially
     * @returns {Boolean}
     */
    get canManualCapturePartially(): boolean;
    /**
     * Can be refunded
     * @returns {Boolean}
     */
    get canRefund(): boolean;
    /**
     * Can be refunded partially
     * @returns {Boolean}
     */
    get canRefundPartially(): boolean;
    /**
     * Is the basket description required
     * @returns {Boolean}
     */
    get basketRequired(): boolean;
    /**
     * Accepted currencies for this payment mean
     * @returns {Array<String>}
     */
    get currencies(): string[];
    /**
     * Accepted countries for this payment mean
     * @returns {Array<String>}
     */
    get countries(): string[];
    /**
     * Mandatory fields for this payment mean
     * @returns {Array<String>}
     */
    get checkoutFieldsMandatory(): string[];
    /**
     * Optional fields for this payment mean
     * @returns {PaymentMeanAdditionalFields}
     */
    get additionalFields(): PaymentMeanAdditionalFields;
    /**
     * Payment mean priority in the payment page
     * @returns {Number}
     */
    get priority(): number;
}
declare class PaymentMeanAdditionalFields {
    /**
     *
     * @param {Object} [additionalFields]
     * @param {String} [additionalFields.sdkClass] Name of the SDK Class for this payment mean
     * @param {Object} [additionalFields.formFields] Additional fields available for this payment mean
     */
    constructor(additionalFields?: {
        sdkClass?: string;
        formFields?: any;
    });
    /**
     * Name of the SDK Class for this payment mean
     *
     * @type {String}
     * @private
     */
    private _sdkClass;
    /**
     * Additional fields available for this payment mean
     * @type {Object}
     * @private
     */
    private _formFields;
    get sdkClass(): any;
    get formFields(): any;
    getLocalizedFields(language?: string): {};
}
//# sourceMappingURL=PaymentMean.d.ts.map