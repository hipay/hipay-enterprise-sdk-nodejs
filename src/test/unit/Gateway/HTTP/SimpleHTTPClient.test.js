const InvalidArgumentException = require('../../../../Error/InvalidArgumentException');
const ApiErrorException = require('../../../../Error/ApiErrorException');
jest.mock('../../../../Error/InvalidArgumentException');
jest.mock('../../../../Error/ApiErrorException');

const Response = require('../../../../Gateway/HTTP/Response/Response');

const Configuration = require('../../../../Gateway/HTTP/Configuration/Configuration');
jest.mock('../../../../Gateway/HTTP/Configuration/Configuration');

const axios = require('axios');
jest.mock('axios');
axios.AxiosError = jest.requireActual('axios').AxiosError;

afterEach(async () => {
    await axios.request.mockReset();
});

describe('Test SimpleHTTPClient constructor, getters & setters', () => {
    const SimpleHTTPClient = require('../../../../Gateway/HTTP/SimpleHTTPClient');

    it('initializes correctly', () => {
        expect(() => {
            new SimpleHTTPClient(new Configuration({}));
        }).not.toThrow();

        let mockConfiguration = new Configuration({});
        let dummyObj = new SimpleHTTPClient(mockConfiguration);

        expect(dummyObj.configuration).toEqual(mockConfiguration);
    });

    it('sets correctly if provided configuration is Configuration', () => {
        let mockConfiguration = new Configuration({});
        mockConfiguration.apiUsername = 'USERNAME';

        let mockConfiguration2 = new Configuration({});
        mockConfiguration.apiUsername = 'USERNAME_2';

        let dummyObj = new SimpleHTTPClient(mockConfiguration);
        dummyObj.configuration = mockConfiguration2;
        expect(dummyObj.configuration).toStrictEqual(mockConfiguration2);
        expect(dummyObj.configuration).not.toStrictEqual(mockConfiguration);
    });

    it('errors if provided configuration is not Configuration', () => {
        expect(() => {
            new SimpleHTTPClient({});
        }).toThrow();

        try {
            new SimpleHTTPClient({});
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('Configuration should be a Configuration object');
        }
    });

    it('errors if provided configuration is not object', () => {
        expect(() => {
            new SimpleHTTPClient('Hello world');
        }).toThrow();

        try {
            new SimpleHTTPClient('Hello world');
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
            expect(InvalidArgumentException).toHaveBeenCalledWith('Configuration should be a Configuration object');
        }
    });
});

describe('Test order request method', () => {
    const SimpleHTTPClient = require('../../../../Gateway/HTTP/SimpleHTTPClient');

    it('calls API if everything is empty', async (done) => {
        let mockConfig = new Configuration({});
        mockConfig.timeout = 5;
        mockConfig.apiEndpoint = '{API_ENDPOINT}';
        mockConfig.httpUserAgent = '{HTTP_USER_AGENT}';
        mockConfig.apiHTTPHeaderAccept = '{HTTP_ACCEPT}';
        mockConfig.apiToken = '{API_TOKEN}';
        mockConfig.proxy = {};

        let client = new SimpleHTTPClient(mockConfig);

        axios.request.mockReturnValue({
            data: '{DATA}',
            status: '{STATUS}'
        });

        const mockResponse = new Response('{DATA}', '{STATUS}', {
            'Content-Type': 'application/json; encoding=UTF-8'
        });

        let actualResponse = await client.request('POST', '{ENDPOINT}');
        expect(actualResponse).toBeInstanceOf(Response);
        expect(actualResponse).toStrictEqual(mockResponse);
        expect(axios.request).toHaveBeenCalledWith({
            url: '{ENDPOINT}',
            method: 'POST',
            timeout: 5000,
            headers: {
                Accept: '{HTTP_ACCEPT}',
                'User-Agent': '{HTTP_USER_AGENT}',
                Authorization: 'Bearer {API_TOKEN}',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            baseURL: '',
            data: ''
        });

        done();
    });

    it('calls API if everything is right', async (done) => {
        let mockConfig = new Configuration({});
        mockConfig.timeout = 5;
        mockConfig.apiEndpoint = '{API_ENDPOINT}';
        mockConfig.httpUserAgent = '{HTTP_USER_AGENT}';
        mockConfig.apiHTTPHeaderAccept = '{HTTP_ACCEPT}';
        mockConfig.apiToken = '{API_TOKEN}';
        mockConfig.proxy = {};

        let client = new SimpleHTTPClient(mockConfig);

        let params = {
            mockProp: 'mockValue',
            mockProp2: 'mockValue2'
        };

        axios.request.mockReturnValue({
            data: '{DATA}',
            status: '{STATUS}'
        });

        const mockResponse = new Response('{DATA}', '{STATUS}', {
            'Content-Type': 'application/json; encoding=UTF-8'
        });

        let actualResponse = await client.request('POST', '{ENDPOINT}', { body: params, baseUrl: '{API_ENDPOINT}' });
        expect(actualResponse).toBeInstanceOf(Response);
        expect(actualResponse).toStrictEqual(mockResponse);
        expect(axios.request).toHaveBeenCalledWith({
            url: '{ENDPOINT}',
            method: 'POST',
            baseURL: '{API_ENDPOINT}',
            timeout: 5000,
            headers: {
                Accept: '{HTTP_ACCEPT}',
                'User-Agent': '{HTTP_USER_AGENT}',
                Authorization: 'Bearer {API_TOKEN}',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: 'mockProp=mockValue&mockProp2=mockValue2'
        });

        done();
    });

    it('calls API with additional headers if everything is right', async (done) => {
        let mockConfig = new Configuration({});
        mockConfig.timeout = 5;
        mockConfig.apiEndpoint = '{API_ENDPOINT}';
        mockConfig.httpUserAgent = '{HTTP_USER_AGENT}';
        mockConfig.apiHTTPHeaderAccept = '{HTTP_ACCEPT}';
        mockConfig.apiToken = '{API_TOKEN}';
        mockConfig.proxy = {};

        let client = new SimpleHTTPClient(mockConfig);

        let params = {
            mockProp: 'mockValue',
            mockProp2: 'mockValue2'
        };

        axios.request.mockReturnValue({
            data: '{DATA}',
            status: '{STATUS}'
        });

        const mockResponse = new Response('{DATA}', '{STATUS}', {
            'Content-Type': 'application/json; encoding=UTF-8'
        });

        let actualResponse = await client.request('POST', '{ENDPOINT}', {
            body: params,
            baseUrl: '{API_ENDPOINT}',
            additionalHeaders: { ADDITIONAL_HEADER: 'HEADER_VALUE' }
        });
        expect(actualResponse).toBeInstanceOf(Response);
        expect(actualResponse).toStrictEqual(mockResponse);
        expect(axios.request).toHaveBeenCalledWith({
            url: '{ENDPOINT}',
            method: 'POST',
            baseURL: '{API_ENDPOINT}',
            timeout: 5000,
            headers: {
                ADDITIONAL_HEADER: 'HEADER_VALUE',
                Accept: '{HTTP_ACCEPT}',
                'User-Agent': '{HTTP_USER_AGENT}',
                Authorization: 'Bearer {API_TOKEN}',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: 'mockProp=mockValue&mockProp2=mockValue2'
        });

        done();
    });

    it('calls API in GET if everything is right', async (done) => {
        let mockConfig = new Configuration({});
        mockConfig.timeout = 5;
        mockConfig.apiEndpoint = '{API_ENDPOINT}';
        mockConfig.httpUserAgent = '{HTTP_USER_AGENT}';
        mockConfig.apiHTTPHeaderAccept = '{HTTP_ACCEPT}';
        mockConfig.apiToken = '{API_TOKEN}';
        mockConfig.proxy = {};

        let client = new SimpleHTTPClient(mockConfig);

        let params = {
            mockProp: 'mockValue',
            mockProp2: 'mockValue2'
        };

        axios.request.mockReturnValue({
            data: '{DATA}',
            status: '{STATUS}'
        });

        const mockResponse = new Response('{DATA}', '{STATUS}', {
            'Content-Type': 'application/json; encoding=UTF-8'
        });

        let actualResponse = await client.request('GET', '{ENDPOINT}', { body: params, baseUrl: '{API_ENDPOINT}' });
        expect(actualResponse).toBeInstanceOf(Response);
        expect(actualResponse).toStrictEqual(mockResponse);
        expect(axios.request).toHaveBeenCalledWith({
            url: '{ENDPOINT}',
            method: 'GET',
            baseURL: '{API_ENDPOINT}',
            timeout: 5000,
            headers: {
                Accept: '{HTTP_ACCEPT}',
                'User-Agent': '{HTTP_USER_AGENT}',
                Authorization: 'Bearer {API_TOKEN}'
            }
        });

        done();
    });

    it('calls API with proxy if everything is right', async (done) => {
        let mockConfig = new Configuration({});
        mockConfig.timeout = 5;
        mockConfig.apiEndpoint = '{API_ENDPOINT}';
        mockConfig.httpUserAgent = '{HTTP_USER_AGENT}';
        mockConfig.apiHTTPHeaderAccept = '{HTTP_ACCEPT}';
        mockConfig.apiToken = '{API_TOKEN}';
        mockConfig.proxy = {
            host: '{PROXY_HOST}',
            port: '{PROXY_PORT}'
        };

        let client = new SimpleHTTPClient(mockConfig);

        let params = {
            mockProp: 'mockValue',
            mockProp2: 'mockValue2'
        };

        axios.request.mockReturnValue({
            data: '{DATA}',
            status: '{STATUS}'
        });

        const mockResponse = new Response('{DATA}', '{STATUS}', {
            'Content-Type': 'application/json; encoding=UTF-8'
        });

        let actualResponse = await client.request('POST', '{ENDPOINT}', { body: params, baseUrl: '{API_ENDPOINT}' });
        expect(actualResponse).toBeInstanceOf(Response);
        expect(actualResponse).toStrictEqual(mockResponse);
        expect(axios.request).toHaveBeenCalledWith({
            url: '{ENDPOINT}',
            method: 'POST',
            baseURL: '{API_ENDPOINT}',
            timeout: 5000,
            headers: {
                Accept: '{HTTP_ACCEPT}',
                'User-Agent': '{HTTP_USER_AGENT}',
                Authorization: 'Bearer {API_TOKEN}',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            proxy: {
                host: '{PROXY_HOST}',
                port: '{PROXY_PORT}'
            },
            data: 'mockProp=mockValue&mockProp2=mockValue2'
        });

        done();
    });

    it('calls API with basic credentials if everything is right', async (done) => {
        let mockConfig = new Configuration({});
        mockConfig.timeout = 5;
        mockConfig.apiEndpoint = '{API_ENDPOINT}';
        mockConfig.httpUserAgent = '{HTTP_USER_AGENT}';
        mockConfig.apiHTTPHeaderAccept = '{HTTP_ACCEPT}';
        mockConfig.apiUsername = '{API_USERNAME}';
        mockConfig.apiPassword = '{API_PASSWORD}';
        mockConfig.proxy = {};

        let client = new SimpleHTTPClient(mockConfig);

        let params = {
            mockProp: 'mockValue',
            mockProp2: 'mockValue2'
        };

        axios.request.mockReturnValue({
            data: '{DATA}',
            status: '{STATUS}'
        });

        const mockResponse = new Response('{DATA}', '{STATUS}', {
            'Content-Type': 'application/json; encoding=UTF-8'
        });

        let actualResponse = await client.request('POST', '{ENDPOINT}', { body: params, baseUrl: '{API_ENDPOINT}' });
        expect(actualResponse).toBeInstanceOf(Response);
        expect(actualResponse).toStrictEqual(mockResponse);
        expect(axios.request).toHaveBeenCalledWith({
            url: '{ENDPOINT}',
            method: 'POST',
            baseURL: '{API_ENDPOINT}',
            timeout: 5000,
            headers: {
                Accept: '{HTTP_ACCEPT}',
                'User-Agent': '{HTTP_USER_AGENT}',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic e0FQSV9VU0VSTkFNRX06e0FQSV9QQVNTV09SRH0='
            },
            data: 'mockProp=mockValue&mockProp2=mockValue2'
        });

        done();
    });

    it('calls data API if everything is right', async (done) => {
        let mockConfig = new Configuration({});
        mockConfig.timeout = 5;
        mockConfig.apiEndpoint = '{API_ENDPOINT}';
        mockConfig.httpUserAgent = '{HTTP_USER_AGENT}';
        mockConfig.dataApiHttpUserAgent = '{DATA_HTTP_USER_AGENT}';
        mockConfig.apiHTTPHeaderAccept = '{HTTP_ACCEPT}';
        mockConfig.apiUsername = '{API_USERNAME}';
        mockConfig.apiPassword = '{API_PASSWORD}';
        mockConfig.proxy = {};

        let client = new SimpleHTTPClient(mockConfig);

        let params = {
            mockProp: 'mockValue',
            mockProp2: 'mockValue2'
        };

        axios.request.mockReturnValue({
            data: '{DATA}',
            status: '{STATUS}'
        });

        const mockResponse = new Response('{DATA}', '{STATUS}', {
            'Content-Type': 'application/json; encoding=UTF-8'
        });

        let actualResponse = await client.request('POST', '{ENDPOINT}', { body: params, baseUrl: '{DATA_API_ENDPOINT}', isData: true });
        expect(actualResponse).toBeInstanceOf(Response);
        expect(actualResponse).toStrictEqual(mockResponse);
        expect(axios.request).toHaveBeenCalledWith({
            url: '{ENDPOINT}',
            method: 'POST',
            baseURL: '{DATA_API_ENDPOINT}',
            timeout: 60000,
            headers: {
                Accept: '{HTTP_ACCEPT}',
                'User-Agent': '{DATA_HTTP_USER_AGENT}',
                'X-Who-Api': '{DATA_HTTP_USER_AGENT}',
                'Content-Type': 'application/json'
            },
            data: '{"mockProp":"mockValue","mockProp2":"mockValue2"}'
        });

        done();
    });

    it('calls data API with error without stopping request', async (done) => {
        let mockConfig = new Configuration({});
        mockConfig.timeout = 5;
        mockConfig.apiEndpoint = '{API_ENDPOINT}';
        mockConfig.dataApiEndpoint = '{DATA_API_ENDPOINT}';
        mockConfig.httpUserAgent = '{HTTP_USER_AGENT}';
        mockConfig.dataApiHttpUserAgent = '{DATA_HTTP_USER_AGENT}';
        mockConfig.apiHTTPHeaderAccept = '{HTTP_ACCEPT}';
        mockConfig.apiUsername = '{API_USERNAME}';
        mockConfig.apiPassword = '{API_PASSWORD}';
        mockConfig.proxy = {};

        let client = new SimpleHTTPClient(mockConfig);

        let params = {
            mockProp: 'mockValue',
            mockProp2: 'mockValue2'
        };

        axios.request.mockImplementation(() => {
            throw new axios.AxiosError();
        });

        await expect(client.request('POST', '{ENDPOINT}', { body: params, baseUrl: '{API_ENDPOINT}', isData: true })).resolves.not.toThrow();

        done();
    });

    it('errors if method is not string', async (done) => {
        let mockConfig = new Configuration({});
        let client = new SimpleHTTPClient(mockConfig);

        let params = {
            mockProp: 'mockValue',
            mockProp2: 'mockValue2'
        };

        try {
            await client.request(true, '{ENDPOINT}', { body: params, baseUrl: '{API_ENDPOINT}' });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('HTTP METHOD must a string and a valid HTTP METHOD Value');

        done();
    });

    it('errors if method is not valid', async (done) => {
        let mockConfig = new Configuration({});
        let client = new SimpleHTTPClient(mockConfig);

        let params = {
            mockProp: 'mockValue',
            mockProp2: 'mockValue2'
        };

        try {
            await client.request('{METHOD}', '{ENDPOINT}', { body: params, baseUrl: '{API_ENDPOINT}' });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('HTTP METHOD must a string and a valid HTTP METHOD Value');

        done();
    });

    it('errors if endpoint is not string', async (done) => {
        let mockConfig = new Configuration({});
        let client = new SimpleHTTPClient(mockConfig);

        let params = {
            mockProp: 'mockValue',
            mockProp2: 'mockValue2'
        };

        try {
            await client.request('POST', true, { body: params, baseUrl: '{API_ENDPOINT}' });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Endpoint must be a string and a valid api endpoint');

        done();
    });

    it('errors if endpoint is empty', async (done) => {
        let mockConfig = new Configuration({});
        let client = new SimpleHTTPClient(mockConfig);

        let params = {
            mockProp: 'mockValue',
            mockProp2: 'mockValue2'
        };

        try {
            await client.request('POST', '', { body: params, baseUrl: '{API_ENDPOINT}' });
        } catch (err) {
            expect(err).toBeInstanceOf(InvalidArgumentException);
        }

        expect(InvalidArgumentException).toHaveBeenCalledWith('Endpoint must be a string and a valid api endpoint');

        done();
    });

    it('errors if order API errors', async (done) => {
        let mockConfig = new Configuration({});
        mockConfig.timeout = 5;
        mockConfig.apiEndpoint = '{API_ENDPOINT}';
        mockConfig.httpUserAgent = '{HTTP_USER_AGENT}';
        mockConfig.apiHTTPHeaderAccept = '{HTTP_ACCEPT}';
        mockConfig.apiToken = '{API_TOKEN}';
        mockConfig.proxy = {};

        let client = new SimpleHTTPClient(mockConfig);

        let params = {
            mockProp: 'mockValue',
            mockProp2: 'mockValue2'
        };

        axios.request.mockImplementation(() => {
            throw new axios.AxiosError(
                'Sample error',
                'CODE',
                {},
                {},
                {
                    data: {
                        message: '{ERROR_MESSAGE}',
                        code: '{ERROR_CODE}',
                        description: '{ERROR_DESCRIPTION}'
                    },
                    status: '{ERROR_STATUS}'
                }
            );
        });

        try {
            await client.request('POST', '{ENDPOINT}', { body: params, baseUrl: '{API_ENDPOINT}' });
        } catch (err) {
            expect(err).toBeInstanceOf(ApiErrorException);
        }

        expect(ApiErrorException).toHaveBeenCalledWith('{ERROR_MESSAGE}', '{ERROR_STATUS}', '{ERROR_CODE}', '{ERROR_DESCRIPTION}');

        done();
    });

    it('errors if order API errors with no info', async (done) => {
        let mockConfig = new Configuration({});
        mockConfig.timeout = 5;
        mockConfig.apiEndpoint = '{API_ENDPOINT}';
        mockConfig.httpUserAgent = '{HTTP_USER_AGENT}';
        mockConfig.apiHTTPHeaderAccept = '{HTTP_ACCEPT}';
        mockConfig.apiToken = '{API_TOKEN}';
        mockConfig.proxy = {};

        let client = new SimpleHTTPClient(mockConfig);

        let params = {
            mockProp: 'mockValue',
            mockProp2: 'mockValue2'
        };

        let error = new axios.AxiosError(
            'Sample error',
            'CODE',
            {},
            {},
            {
                data: {
                    message: '{ERROR_MESSAGE}',
                    description: '{ERROR_DESCRIPTION}'
                },
                status: '{ERROR_STATUS}'
            }
        );

        axios.request.mockImplementation(() => {
            throw error;
        });

        await expect(
            client.request('POST', '{ENDPOINT}', {
                body: params,
                baseUrl: '{API_ENDPOINT}'
            })
        ).rejects.toThrow();

        try {
            await client.request('POST', '{ENDPOINT}', { body: params, baseUrl: '{API_ENDPOINT}' });
        } catch (err) {
            expect(err).toBeInstanceOf(axios.AxiosError);
            expect(err).toEqual(error);
            expect(err.message).toEqual('Sample error');
            expect(err.response).toEqual({
                data: {
                    message: '{ERROR_MESSAGE}',
                    description: '{ERROR_DESCRIPTION}'
                },
                status: '{ERROR_STATUS}'
            });
        }

        done();
    });

    it('errors if axios errors', async (done) => {
        let mockConfig = new Configuration({});
        mockConfig.timeout = 5;
        mockConfig.apiEndpoint = '{API_ENDPOINT}';
        mockConfig.httpUserAgent = '{HTTP_USER_AGENT}';
        mockConfig.apiHTTPHeaderAccept = '{HTTP_ACCEPT}';
        mockConfig.apiToken = '{API_TOKEN}';
        mockConfig.proxy = {};

        let client = new SimpleHTTPClient(mockConfig);

        let params = {
            mockProp: 'mockValue',
            mockProp2: 'mockValue2'
        };

        axios.request.mockImplementation(() => {
            throw new Error('Sample error');
        });

        await expect(client.request('POST', '{ENDPOINT}', { body: params, baseUrl: '{API_ENDPOINT}' })).rejects.toThrow();

        try {
            await client.request('POST', '{ENDPOINT}', { body: params, baseUrl: '{API_ENDPOINT}' });
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toEqual('Sample error');
        }

        done();
    });
});
