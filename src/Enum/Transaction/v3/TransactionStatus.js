'use strict';

/**
 * Enumeration for Transaction statues
 *
 * List of possible status returned by Enterprise API
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
 * @type {{CREATED: Number, CLOSED: Number, CARDHOLDER_ENROLLED: Number, CARDHOLDER_NOT_ENROLLED: Number, CARDHOLDER_ENROLLMENT_UNKNOWN: Number, UNABLE_TO_AUTHENTICATE: Number, CARDHOLDER_AUTHENTICATED: Number, AUTHENTICATION_ATTEMPTED: Number, COULD_NOT_AUTHENTICATE: Number, AUTHENTICATION_FAILED: Number, BLOCKED: Number, DENIED: Number, AUTHORIZED_AND_PENDING: Number, REFUSED: Number, EXPIRED: Number, CANCELLED: Number, AUTHORIZATION_REQUESTED: Number, AUTHORIZATION_CANCELLED: Number, AUTHORIZATION_CANCELLATION_REQUESTED: Number, AUTHORIZED: Number, AUTHORIZATION_REFUSED: Number, CAPTURE_REQUESTED: Number, CAPTURED: Number, CAPTURE_REFUSED: Number, PARTIALLY_CAPTURED: Number, COLLECTED: Number, PARTIALLY_COLLECTED: Number, SETTLED: Number, PARTIALLY_SETTLED: Number, REFUND_REQUESTED: Number, REFUND_REFUSED: Number, REFUNDED: Number, PARTIALLY_REFUNDED: Number, DISPUTED: Number, DISPUTE_RESOLVED: Number, CHARGED_BACK: Number, DISPUTE_LOST: Number, PENDING_PAYMENT: Number, DEBITED: Number, PARTIALLY_DEBITED: Number, AUTHENTICATION_REQUESTED: Number, AUTHENTICATED: Number, PARTIALLY_CHARGEBACK: Number, CHARGEBACK: Number, ACQUIRER_FOUND: Number, ACQUIRER_NOT_FOUND: Number, FRAUD_ACCEPTED: Number, REFERENCE_RENDER: Number, CREDIT_REQUESTED: Number, CREDITED: Number, IN_PROGRESS: Number, AWAITING_TERMINAL: Number, CHALLENGE_REQUESTED: Number, SOFT_DECLINED}}
 */
module.exports = {
  /** The payment attempt was created.*/
    CREATED: 1,
    CLOSED: 2,
    CARDHOLDER_ENROLLED: 3,
    CARDHOLDER_NOT_ENROLLED: 4,
    CARDHOLDER_ENROLLMENT_UNKNOWN: 52,
    UNABLE_TO_AUTHENTICATE: 5,
    CARDHOLDER_AUTHENTICATED: 6,
    AUTHENTICATION_ATTEMPTED: 7,
    COULD_NOT_AUTHENTICATE: 8,
    AUTHENTICATION_FAILED: 9,
    BLOCKED: 10,
    DENIED: 11,
    AUTHORIZED_AND_PENDING: 12,
    REFUSED: 13,
    EXPIRED: 14,
    CANCELLED: 15,
    AUTHORIZATION_REQUESTED: 42,
    AUTHORIZATION_CANCELLED: 43,
    AUTHORIZATION_CANCELLATION_REQUESTED: 75,
    AUTHORIZED: 16,
    AUTHORIZATION_REFUSED: 55,
    CAPTURE_REQUESTED: 17,
    CAPTURED: 18,
    CAPTURE_REFUSED: 54,
    PARTIALLY_CAPTURED: 19,
    COLLECTED: 20,
    PARTIALLY_COLLECTED: 21,
    SETTLED: 22,
    PARTIALLY_SETTLED: 23,
    REFUND_REQUESTED: 24,
    REFUND_REFUSED: 65,
    REFUNDED: 25,
    PARTIALLY_REFUNDED: 26,
    DISPUTED: 27,
    DISPUTE_RESOLVED: 28,
    CHARGED_BACK: 29,
    DISPUTE_LOST: 34,
    PENDING_PAYMENT: 30,
    DEBITED: 31,
    PARTIALLY_DEBITED: 32,
    AUTHENTICATION_REQUESTED: 40,
    AUTHENTICATED: 41,
    PARTIALLY_CHARGEBACK: 80,
    CHARGEBACK: 81,
    ACQUIRER_FOUND: 50,
    ACQUIRER_NOT_FOUND: 51,
    FRAUD_ACCEPTED: 53,
    REFERENCE_RENDER: 57,
    CREDIT_REQUESTED: 69,
    CREDITED: 66,
    IN_PROGRESS: 72,
    AWAITING_TERMINAL: 74,
    CHALLENGE_REQUESTED: 77,
    SOFT_DECLINED: 78
};