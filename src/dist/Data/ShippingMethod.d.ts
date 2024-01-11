export = ShippingMethod;
declare class ShippingMethod {
    static DEFAULT_LANG_ISO_CODE: string;
    static PREDEFINED_SHIPPING_MODES: {
        code: string;
        displayName: {
            EN: string;
            FR: string;
        };
    }[];
    static PREDEFINED_SHIPPING_TYPES: {
        code: string;
        displayName: {
            EN: string;
            FR: string;
        };
    }[];
    static getShippingMethods(): {
        mode: ShippingMethod[];
        shipping: ShippingMethod[];
    };
    /**
     * Creates a new ShippingMethod instance with the provided data
     * @param {Object} [shippingMethodData = {}]
     */
    constructor(shippingMethodData?: any);
    /**
     * Technical code
     * @type {"STORE"|"CARRIER"|"RELAYPOINT"|"ELECTRONIC"|"TRAVEL"|"STANDARD"|"EXPRESS"|"PRIORITY24H"|"PRIORITY2H"|"PRIORITY1H"|"INSTANT"}
     * @private
     */
    private _code;
    /**
     * Human readable name, localized
     * @template {String} ISO the ISO code of a language
     * @type {Object<ISO, String>}
     * @private
     */
    private _displayName;
    /**
     * @param {"STORE"|"CARRIER"|"RELAYPOINT"|"ELECTRONIC"|"TRAVEL"|"STANDARD"|"EXPRESS"|"PRIORITY24H"|"PRIORITY2H"|"PRIORITY1H"|"INSTANT"} value
     */
    set code(value: "STORE" | "CARRIER" | "RELAYPOINT" | "STANDARD" | "EXPRESS" | "PRIORITY24H" | "PRIORITY2H" | "PRIORITY1H" | "INSTANT" | "ELECTRONIC" | "TRAVEL");
    /**
     * Technical code
     * @returns {"STORE"|"CARRIER"|"RELAYPOINT"|"ELECTRONIC"|"TRAVEL"|"STANDARD"|"EXPRESS"|"PRIORITY24H"|"PRIORITY2H"|"PRIORITY1H"|"INSTANT"}
     */
    get code(): "STORE" | "CARRIER" | "RELAYPOINT" | "STANDARD" | "EXPRESS" | "PRIORITY24H" | "PRIORITY2H" | "PRIORITY1H" | "INSTANT" | "ELECTRONIC" | "TRAVEL";
    /**
     *
     * @returns {String}
     */
    getDisplayName(langIsoCode?: string): string;
    /**
     * @param {{isoCode: String}} value
     */
    set displayName(value: {
        isoCode: string;
    });
}
//# sourceMappingURL=ShippingMethod.d.ts.map