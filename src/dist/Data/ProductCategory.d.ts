export = ProductCategory;
declare class ProductCategory {
    static DEFAULT_LANG_ISO_CODE: string;
    static PREDEFINED_CATEGORIES: {
        code: number;
        name: string;
        locals: {
            EN: string;
        };
    }[];
    /**
     * Get all predefined product categories
     * @returns {ProductCategory[]}
     */
    static getProductCategories(): ProductCategory[];
    /**
     * Creates a new Category instance with the provided data
     * @param {Object} [categoryData = {}]
     */
    constructor(categoryData?: any);
    /**
     * Category technical code
     * @type {Number}
     * @private
     */
    private _code;
    /**
     * Human readable name
     * @type {String}
     * @private
     */
    private _name;
    /**
     * Translations
     * @template {String} ISO the ISO code of a language
     * @type {Object<ISO, String>}
     * @private
     */
    private _locals;
    /**
     * Category technical code
     * @returns {Number}
     */
    get code(): number;
    /**
     * Human readable name
     * @returns {String}
     */
    get name(): string;
    /**
     * Sets translations
     * @param {{isoCode: String}}value
     */
    set locals(value: any);
    /**
     * Translations
     * @template {String} ISO the ISO code of a language
     * @returns {Object<ISO, String>}
     */
    get locals(): any;
    /**
     * Gets localized name
     * @param {String} langIsoCode the two letter iso code
     * @returns {String}
     */
    getLocal(langIsoCode?: string): string;
}
//# sourceMappingURL=ProductCategory.d.ts.map