'use strict';

/**
 * Enumeration for Transaction statues
 *
 * List of possible statues returned by Enterprise API
 *
 * UNKNOWN Unknown status
 * CREATED The payment attempt was created
 * CARD_HOLDER_ENROLLED Card is enrolled in the 3-D Secure program
 * CARD_HOLDER_NOT_ENROLLED Card is not enrolled in 3-D Secure program
 * UNABLE_TO_AUTHENTICATE Unable to complete the authentication request
 * CARD_HOLDER_AUTHENTICATED Cardholder was successfully authenticated in the 3-D Secure program
 * AUTHENTICATION_ATTEMPTED the Issuer or cardholder is not enrolled
 * COULD_NOT_AUTHENTICATE The Issuer is not able to complete the authentication request
 * AUTHENTICATION_FAILED Cardholder authentication failed
 * BLOCKED The transaction has been rejected for reasons of suspected fraud
 * DENIED Merchant denied the payment attempt
 * AUTHORIZED_AND_PENDING The payment was challenged by the fraud rule set and is pending
 * REFUSED The financial institution refused to authorize the payment
 * EXPIRED The validity period of the payment authorization has expired
 * CANCELLED Merchant cancelled the payment attempt
 * AUTHORIZED The financial institution has approved the payment
 * CAPTURE_REQUESTED A capture request has been sent to the financial institution
 * CAPTURED The financial institution has processed the payment
 * PARTIALLY_CAPTURED The financial institution has processed part of the payment
 * COLLECTED The funds have been made available for remittance to the merchant
 * PARTIALLY_COLLECTED A part of the transaction has been collected
 * SETTLED The financial operations linked to this transaction are closed
 * PARTIALLY_SETTLED A part of the financial operations linked to this transaction is closed
 * REFUND_REQUESTED A refund request has been sent to the financial institution
 * REFUNDED The payment was refunded
 * PARTIALLY_REFUNDED A part of the transaction has been refunded
 * CHARGED_BACK The cardholder reversed a capture processed by their bank or credit card company
 * DEBITED The acquirer has informed us that a debit linked to the transaction is going to be applied
 * PARTIALLY_DEBITED The acquirer has informed us that a partial debit linked to the transaction is going to be applied
 * AUTHENTICATION_REQUESTED  Authentication in progress
 * AUTHENTICATED The payment method used requires authentication and it was successful
 * AUTHORIZATION_REQUESTED The payment method used requires an authorization request
 * ACQUIRER_FOUND The acquirer payment route has been found
 * ACQUIRER_NOT_FOUND The acquirer payment route has not been found
 * CARD_HOLDER_ENROLLMENT_UNKNOWN Unable to verify if the card is enrolled in the 3-D Secure program
 * RISK_ACCEPTED The payment has been accepted by the fraud rule set
 * AUTHORIZATION_REFUSED The authorization was refused by the financial institution
 * REFUND_REFUSED The refund operation was refused by the financial institution
 * CAPTURE_REFUSED The capture was refused by the financial institution
 * AUTHORIZATION_CANCELLATION_REQUESTED The payment is authorized but merchant requested it's cancellation
 * PENDING_PAYMENT The transaction request was submitted to the acquirer but response is not yet available
 *
 * @type {{DEBITED: Number, AUTHORIZATION_REFUSED: Number, CARD_HOLDER_AUTHENTICATED: Number, PARTIALLY_DEBITED: Number, EXPIRED: Number, BLOCKED: Number, UNABLE_TO_AUTHENTICATE: Number, AUTHENTICATION_FAILED: Number, REFUSED: Number, AUTHENTICATION_REQUESTED: Number, CREATED: Number, REFUND_REFUSED: Number, AUTHENTICATION_ATTEMPTED: Number, PARTIALLY_SETTLED: Number, AUTHORIZATION_CANCELLATION_REQUESTED: Number, ACQUIRER_FOUND: Number, AUTHORIZATION_CANCELLED: Number, REFUND_REQUESTED: Number, PENDING_PAYMENT: Number, DENIED: Number, AUTHORIZATION_REQUESTED: Number, CAPTURE_REQUESTED: Number, AUTHENTICATED: Number, REFUNDED: Number, CAPTURE_REFUSED: Number, PARTIALLY_COLLECTED: Number, ACQUIRER_NOT_FOUND: Number, AUTHORIZED: Number, CARD_HOLDER_ENROLLED: Number, COULD_NOT_AUTHENTICATE: Number, CHARGED_BACK: Number, CANCELLED: Number, CAPTURED: Number, AUTHORIZED_AND_PENDING: Number, COLLECTED: Number, SETTLED: Number, CARD_HOLDER_ENROLLMENT_UNKNOWN: Number, RISK_ACCEPTED: Number, CARD_HOLDER_NOT_ENROLLED: Number, UNKNOWN: Number, PARTIALLY_CAPTURED: Number, PARTIALLY_REFUNDED: Number}}
 */
module.exports = {
    UNKNOWN: 0,
    CREATED: 101,
    CARD_HOLDER_ENROLLED: 103,
    CARD_HOLDER_NOT_ENROLLED: 104,
    UNABLE_TO_AUTHENTICATE: 105,
    CARD_HOLDER_AUTHENTICATED: 106,
    AUTHENTICATION_ATTEMPTED: 107,
    COULD_NOT_AUTHENTICATE: 108,
    AUTHENTICATION_FAILED: 109,
    BLOCKED: 110,
    DENIED: 111,
    AUTHORIZED_AND_PENDING: 112,
    REFUSED: 113,
    EXPIRED: 114,
    CANCELLED: 115,
    AUTHORIZED: 116,
    CAPTURE_REQUESTED: 117,
    CAPTURED: 118,
    PARTIALLY_CAPTURED: 119,
    COLLECTED: 120,
    PARTIALLY_COLLECTED: 121,
    SETTLED: 122,
    PARTIALLY_SETTLED: 123,
    REFUND_REQUESTED: 124,
    REFUNDED: 125,
    PARTIALLY_REFUNDED: 126,
    CHARGED_BACK: 129,
    DEBITED: 131,
    PARTIALLY_DEBITED: 132,
    AUTHENTICATION_REQUESTED: 140,
    AUTHENTICATED: 141,
    AUTHORIZATION_REQUESTED: 142,
    AUTHORIZATION_CANCELLED: 143,
    ACQUIRER_FOUND: 150,
    ACQUIRER_NOT_FOUND: 151,
    CARD_HOLDER_ENROLLMENT_UNKNOWN: 160,
    RISK_ACCEPTED: 161,
    AUTHORIZATION_REFUSED: 163,
    REFUND_REFUSED: 165,
    CAPTURE_REFUSED: 173,
    AUTHORIZATION_CANCELLATION_REQUESTED: 175,
    PENDING_PAYMENT: 200
};
