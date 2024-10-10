'use strict';

/**
 * Enumeration for Transaction statues
 *
 * List of possible statues returned by Enterprise API
 *
 * CREATED The payment attempt was created
 * CLOSED 
 * CARDHOLDER_ENROLLED Card is enrolled in the 3-D Secure program
 * CARDHOLDER_NOT_ENROLLED Card is not enrolled in 3-D Secure program
 * CARDHOLDER_ENROLLMENT_UNKNOWN
 * UNABLE_TO_AUTHENTICATE Unable to complete the authentication request
 * CARDHOLDER_AUTHENTICATED Cardholder was successfully authenticated in the 3-D Secure program
 * AUTHENTICATION_ATTEMPTED the Issuer or cardholder is not enrolled
 * COULD_NOT_AUTHENTICATE The Issuer is not able to complete the authentication request
 * AUTHENTICATION_FAILED Cardholder authentication failed
 * BLOCKED The transaction has been rejected for reasons of suspected fraud
 * DENIED Merchant denied the payment attempt
 * AUTHORIZED_AND_PENDING The payment was challenged by the fraud rule set and is pending
 * REFUSED The financial institution refused to authorize the payment
 * EXPIRED The validity period of the payment authorization has expired
 * CANCELLED Merchant cancelled the payment attempt
 * AUTHORIZATION_REQUESTED The payment method used requires an authorization request
 * AUTHORIZATION_CANCELLED
 * AUTHORIZATION_CANCELLATION_REQUESTED The payment is authorized but merchant requested it's cancellation
 * AUTHORIZED The financial institution has approved the payment
 * AUTHORIZATION_REFUSED The authorization was refused by the financial institution
 * CAPTURE_REQUESTED A capture request has been sent to the financial institution
 * CAPTURED The financial institution has processed the payment
 * CAPTURE_REFUSED The capture was refused by the financial institution
 * PARTIALLY_CAPTURED The financial institution has processed part of the payment
 * COLLECTED The funds have been made available for remittance to the merchant
 * PARTIALLY_COLLECTED A part of the transaction has been collected
 * SETTLED The financial operations linked to this transaction are closed
 * PARTIALLY_SETTLED A part of the financial operations linked to this transaction is closed
 * REFUND_REQUESTED A refund request has been sent to the financial institution
 * REFUND_REFUSED The refund operation was refused by the financial institution
 * REFUNDED The payment was refunded
 * PARTIALLY_REFUNDED A part of the transaction has been refunded
 * DISPUTED
 * DISPUTE_RESOLVED
 * CHARGED_BACK The cardholder reversed a capture processed by their bank or credit card company
 * DISPUTE_LOST
 * PENDING_PAYMENT The transaction request was submitted to the acquirer but response is not yet available
 * DEBITED The acquirer has informed us that a debit linked to the transaction is going to be applied
 * PARTIALLY_DEBITED The acquirer has informed us that a partial debit linked to the transaction is going to be applied
 * AUTHENTICATION_REQUESTED Authentication in progress
 * AUTHENTICATED The payment method used requires authentication and it was successful
 * PARTIALLY_CHARGEBACK
 * CHARGEBACK
 * ACQUIRER_FOUND The acquirer payment route has been found
 * ACQUIRER_NOT_FOUND The acquirer payment route has not been found
 * FRAUD_ACCEPTED
 * REFERENCE_RENDER
 * CREDIT_REQUESTED
 * CREDITED
 * IN_PROGRESS
 * AWAITING_TERMINAL
 * CHALLENGE_REQUESTED
 * SOFT_DECLINED
 *
 * @type {{CREATED: Number, CLOSED: Number, CARDHOLDER_ENROLLED: Number, CARDHOLDER_NOT_ENROLLED: Number, CARDHOLDER_ENROLLMENT_UNKNOWN: Number, UNABLE_TO_AUTHENTICATE: Number, CARDHOLDER_AUTHENTICATED: Number, AUTHENTICATION_ATTEMPTED: Number, COULD_NOT_AUTHENTICATE: Number, AUTHENTICATION_FAILED: Number, BLOCKED: Number, DENIED: Number, AUTHORIZED_AND_PENDING: Number, REFUSED: Number, EXPIRED: Number, CANCELLED: Number, AUTHORIZATION_REQUESTED: Number, AUTHORIZATION_CANCELLED: Number, AUTHORIZATION_CANCELLATION_REQUESTED: Number, AUTHORIZED: Number, AUTHORIZATION_REFUSED: Number, CAPTURE_REQUESTED: Number, CAPTURED: Number, CAPTURE_REFUSED: Number, PARTIALLY_CAPTURED: Number, COLLECTED: Number, PARTIALLY_COLLECTED: Number, SETTLED: Number, PARTIALLY_SETTLED: Number, REFUND_REQUESTED: Number, REFUND_REFUSED: Number, REFUNDED: Number, PARTIALLY_REFUNDED: Number, DISPUTED: Number, DISPUTE_RESOLVED: Number, CHARGED_BACK: Number, DISPUTE_LOST: Number, PENDING_PAYMENT: Number, DEBITED: Number, PARTIALLY_DEBITED: Number, AUTHENTICATION_REQUESTED: Number, AUTHENTICATED: Number, PARTIALLY_CHARGEBACK: Number, CHARGEBACK: Number, ACQUIRER_FOUND: Number, ACQUIRER_NOT_FOUND: Number, FRAUD_ACCEPTED: Number, REFERENCE_RENDER: Number, CREDIT_REQUESTED: Number, CREDITED: Number, IN_PROGRESS: Number, AWAITING_TERMINAL: Number, CHALLENGE_REQUESTED: Number, SOFT_DECLINED: Number}}
 */
module.exports = {
    CREATED: 101,
    CLOSED: 102,
    CARDHOLDER_ENROLLED: 103,
    CARDHOLDER_NOT_ENROLLED: 104,
    CARDHOLDER_ENROLLMENT_UNKNOWN: 160,
    UNABLE_TO_AUTHENTICATE: 105,
    CARDHOLDER_AUTHENTICATED: 106,
    AUTHENTICATION_ATTEMPTED: 107,
    COULD_NOT_AUTHENTICATE: 108,
    AUTHENTICATION_FAILED: 109,
    BLOCKED: 110,
    DENIED: 111,
    AUTHORIZED_AND_PENDING: 112,
    REFUSED: 113,
    EXPIRED: 114,
    CANCELLED: 115,
    AUTHORIZATION_REQUESTED: 142,
    AUTHORIZATION_CANCELLED: 143,
    AUTHORIZATION_CANCELLATION_REQUESTED: 175,
    AUTHORIZED: 116,
    AUTHORIZATION_REFUSED: 163,
    CAPTURE_REQUESTED: 117,
    CAPTURED: 118,
    CAPTURE_REFUSED: 173,
    PARTIALLY_CAPTURED: 119,
    COLLECTED: 120,
    PARTIALLY_COLLECTED: 121,
    SETTLED: 122,
    PARTIALLY_SETTLED: 123,
    REFUND_REQUESTED: 124,
    REFUND_REFUSED: 165,
    REFUNDED: 125,
    PARTIALLY_REFUNDED: 126,
    DISPUTED: 127,
    DISPUTE_RESOLVED: 128,
    CHARGED_BACK: 129,
    DISPUTE_LOST: 134,
    PENDING_PAYMENT: 200,
    DEBITED: 131,
    PARTIALLY_DEBITED: 132,
    AUTHENTICATION_REQUESTED: 140,
    AUTHENTICATED: 141,
    PARTIALLY_CHARGEBACK: 180,
    CHARGEBACK: 181,
    ACQUIRER_FOUND: 150,
    ACQUIRER_NOT_FOUND: 151,
    FRAUD_ACCEPTED: 101,
    REFERENCE_RENDER: 157,
    CREDIT_REQUESTED: 169,
    CREDITED: 166,
    IN_PROGRESS: 172,
    AWAITING_TERMINAL: 174,
    CHALLENGE_REQUESTED: 177,
    SOFT_DECLINED: 178
};