'use strict';

const AbstractMapper = require('./AbstractMapper');
const Transaction = require('../Transaction');
const OrderMapper = require('./OrderMapper');
const ReasonCodeMapper = require('./ReasonCodeMapper');
const PaymentProductMapper = require('./PaymentProductMapper');
const AcquirerMapper = require('./AcquirerMapper');
const IssuerMapper = require('./IssuerMapper');
const CardMapper = require('./CardMapper');
const DebitAgreementMapper = require('./DebitAgreementMapper');
const DeviceMapper = require('./DeviceMapper');
const AuthenticationMapper = require('./AuthenticationMapper');
const FraudResultMapper = require('./FraudResultMapper');
const OperationMapper = require('./OperationMapper');

class TransactionMapper extends AbstractMapper {

    mapResponseToModel() {
        const values = {
            id: typeof this.source.id !== 'undefined' ? this.source.id : null,
            order: typeof this.source.order !== 'undefined' ? new OrderMapper(this.source.order).mappedObject : null,
            attemptid: typeof this.source.attemptid !== 'undefined' ? this.source.attemptid : null,
            merchantOrderId: typeof this.source.merchantOrderId !== 'undefined' ? this.source.merchantOrderId : null,
            state: typeof this.source.state !== 'undefined' ? this.source.state : null,
            status: typeof this.source.status !== 'undefined' ? this.source.status : null,
            computedAuthenticationStatus:
                typeof this.source.computedAuthenticationStatus !== 'undefined' ? this.source.computedAuthenticationStatus : null,
            reason: typeof this.source.reason !== 'undefined' ? new ReasonCodeMapper(this.source.reason).mappedObject : null,
            eci: typeof this.source.eci !== 'undefined' ? this.source.eci : null,
            amount: typeof this.source.amount !== 'undefined' ? this.source.amount : null,
            capturedAmount: typeof this.source.capturedAmount !== 'undefined' ? this.source.capturedAmount : null,
            refundedAmount: typeof this.source.refundedAmount !== 'undefined' ? this.source.refundedAmount : null,
            creditedAmount: typeof this.source.creditedAmount !== 'undefined' ? this.source.creditedAmount : null,
            paymentProduct:
                typeof this.source.paymentProduct !== 'undefined' ? new PaymentProductMapper(this.source.paymentProduct).mappedObject : null,
            acquirer: typeof this.source.acquirer !== 'undefined' ? new AcquirerMapper(this.source.acquirer).mappedObject : null,
            acquirerTra: typeof this.source.acquirerTra !== 'undefined' ? this.source.acquirerTra : null,
            issuer: typeof this.source.issuer !== 'undefined' ? new IssuerMapper(this.source.issuer).mappedObject : null,
            card: typeof this.source.card !== 'undefined' ? new CardMapper(this.source.card).mappedObject : null,
            debitAgreement:
                typeof this.source.debitAgreement !== 'undefined' ? new DebitAgreementMapper(this.source.debitAgreement).mappedObject : null,
            device: typeof this.source.device !== 'undefined' ? new DeviceMapper(this.source.device).mappedObject : null,
            authentication:
                typeof this.source.authentication !== 'undefined' ? new AuthenticationMapper(this.source.authentication).mappedObject : null,
            authorizationCode: typeof this.source.authorizationCode !== 'undefined' ? this.source.authorizationCode : null,
            forwardUrl: typeof this.source.forwardUrl !== 'undefined' ? this.source.forwardUrl : null,
            fraudScreening: typeof this.source.fraudScreening !== 'undefined' ? new FraudResultMapper(this.source.fraudScreening).mappedObject : null,
            cvcResult: typeof this.source.cvcResult !== 'undefined' ? this.source.cvcResult : null,
            customerCountry: typeof this.source.customerCountry !== 'undefined' ? this.source.customerCountry : null,
            dateCreated: typeof this.source.dateCreated !== 'undefined' ? this.source.dateCreated : null,
            dateUpdated: typeof this.source.dateUpdated !== 'undefined' ? this.source.dateUpdated : null,
            dateAuthorized: typeof this.source.dateAuthorized !== 'undefined' ? this.source.dateAuthorized : null,
            mid: typeof this.source.mid !== 'undefined' ? this.source.mid : null,
            operations: typeof this.source.operations !== 'undefined' ? new OperationMapper(this.source.operations).mappedObject : null,
            authorizedAmount: typeof this.source.authorizedAmount !== 'undefined' ? this.source.authorizedAmount : null,
            currency: typeof this.source.currency !== 'undefined' ? this.source.currency : null,
            decimals: typeof this.source.decimals !== 'undefined' ? this.source.decimals : null
        };

        this._modelObject = new Transaction(values);
    }
}

module.exports = TransactionMapper;
