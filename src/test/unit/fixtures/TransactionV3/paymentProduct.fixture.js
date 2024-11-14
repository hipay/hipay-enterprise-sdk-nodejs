const PaymentMethod = require('../../../../Gateway/Response/TransactionV3/PaymentMethod');

const { paymentMethod: paymentMethodFixtures } = require('./paymentMethod.fixture');

const apiData = {
    paymentMethod: paymentMethodFixtures.apiData,
    name: '{NAME}',
    description: '{DESCRIPTION}'
};

const mappedData = {
    paymentMethod: new PaymentMethod(paymentMethodFixtures.mappedData),
    name: '{NAME}',
    description: '{DESCRIPTION}'
};

module.exports = {
    paymentProduct: {
        apiData,
        mappedData
    }
};
