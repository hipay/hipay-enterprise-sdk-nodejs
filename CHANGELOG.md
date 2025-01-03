# Changelog

## 1.6.0

- **add** : Supports new minimal version : `16.0.0`
- **add** : Added implementation of GetAvailablePaymentProduct Endpoint API
- **fix** : Fixed v3 format when requesting transaction information

## 1.5.0

- **add** : Added `requestTransactionV3Information` method to Hipay
- **add** : Added new **Klarna** payment method

## 1.4.0

- **add** : Added `one_click` property to Order Requests

## 1.3.2

- **Fix** : Fixed `display_cancel_button` field when requesting Hpayment

## 1.3.1

- **fix** : Fixed `requestOrderTransactionInformation` method when its returning multiple transactions

## 1.3.0

- **add** : Add `provider_data` property to Order Requests

## 1.2.0

- **add** : Add endpoint to lookup a card token informations

## 1.1.0

- **fix** : Fixed usage of `soft_descriptor` parameter
- **add** : Add internal `data_id` property
- **fix** : Fixed usage of `legacy` parameter for Hosted Pages
- **add** : Add environment properties to HiPay class

## Version 1.0.0

- **NEW** : Initialized NodeJS SDK
