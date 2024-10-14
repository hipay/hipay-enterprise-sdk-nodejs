const Address = require('../../../../Gateway/Response/TransactionV3/Address');
const Customer = require('../../../../Gateway/Response/TransactionV3/Customer');
const ShippingAddress = require('../../../../Gateway/Response/TransactionV3/ShippingAddress');

const { customer: customerFixtures } = require('./customer.fixture');
const { shippingAddress: shippingAddressFixtures } = require('./shippingAddress.fixture');
const { address: addressFixtures } = require('./address.fixture');

const apiData = {
    id: '{ID}',
    attempts: '{ATTEMPTS}',
    amount: '{AMOUNT}',
    shipping: '{SHIPPING}',
    tax: '{TAX}',
    customer: customerFixtures.apiData,
    shippingTo: shippingAddressFixtures.apiData,
    dateCreated: '{DATE_CREATED}',
    currency: '{CURRENCY}',
    decimals: '{DECIMALS}',
    billingTo: addressFixtures.apiData,
    customData: '{CUSTOM_DATA}'
};

const mappedData = {
    id: '{ID}',
    attempts: '{ATTEMPTS}',
    amount: '{AMOUNT}',
    shipping: '{SHIPPING}',
    tax: '{TAX}',
    customer: new Customer(customerFixtures.mappedData),
    shippingTo: new ShippingAddress(shippingAddressFixtures.mappedData),
    dateCreated: '{DATE_CREATED}',
    currency: '{CURRENCY}',
    decimals: '{DECIMALS}',
    billingTo: new Address(addressFixtures.mappedData),
    customData: '{CUSTOM_DATA}'
};

module.exports = {
    order: {
        apiData,
        mappedData
    }
};
