const Order = require('../../../../Gateway/Response/TransactionV3/Order');
const ReasonCode = require('../../../../Gateway/Response/TransactionV3/ReasonCode');
const PaymentProduct = require('../../../../Gateway/Response/TransactionV3/PaymentProduct');
const Acquirer = require('../../../../Gateway/Response/TransactionV3/Acquirer');
const Issuer = require('../../../../Gateway/Response/TransactionV3/Issuer');
const Card = require('../../../../Gateway/Response/TransactionV3/Card');
const DebitAgreement = require('../../../../Gateway/Response/TransactionV3/DebitAgreement');
const Device = require('../../../../Gateway/Response/TransactionV3/Device');
const Authentication = require('../../../../Gateway/Response/TransactionV3/Authentication');
const FraudResult = require('../../../../Gateway/Response/TransactionV3/FraudResult');
const Operation = require('../../../../Gateway/Response/TransactionV3/Operation');

const { order: orderFixtures } = require('./order.fixture');
const { reasonCode: reasonCodeFixtures } = require('./reasonCode.fixture');
const { paymentProduct: paymentProductFixtures } = require('./paymentProduct.fixture');
const { acquirer: acquirerFixtures } = require('./acquirer.fixture');
const { issuer: issuerFixtures } = require('./issuer.fixture');
const { card: cardFixtures } = require('./card.fixture');
const { debitAgreement: debitAgreementFixtures } = require('./debitAgreement.fixture');
const { device: deviceFixtures } = require('./device.fixture');
const { authentication: authenticationFixtures } = require('./authentication.fixture');
const { fraudResult: fraudResultFixtures } = require('./fraudResult.fixture');
const { operation: operationFixtures } = require('./operation.fixture');

const apiData = {
    id: '{ID}',
    order: orderFixtures.apiData,
    attemptid: '{ATTEMPT_ID}',
    merchantOrderId: '{MERCHANT_ORDER_ID}',
    state: '{STATE}',
    status: '{STATUS}',
    computedAuthenticationStatus: '{COMPUTED_AUTHENTICATION_STATUS}',
    reason: reasonCodeFixtures.apiData,
    eci: '{ECI}',
    amount: '{AMOUNT}',
    capturedAmount: '{CAPTURED_AMOUNT}',
    refundedAmount: '{REFUNDED_AMOUNT}',
    creditedAmount: '{CREDITED_AMOUNT}',
    paymentProduct: paymentProductFixtures.apiData,
    acquirer: acquirerFixtures.apiData,
    acquirerTra: '{ACQUIRE_TRA}',
    issuer: issuerFixtures.apiData,
    card: cardFixtures.apiData,
    debitAgreement: debitAgreementFixtures.apiData,
    device: deviceFixtures.apiData,
    authentication: authenticationFixtures.apiData,
    authorizationCode: '{AUTHORIZATION_CODE}',
    forwardUrl: '{FORWARD_URL}',
    fraudScreening: fraudResultFixtures.apiData,
    cvcResult: '{CVC_RESULT}',
    customerCountry: '{CUSTOMER_COUNTRY}',
    dateCreated: '{DATE_CREATED}',
    dateUpdated: '{DATE_UPDATED}',
    dateAuthorized: '{DATE_AUTHORIZED}',
    mid: '{MID}',
    operations: [operationFixtures.apiData],
    authorizedAmount: '{AUTHORIZED_AMOUNT}',
    currency: '{CURRENCY}',
    decimals: '{DECIMALS}'
};

const mappedData = {
    id: '{ID}',
    order: new Order(orderFixtures.mappedData),
    attemptid: '{ATTEMPT_ID}',
    merchantOrderId: '{MERCHANT_ORDER_ID}',
    state: '{STATE}',
    status: '{STATUS}',
    computedAuthenticationStatus: '{COMPUTED_AUTHENTICATION_STATUS}',
    reason: new ReasonCode(reasonCodeFixtures.mappedData),
    eci: '{ECI}',
    amount: '{AMOUNT}',
    capturedAmount: '{CAPTURED_AMOUNT}',
    refundedAmount: '{REFUNDED_AMOUNT}',
    creditedAmount: '{CREDITED_AMOUNT}',
    paymentProduct: new PaymentProduct(paymentProductFixtures.mappedData),
    acquirer: new Acquirer(acquirerFixtures.mappedData),
    acquirerTra: '{ACQUIRE_TRA}',
    issuer: new Issuer(issuerFixtures.mappedData),
    card: new Card(cardFixtures.mappedData),
    debitAgreement: new DebitAgreement(debitAgreementFixtures.mappedData),
    device: new Device(deviceFixtures.mappedData),
    authentication: new Authentication(authenticationFixtures.mappedData),
    authorizationCode: '{AUTHORIZATION_CODE}',
    forwardUrl: '{FORWARD_URL}',
    fraudScreening: new FraudResult(fraudResultFixtures.mappedData),
    cvcResult: '{CVC_RESULT}',
    customerCountry: '{CUSTOMER_COUNTRY}',
    dateCreated: '{DATE_CREATED}',
    dateUpdated: '{DATE_UPDATED}',
    dateAuthorized: '{DATE_AUTHORIZED}',
    mid: '{MID}',
    operations: [new Operation(operationFixtures.mappedData)],
    authorizedAmount: '{AUTHORIZED_AMOUNT}',
    currency: '{CURRENCY}',
    decimals: '{DECIMALS}'
};

module.exports = {
    transaction: {
        apiData,
        mappedData
    }
};
