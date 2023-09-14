'use strict';

class Convert {
    /**
     * Convert array keys to camelCase format
     * @param {Object} source
     * @returns {Object}
     */
    static arrayKeysToCamelCase(source) {
        let newSource = {};
        for (let [key, value] of Object.entries(source)) {
            if (typeof value === 'object') {
                if (!Array.isArray(value)) {
                    value = this.arrayKeysToCamelCase(value);
                } else {
                    for (const index in value) {
                        if (typeof value[index] === 'object') {
                            value[index] = this.arrayKeysToCamelCase(value[index]);
                        }
                    }
                }
            }

            // Don't process, if underscore is not present
            if (!/_/g.test(key)) {
                newSource[key] = value;
                continue;
            }

            const newKey = this.#snakeToCamel(key);
            newSource[newKey] = value;
        }
        return newSource;
    }

    /**
     * Returns snake_case string to camelCase
     * @param {String} str
     */
    static #snakeToCamel(str) {
        return str.toLowerCase().replace(/(_[a-z0-9])/g, (group) => group.toUpperCase().replace('_', ''));
    }
}

module.exports = Convert;
