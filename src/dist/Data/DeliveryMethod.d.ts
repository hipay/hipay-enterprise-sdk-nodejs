export = DeliveryMethod;
declare class DeliveryMethod {
    static _PREDEFINED_METHODS: {
        code: number;
        mode: string;
        shipping: string;
    }[];
    static getDeliveryMethods(): DeliveryMethod[];
    /**
     * Creates a new DeliveryMethod instance with the provided data
     * @param {Object} [deliveryMethodData = {}]
     */
    constructor(deliveryMethodData?: any);
    /**
     * Technical code
     * @type {String|Number}
     * @private
     */
    private _code;
    /**
     * Shipping mode
     * @type {'STORE'|'CARRIER'|'RELAYPOINT'|'ELECTRONIC'|'TRAVEL'}
     * @private
     */
    private _mode;
    /**
     * Shipping type
     * @type {'STANDARD'|'EXPRESS'|'PRIORITY24H'|'PRIORITY2H'|'PRIORITY1H'|'INSTANT'}
     * @private
     */
    private _shipping;
    /**
     * @param {String|Number} value
     */
    set code(value: string | number);
    /**
     * Technical code
     * @returns {String|Number}
     */
    get code(): string | number;
    /**
     * @param {"STORE"|"CARRIER"|"RELAYPOINT"|"ELECTRONIC"|"TRAVEL"} value
     */
    set mode(value: "STORE" | "CARRIER" | "RELAYPOINT" | "ELECTRONIC" | "TRAVEL");
    /**
     * Shipping mode
     * @returns {"STORE"|"CARRIER"|"RELAYPOINT"|"ELECTRONIC"|"TRAVEL"}
     */
    get mode(): "STORE" | "CARRIER" | "RELAYPOINT" | "ELECTRONIC" | "TRAVEL";
    /**
     * @param {'STANDARD'|'EXPRESS'|'PRIORITY24H'|'PRIORITY2H'|'PRIORITY1H'|'INSTANT'} value
     */
    set shipping(value: "STANDARD" | "EXPRESS" | "PRIORITY24H" | "PRIORITY2H" | "PRIORITY1H" | "INSTANT");
    /**
     * Shipping type
     * @returns {'STANDARD'|'EXPRESS'|'PRIORITY24H'|'PRIORITY2H'|'PRIORITY1H'|'INSTANT'}
     */
    get shipping(): "STANDARD" | "EXPRESS" | "PRIORITY24H" | "PRIORITY2H" | "PRIORITY1H" | "INSTANT";
}
//# sourceMappingURL=DeliveryMethod.d.ts.map