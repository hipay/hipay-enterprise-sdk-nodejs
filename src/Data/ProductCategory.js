'use strict';

class ProductCategory {
  static DEFAULT_LANG_ISO_CODE = 'EN';

  static PREDEFINED_CATEGORIES = [
    {
      code: 1,
      name: 'Home & Gardening',
      locals: {
        EN: 'Home & Gardening'
      }
    },
    {
      code: 2,
      name: 'Clothing & Accessories',
      locals: {
        EN: 'Clothing & Accessories'
      }
    },
    {
      code: 3,
      name: 'Home appliances',
      locals: {
        EN: 'Home appliances'
      }
    },
    {
      code: 4,
      name: 'Sports & Recreations',
      locals: {
        EN: 'Sports & Recreations'
      }
    },
    {
      code: 5,
      name: 'Babies & Children',
      locals: {
        EN: 'Babies & Children'
      }
    },
    {
      code: 6,
      name: 'Hi-Fi, Photo & Video equipment',
      locals: {
        EN: 'Hi-Fi, Photo & Video equipment'
      }
    },
    {
      code: 7,
      name: 'IT equipment',
      locals: {
        EN: 'IT equipment'
      }
    },
    {
      code: 8,
      name: 'Phone & Internet services',
      locals: {
        EN: 'Phone & Internet services'
      }
    },
    {
      code: 9,
      name: 'Physical goods : Books, Media, Music & Movies',
      locals: {
        EN: 'Physical goods : Books, Media, Music & Movies'
      }
    },
    {
      code: 10,
      name: 'Digital goods : Books, Media, Music & Movies',
      locals: {
        EN: 'Digital goods : Books, Media, Music & Movies'
      }
    },
    {
      code: 11,
      name: 'Consoles & Video games',
      locals: {
        EN: 'Consoles & Video games'
      }
    },
    {
      code: 12,
      name: 'Gifts & Flowers',
      locals: {
        EN: 'Gifts & Flowers'
      }
    },
    {
      code: 13,
      name: 'Health & Beauty',
      locals: {
        EN: 'Health & Beauty'
      }
    },
    {
      code: 14,
      name: 'Car & Motorcycle',
      locals: {
        EN: 'Car & Motorcycle'
      }
    },
    {
      code: 15,
      name: 'Traveling',
      locals: {
        EN: 'Traveling'
      }
    },
    {
      code: 16,
      name: 'Food & Gastronomy',
      locals: {
        EN: 'Food & Gastronomy'
      }
    },
    {
      code: 17,
      name: 'Auctions & Group buying',
      locals: {
        EN: 'Auctions & Group buying'
      }
    },
    {
      code: 18,
      name: 'Services to professionals',
      locals: {
        EN: 'Services to professionals'
      }
    },
    {
      code: 19,
      name: 'Services to individuals',
      locals: {
        EN: 'Services to individuals'
      }
    },
    {
      code: 20,
      name: 'Culture & Entertainment',
      locals: {
        EN: 'Culture & Entertainment'
      }
    },
    {
      code: 21,
      name: 'Games (digital goods)',
      locals: {
        EN: 'Games (digital goods)'
      }
    },
    {
      code: 22,
      name: 'Games (physical goods)',
      locals: {
        EN: 'Games (physical goods)'
      }
    },
    {
      code: 23,
      name: 'Ticketing',
      locals: {
        EN: 'Ticketing'
      }
    },
    {
      code: 24,
      name: 'Opticians, Opticians Goods and Eyeglasses',
      locals: {
        EN: 'Opticians, Opticians Goods and Eyeglasses'
      }
    }
  ];

  /**
   * Category technical code
   * @type {number}
   * @private
   */
  _code;

  /**
   * Human readable name
   * @type {string}
   * @private
   */
  _name;

  /**
   * Translations
   * @type {{isoCode: string}}
   * @private
   */
  _locals;

  /**
   * Creates a new Category instance with the provided data
   * @param {Object} [categoryData = {}]
   */
  constructor(categoryData = {}) {
    for (let prop in categoryData) {
      if (Object.prototype.hasOwnProperty.call(this, ('_' + prop))) {
        this[`_${prop}`] = categoryData[prop];
      }
    }
  }

  /**
   * Category technical code
   * @returns {number}
   */
  get code() {
    return this._code;
  }

  /**
   * Human readable name
   * @returns {string}
   */
  get name() {
    return this._name;
  }

  /**
   * Translations
   * @returns {{isoCode: string}}
   */
  get locals() {
    return this._locals;
  }

  /**
   * Sets translations
   * @param {{isoCode: string}}value
   */
  set locals(value) {
    this._locals = value;
  }

  /**
   * Get all predefined product categories
   * @returns {ProductCategory[]}
   */
  static getProductCategories() {
    return this.PREDEFINED_CATEGORIES.map((elt) => new ProductCategory(elt));
  }

  /**
   * Gets localized name
   * @param {string} langIsoCode the two letter iso code
   * @returns {string}
   */
  getLocal(langIsoCode = ProductCategory.DEFAULT_LANG_ISO_CODE) {
    return (
      this.locals[langIsoCode] ??
      this.locals[ProductCategory.DEFAULT_LANG_ISO_CODE]
    );
  }
}

module.exports = ProductCategory;
