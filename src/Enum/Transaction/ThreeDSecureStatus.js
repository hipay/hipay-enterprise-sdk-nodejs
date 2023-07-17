'use strict';

/**
 * 3D secure constant values
 *
 * ENROLLMENT_UNKNOWN Default value
 * ENROLLMENT_AUTHENTICATION_AVAILABLE Card is enrolled in the 3-D Secure program
 * ENROLLMENT_CARD_HOLDER_NOT_ENROLLED Card is not enrolled in 3-D Secure program
 * ENROLLMENT_UNABLE_TO_AUTHENTICATE The card associations were unable to verify if the cardholder is enrolled in the 3- D Secure program
 * ENROLLMENT_OTHER_ERROR An error occurred during the enrollment verification process
 *
 * AUTHENTICATION_UNKNOWN default status
 * AUTHENTICATION_SUCCESSFUL Cardholder was successfully authenticated
 * AUTHENTICATION_ATTEMPTED Authentication Attempted
 * AUTHENTICATION_COULD_NOT_PERFORMED The Issuer is not able to complete the authentication request
 * AUTHENTICATION_FAILED Authentication failed and the card should not be accepted for payment
 * AUTHENTICATION_OTHER An error occurred during the authentication process
 *
 * @type {{AUTHENTICATION_OTHER: string, ENROLLMENT_AUTHENTICATION_AVAILABLE: string, ENROLLMENT_OTHER_ERROR: string, AUTHENTICATION_ATTEMPTED: string, ENROLLMENT_UNKNOWN: string, ENROLLMENT_CARD_HOLDER_NOT_ENROLLED: string, AUTHENTICATION_UNKNOWN: string, AUTHENTICATION_COULD_NOT_PERFORMED: string, AUTHENTICATION_FAILED: string, ENROLLMENT_UNABLE_TO_AUTHENTICATE: string, AUTHENTICATION_SUCCESSFUL: string}}
 */
module.exports = {
  ENROLLMENT_UNKNOWN: ' ',
  ENROLLMENT_AUTHENTICATION_AVAILABLE: 'Y',
  ENROLLMENT_CARD_HOLDER_NOT_ENROLLED: 'N',
  ENROLLMENT_UNABLE_TO_AUTHENTICATE: 'U',
  ENROLLMENT_OTHER_ERROR: 'R',
  AUTHENTICATION_UNKNOWN: ' ',
  AUTHENTICATION_SUCCESSFUL: 'Y',
  AUTHENTICATION_ATTEMPTED: 'A',
  AUTHENTICATION_COULD_NOT_PERFORMED: 'U',
  AUTHENTICATION_FAILED: 'N',
  AUTHENTICATION_OTHER: 'E'
};
