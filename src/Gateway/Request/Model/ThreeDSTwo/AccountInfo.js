'use strict';
const AbstractModel = require('../AbstractModel');
const Customer = require('./AccountInfo/Customer');
const Shipping = require('./AccountInfo/Shipping');
const Payment = require('./AccountInfo/Payment');
const Purchase = require('./AccountInfo/Purchase');

class AccountInfo extends AbstractModel {
    /**
     * Creates an AccountInfo Object
     *
     * @param {Object} [values = {}]
     * @param {Customer} [values.customer] Customer Info
     * @param {Purchase} [values.purchase] Purchase Info
     * @param {Payment} [values.payment] Payment Info
     * @param {Shipping} [values.shipping] Shipping Info
     */
    constructor(values) {
        super();

        if (typeof values !== 'object') {
            values = {};
        }

        if (Object.hasOwn(values, 'customer')) {
            if (values.customer instanceof Customer) {
                this.customer = values.customer;
            } else {
                this.customer = new Customer(values.customer);
            }
        }

        if (Object.hasOwn(values, 'purchase')) {
            if (values.purchase instanceof Purchase) {
                this.purchase = values.purchase;
            } else {
                this.purchase = new Purchase(values.purchase);
            }
        }

        if (Object.hasOwn(values, 'payment')) {
            if (values.payment instanceof Payment) {
                this.payment = values.payment;
            } else {
                this.payment = new Payment(values.payment);
            }
        }

        if (Object.hasOwn(values, 'shipping')) {
            if (values.shipping instanceof Shipping) {
                this.shipping = values.shipping;
            } else {
                this.shipping = new Shipping(values.shipping);
            }
        }
    }

    initValues() {
        super.initValues();

        this.customer = null;
        this.purchase = null;
        this.payment = null;
        this.shipping = null;
    }
}

module.exports = AccountInfo;
