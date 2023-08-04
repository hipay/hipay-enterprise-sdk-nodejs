const Configuration = require('../../../../../Gateway/HTTP/Configuration/Configuration');

const InvalidArgumentException = require('../../../../../Error/InvalidArgumentException');
jest.mock('../../../../../Error/InvalidArgumentException');

afterEach(() => {
    InvalidArgumentException.mockReset();
});

describe('Configuration', () => {
    it('constructs', () => {
        let conf = new Configuration({
            apiUsername: 'USERNAME',
            apiPassword: 'PASSWORD',
            apiToken: 'TOKEN',
            apiEnv: Configuration.API_ENV_CUSTOM,
            customApiURL: 'https://google.fr',
            customDataApiURL: 'https://console.hipay.com',
            apiHTTPHeaderAccept: 'application/json',
            proxy: {
                auth: {
                    password: 'PROXY_PASS',
                    username: 'PROXY_USERNAME'
                },
                host: 'PROXY_HOST',
                port: 888
            },
            timeout: 9999,
            httpUserAgent: 'USER_AGENT'
        });

        expect(conf.apiToken).toEqual('TOKEN');
        expect(conf.apiUsername).toEqual(undefined);
        expect(conf.apiPassword).toEqual(undefined);
        expect(conf.apiEnv).toEqual(Configuration.API_ENV_CUSTOM);
        expect(conf.apiEndpoint).toEqual('https://google.fr');
        expect(conf.hpaymentApiEndpoint).toEqual('https://google.fr');
        expect(conf.dataApiEndpoint).toEqual('https://console.hipay.com');
        expect(conf.apiHTTPHeaderAccept).toEqual('application/json');
        expect(conf.proxy).toEqual({
            auth: {
                password: 'PROXY_PASS',
                username: 'PROXY_USERNAME'
            },
            host: 'PROXY_HOST',
            port: 888
        });
        expect(conf.timeout).toEqual(9999);
        expect(conf.httpUserAgent).toEqual('USER_AGENT');

        expect(Configuration.API_ENDPOINT_PROD).toEqual('https://secure-gateway.hipay-tpp.com');
        expect(conf.apiEndpointProd).toEqual('https://secure-gateway.hipay-tpp.com');

        expect(Configuration.API_ENDPOINT_STAGE).toEqual('https://stage-secure-gateway.hipay-tpp.com');
        expect(conf.apiEndpointStage).toEqual('https://stage-secure-gateway.hipay-tpp.com');

        expect(Configuration.HPAYMENT_API_ENDPOINT_PROD).toEqual('https://api.hipay.com');
        expect(conf.hpaymentApiEndpointProd).toEqual('https://api.hipay.com');

        expect(Configuration.HPAYMENT_API_ENDPOINT_STAGE).toEqual('https://stage-api.hipay.com');
        expect(conf.hpaymentApiEndpointStage).toEqual('https://stage-api.hipay.com');

        expect(Configuration.DATA_API_ENDPOINT_PROD).toEqual('https://data.hipay.com');
        expect(conf.dataApiEndpointProd).toEqual('https://data.hipay.com');

        expect(Configuration.DATA_API_ENDPOINT_STAGE).toEqual('https://stage-data.hipay.com');
        expect(conf.dataApiEndpointStage).toEqual('https://stage-data.hipay.com');

        expect(Configuration.DATA_API_HTTP_USER_AGENT).toEqual('sdk-nodejs');
        expect(conf.dataApiHttpUserAgent).toEqual('sdk-nodejs');

        expect(Configuration.API_ENV_STAGE).toEqual('stage');
        expect(Configuration.API_ENV_PRODUCTION).toEqual('production');
        expect(Configuration.API_ENV_CUSTOM).toEqual('custom');
    });

    it('constructs minimal', () => {
        let conf = new Configuration({
            apiToken: 'TOKEN'
        });

        expect(conf.apiToken).toEqual('TOKEN');
        expect(conf.apiUsername).toEqual(undefined);
        expect(conf.apiPassword).toEqual(undefined);
        expect(conf.apiEnv).toEqual(Configuration.API_ENV_STAGE);
        expect(conf.apiEndpoint).toEqual(Configuration.API_ENDPOINT_STAGE);
        expect(conf.hpaymentApiEndpoint).toEqual(Configuration.HPAYMENT_API_ENDPOINT_STAGE);
        expect(conf.dataApiEndpoint).toEqual(Configuration.DATA_API_ENDPOINT_STAGE);
        expect(conf.apiHTTPHeaderAccept).toEqual('application/json');
        expect(conf.proxy).toEqual({});
        expect(conf.timeout).toEqual(35);
        expect(conf.httpUserAgent).toEqual('HiPayEnterprise/1.0 (SDK NodeJS)');
    });

    it('constructs minimal production', () => {
        let conf = new Configuration({
            apiToken: 'TOKEN',
            apiEnv: Configuration.API_ENV_PRODUCTION
        });

        expect(conf.apiToken).toEqual('TOKEN');
        expect(conf.apiUsername).toEqual(undefined);
        expect(conf.apiPassword).toEqual(undefined);
        expect(conf.apiEnv).toEqual(Configuration.API_ENV_PRODUCTION);
        expect(conf.apiEndpoint).toEqual(Configuration.API_ENDPOINT_PROD);
        expect(conf.hpaymentApiEndpoint).toEqual(Configuration.HPAYMENT_API_ENDPOINT_PROD);
        expect(conf.dataApiEndpoint).toEqual(Configuration.DATA_API_ENDPOINT_PROD);
        expect(conf.apiHTTPHeaderAccept).toEqual('application/json');
        expect(conf.proxy).toEqual({});
        expect(conf.timeout).toEqual(35);
        expect(conf.httpUserAgent).toEqual('HiPayEnterprise/1.0 (SDK NodeJS)');
    });

    it('constructs minimal username + password', () => {
        let conf = new Configuration({
            apiUsername: 'USERNAME',
            apiPassword: 'PASSWORD'
        });

        expect(conf.apiToken).toEqual(undefined);
        expect(conf.apiUsername).toEqual('USERNAME');
        expect(conf.apiPassword).toEqual('PASSWORD');
        expect(conf.apiEnv).toEqual(Configuration.API_ENV_STAGE);
        expect(conf.apiEndpoint).toEqual(Configuration.API_ENDPOINT_STAGE);
        expect(conf.hpaymentApiEndpoint).toEqual(Configuration.HPAYMENT_API_ENDPOINT_STAGE);
        expect(conf.dataApiEndpoint).toEqual(Configuration.DATA_API_ENDPOINT_STAGE);
        expect(conf.apiHTTPHeaderAccept).toEqual('application/json');
        expect(conf.proxy).toEqual({});
        expect(conf.timeout).toEqual(35);
        expect(conf.httpUserAgent).toEqual('HiPayEnterprise/1.0 (SDK NodeJS)');
    });

    it('constructs wrong custom env', () => {
        let conf = new Configuration({
            apiToken: 'TOKEN',
            apiEnv: Configuration.API_ENV_CUSTOM,
            customApiURL: 'azerty'
        });

        expect(conf.apiToken).toEqual('TOKEN');
        expect(conf.apiUsername).toEqual(undefined);
        expect(conf.apiPassword).toEqual(undefined);
        expect(conf.apiEnv).toEqual(Configuration.API_ENV_CUSTOM);
        expect(conf.apiEndpoint).toEqual(Configuration.API_ENDPOINT_STAGE);
        expect(conf.hpaymentApiEndpoint).toEqual(Configuration.HPAYMENT_API_ENDPOINT_STAGE);
        expect(conf.dataApiEndpoint).toEqual(Configuration.DATA_API_ENDPOINT_STAGE);
        expect(conf.apiHTTPHeaderAccept).toEqual('application/json');
        expect(conf.proxy).toEqual({});
        expect(conf.timeout).toEqual(35);
        expect(conf.httpUserAgent).toEqual('HiPayEnterprise/1.0 (SDK NodeJS)');
    });

    it('constructs wrong custom data env', () => {
        let conf = new Configuration({
            apiToken: 'TOKEN',
            customDataApiURL: 'azerty'
        });

        expect(conf.apiToken).toEqual('TOKEN');
        expect(conf.apiUsername).toEqual(undefined);
        expect(conf.apiPassword).toEqual(undefined);
        expect(conf.apiEnv).toEqual(Configuration.API_ENV_STAGE);
        expect(conf.apiEndpoint).toEqual(Configuration.API_ENDPOINT_STAGE);
        expect(conf.hpaymentApiEndpoint).toEqual(Configuration.HPAYMENT_API_ENDPOINT_STAGE);
        expect(conf.dataApiEndpoint).toEqual(Configuration.DATA_API_ENDPOINT_STAGE);
        expect(conf.apiHTTPHeaderAccept).toEqual('application/json');
        expect(conf.proxy).toEqual({});
        expect(conf.timeout).toEqual(35);
        expect(conf.httpUserAgent).toEqual('HiPayEnterprise/1.0 (SDK NodeJS)');
    });

    it('errors when no authentication', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({});
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('Constructor must be called with at least apiUsername and apiPassword parameters');

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });

    it('errors when missing username', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiPassword: 'PASSWORD'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('Constructor must be called with at least apiUsername and apiPassword parameters');

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });

    it('errors when missing password', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiUsername: 'USERNAME'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('Constructor must be called with at least apiUsername and apiPassword parameters');

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });

    it('errors when wrong username type', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiUsername: 22,
                apiPassword: 'PASSWORD'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith("Api username can't be empty and must be a string");

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });
    it('errors when empty username', () => {
        let catchFn = jest.fn();

        try {
            let conf = new Configuration({
                apiUsername: 'USERNAME',
                apiPassword: 'PASSWORD'
            });

            conf.apiUsername = '';
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith("Api username can't be empty and must be a string");

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });

    it('errors when wrong password type', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiUsername: 'USERNAME',
                apiPassword: 22
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith("Api password can't be empty and must be a string");

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });
    it('errors when empty password', () => {
        let catchFn = jest.fn();

        try {
            let conf = new Configuration({
                apiUsername: 'USERNAME',
                apiPassword: 'PASSWORD'
            });

            conf.apiPassword = '';
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith("Api password can't be empty and must be a string");

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });

    it('errors when wrong env', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiUsername: 'USERNAME',
                apiPassword: 'PASSWORD',
                apiEnv: 'ENVIRONMENT'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith("Api environment must be a string value between 'stage', 'production' or 'custom'");

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });

    it('errors when wrong accept header', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiUsername: 'USERNAME',
                apiPassword: 'PASSWORD',
                apiHTTPHeaderAccept: 'ACCEPT_HEADER'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith(
                'Api HTTP Header Accept should be one of these values: ' + Configuration.VALID_HTTP_HEADERS.join()
            );

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });

    it('errors when wrong timeout type', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiUsername: 'USERNAME',
                apiPassword: 'PASSWORD',
                timeout: 'TIMEOUT'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith("Timeout can't be empty and must be a positive integer");

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });
    it('errors when negative timeout', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiUsername: 'USERNAME',
                apiPassword: 'PASSWORD',
                timeout: -5
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith("Timeout can't be empty and must be a positive integer");

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });

    it('errors when wrong User Agent type', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiUsername: 'USERNAME',
                apiPassword: 'PASSWORD',
                httpUserAgent: 22
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith("HTTP User Agent can't be empty and must be a string");

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });
    it('errors when empty User Agent', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiUsername: 'USERNAME',
                apiPassword: 'PASSWORD',
                httpUserAgent: ''
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith("HTTP User Agent can't be empty and must be a string");

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });

    it('errors when wrong token type', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiToken: 2
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith("Api token can't be empty and must be a string");

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });
    it('errors when empty token', () => {
        let catchFn = jest.fn();

        try {
            let conf = new Configuration({
                apiToken: 'TOKEN'
            });

            conf.apiToken = '';
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith("Api token can't be empty and must be a string");

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });
    it('errors when empty token with username', () => {
        let catchFn = jest.fn();

        try {
            let conf = new Configuration({
                apiToken: 'TOKEN'
            });

            conf.apiUsername = 'USERNAME';
            conf.apiToken = '';
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith("Api token can't be empty and must be a string");

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });
    it('errors when empty token with password', () => {
        let catchFn = jest.fn();

        try {
            let conf = new Configuration({
                apiToken: 'TOKEN'
            });

            conf.apiPassword = 'PASSWORD';
            conf.apiToken = '';
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith("Api token can't be empty and must be a string");

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });
    it('can reset token to null if username and password are set', () => {
        let conf = new Configuration({
            apiToken: 'TOKEN'
        });

        conf.apiUsername = 'USERNAME';
        conf.apiPassword = 'PASSWORD';
        conf.apiToken = null;

        expect(conf.apiToken).toEqual(null);
    });
    it('can reset token to empty if username and password are set', () => {
        let conf = new Configuration({
            apiToken: 'TOKEN'
        });

        conf.apiUsername = 'USERNAME';
        conf.apiPassword = 'PASSWORD';
        conf.apiToken = '';

        expect(conf.apiToken).toEqual('');
    });

    it('errors when wrong proxy type', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiToken: 'TOKEN',
                proxy: 'PROXY'
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('Proxy should be an object');

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });
    it('errors when wrong proxy keys', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiToken: 'TOKEN',
                proxy: {
                    dummy: 'VALUE'
                }
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('Proxy keys should be: ' + Configuration.VALID_PROXY_KEYS.join());

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });
    it('errors when wrong proxy host', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiToken: 'TOKEN',
                proxy: {
                    host: 5
                }
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('Proxy host should be a string');

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });
    it('errors when wrong proxy port', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiToken: 'TOKEN',
                proxy: {
                    port: 'PORT'
                }
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('Proxy port should be an integer');

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });
    it('errors when wrong proxy auth type', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiToken: 'TOKEN',
                proxy: {
                    auth: 'AUTH'
                }
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith(
                'Proxy auth should be an object with the following properties : ' + Configuration.VALID_PROXY_AUTH_KEYS.join()
            );

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });
    it('errors when wrong proxy auth keys', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiToken: 'TOKEN',
                proxy: {
                    auth: {
                        dummy: 'VALUES'
                    }
                }
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith(
                'Proxy auth keys should be: ' + Configuration.VALID_PROXY_AUTH_KEYS.join() + ' and should be string'
            );

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });
    it('errors when wrong proxy auth keys type', () => {
        let catchFn = jest.fn();

        try {
            new Configuration({
                apiToken: 'TOKEN',
                proxy: {
                    auth: {
                        username: 55
                    }
                }
            });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith(
                'Proxy auth keys should be: ' + Configuration.VALID_PROXY_AUTH_KEYS.join() + ' and should be string'
            );

            catchFn();
        }

        expect(catchFn).toHaveBeenCalled();
    });
});
