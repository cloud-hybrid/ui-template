const Request = require('axios');

import { default as Forage } from 'localforage';

const STORE       = 'JWT';
const NAME        = 'Nexus-UI';
const DESCRIPTION = 'Nexus Dashboard Login State';

const Debug = (
    'production' !== process.env['NODE_ENV']
);

const URL = process.env.REACT_APP_API_ENDPOINT;

/***
 * API Basic Authentication Endpoint + JWT Generator
 *
 * The following URL -- upon successful authentication -- will return a newly
 * generated JWT authorization token.
 *
 * @type {string}
 *
 */

const Authorizer = URL + '/API/Authentication/Guarantee';

/***
 * HTTP Request Cancellation Handler
 *
 * Without the following cancellation token, React-based front-ends will warn
 * against memory leaks; additionally, the cancellation token is used to avoid
 * difficult to debug errors and endless request loops.
 *
 * @type {function(): CancelTokenSource}
 *
 */

export const Cancellation = () => Request.CancelToken.source();

export const Store = Forage.createInstance({
    name:        NAME,
    storeName:   STORE,
    description: DESCRIPTION
});

/***
 *
 * Authentication Entry Point
 *
 * @param Payload {{Username: null|String, Password: null|String}}
 * @param Handler {CancelTokenSource}
 *
 * @returns {Promise<null|{Loading: boolean, Data: null, Error: boolean}>}
 *
 * @constructor
 *
 */

export const Authenticate = async (Payload, Handler) => {
    const Return = {
        Data:    null,
        Loading: true,
        Error:   false,
        Status:  {
            Code:    -1,
            Message: ''
        }
    };

    (
        Debug
    ) ? console.log('[Trace] Submitting Authentication Payload', Payload)
        : console.debug('[Trace] Submitting Authentication Payload ...');

    const $ = async () => await Request.post(Authorizer, {
        Grant:    'Password',
        Username: Payload.Username,
        Password: Payload.Password
    }, {
        cancelToken: Handler.token
    }).then((Data) => {
        console.debug('[Debug] Response Data', Data);
        console.debug('[Debug] JWT Authorization Data', Data.data);
        console.debug('[Debug] JWT Authorization Return Headers', Data.headers);

        Return.Error = false;
        Return.Data  = {
            Payload: Data.data,
            Headers: Data.headers,
            Status:  {
                Code:    Data.status,
                Message: Data.statusText
            }
        };

        Return.Status.Code    = Data.status;
        Return.Status.Message = Data.statusText;

        try {
            console.trace('[Trace] Authentication Object', Return);
            console.debug('[Debug]', 'JWT Token (Pre-Storage Setter)', Return.Data.Payload['JWT']);

            return Store.setItem(STORE, Return.Data.Payload['JWT'], (e, value) => {
                if (e) {
                    console.error('[Fatal Error] Unknown Exception', e);
                }
                (
                    e
                ) ? Handler.cancel('Unknown Error Establishing JWT Token')
                    : console.debug('[Debug]', 'Established JWT Token in Storage', value);
            });
        } catch (error) {
            console.debug('[Warning] Unsuccessfully Established JWT Token', error);

            Return.Error = error;

            Handler.cancel('Error Establishing JWT Token');

            return Store.clear((e) => {
                if (e) {
                    console.error('[Fatal Error] Unknown Exception', e);
                }
                console.debug('[Debug]', 'Removed Stale JWT Token(s) from Storage');
            });
        }
    }).finally(() => Return.Loading = false);

    console.debug('[Debug]', 'Initializing Authorization Awaitable ...');

    await $();

    console.debug('[Debug]', "Awaitable Complete", "Session Storage Awaitable(s) ?:= Complete");

    return Return;
};
