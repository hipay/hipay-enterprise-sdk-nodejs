const acquirerFixtures = require('./acquirer.fixture');
const addressFixtures = require('./address.fixture');
const authenticationFixtures = require('./authentication.fixture');
const cardFixtures = require('./card.fixture');
const customerFixtures = require('./customer.fixture');
const debitAgreementFixtures = require('./debitAgreement.fixture');
const deviceFixtures = require('./device.fixture');
const fraudResultFixtures = require('./fraudResult.fixture');
const issuerFixtures = require('./issuer.fixture');
const operationFixtures = require('./operation.fixture');
const orderFixtures = require('./order.fixture');
const paymentMethodFixtures = require('./paymentMethod.fixture');
const paymentProductFixtures = require('./paymentProduct.fixture');
const reasonCodeFixtures = require('./reasonCode.fixture');
const shippingAddressFixtures = require('./shippingAddress.fixture');
const transactionFixtures = require('./transaction.fixture');

module.exports = {
    transactionV3: {
        ...acquirerFixtures,
        ...addressFixtures,
        ...authenticationFixtures,
        ...cardFixtures,
        ...customerFixtures,
        ...debitAgreementFixtures,
        ...deviceFixtures,
        ...fraudResultFixtures,
        ...issuerFixtures,
        ...operationFixtures,
        ...orderFixtures,
        ...paymentMethodFixtures,
        ...paymentProductFixtures,
        ...reasonCodeFixtures,
        ...shippingAddressFixtures,
        ...transactionFixtures
    }
};
