const Request = require("axios");
const Adapter = require("axios-cache-adapter");
const Forage = require("localforage");

const STORE = "JWT";
const NAME = "Nexus-UI";
const DESCRIPTION = "Nexus Dashboard Login State";

const Debug = (process.env["NODE_ENV"] !== "production");

const URL = process.env.REACT_APP_API_ENDPOINT;

/***
 * API Validation Endpoint
 *
 * @type {string}
 *
*/

const Deserialize = URL + "/API/Authentication/Deserialized";

/***
 * API Basic Authentication Endpoint + JWT Generator
 *
 * The following URL -- upon successful authentication -- will return a newly
 * generated JWT authorization token.
 *
 * @type {string}
 *
*/

const Authorizer = URL + "/API/Authentication/Guarantee";

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

/***
 * Browser Storage API
 *
 * @type {LocalForage}
 *
*/

export const Store = Forage.createInstance({
    name: NAME,
    storeName: STORE,
    description: DESCRIPTION
});

/***
 *
 * Cache - Storage Extension Interface
 *
 * @type {Adapter.ISetupCache}
 *
*/

const Cache = Adapter.setupCache({
    debug: (process.env.NODE_ENV !== "production"),
    clearOnStale: true,
    ignoreCache: false,
    limit: false,
    clearOnError: true,
    readHeaders: true,
    readOnError: true,
    maxAge: 5 * 60 * 1000,
    store: Store
});

/***
 *
 * Axios-based Object Interface w/Cache + Adapter
 *
 * @type {AxiosInstance}
 *
*/

const API = Request.create({
    adapter: Cache.adapter,
    cache: Cache
});

/***
 *
 * JWT Validation Function
 *
 * @param Token {null|{JWT: String, Type: null|String}}
 * @param Handler {CancelTokenSource}
 *
 * @returns {Promise<null|{Loading: boolean, Content: null, Transmission: boolean, Error: boolean}>}
 *
 * @constructor
 *
*/

export const Validate = async (Token, Handler) => {
    const Validation = {
        Content: null,
        Loading: false,
        Error: false
    };

    try {
        Validation.Loading = true;

        if (Token !== null && Token.Type === "Bearer") {
            const JWT = Token.JWT;

            const Valid = await API.post(Deserialize, {
                Token
            }, {
                headers: {
                    "Authorization": JWT
                }, cancelToken: Handler.token,
                responseType: "json"
            }).then(async (Data) => {
                console.debug("[Debug] JWT Authorization Request", Data);

                Validation.Loading = false;
                Validation.Data = Data;
                Validation.Error = null;

                await Store.setItem(STORE, Data);
            }).catch((Error) => {
                Validation.Loading = false;
                Validation.Data = null;
                Validation.Error = Error;

                console.debug("[Error]", Validation);

                Handler.cancel(JSON.stringify({ ... {Task: "... @Task Login.js"}, ... Validation}, null, 4));

                (async () => await Store.clear())().then(() => console
                    .debug("[Informational] Cleared JWT Token")
                );
            }).finally(() => Validation.Loading = false);
        }
        else {
            Handler.cancel("... @Task Login.js");

            Response.Loading = false;
        }
    } catch (Error) {
        console.debug("[Warning] JWT Validation", Error);

        Handler.cancel(JSON.stringify({Validation, Error}, null, 4));
    }

    return Validation;
};


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
    let $ = false;
    const Response = {
        Data: null,
        Loading: false,
        Error: false
    };

    if (Payload.Username === null || Payload.Password === null) {
        console.warn("[Warning] Authentication Payload Username || Password :== null");

        return null;
    }

    try {
        Response.Loading = true;

        (Debug) ? console.log("[Trace]", Payload) : console.debug("[Trace] Submitting Authentication Payload ...");

        if ($ === false)
            Response.Request = await API.post(Authorizer, {
                Grant: "Password",
                Username: Payload.Username,
                Password: Payload.Password
            }, {
                cancelToken: Handler.token,
                responseType: "json"
            }).then((Data) => {
                console.debug("[Debug] Authentication Authorization Request", Data);

                Response.Loading = false;
                Response.Data = Data;
                Response.Error = null;

                (async () => await Store.setItem(STORE, Data.data))
                    ().then(
                        () => console.debug("[Informational] Updated JWT Token")
                    );
            }).catch((Error) => {
                Response.Loading = false;
                Response.Data = null;
                Response.Error = Error;

                console.debug("[Error]", Response);

                (async () => await Store.clear())
                    ().then(
                        () => console.debug("[Informational] Cleared JWT Token")
                );

                $ = true;
            }).finally(() => Response.Loading = false);
        else {
            $ = true

            Response.Loading = false;
        }
    } catch (Error) {
        $ = true;

        console.debug("[Warning] JWT Validation", Error);

        Handler.cancel(JSON.stringify({Response, Error}, null, 4));
    }

    return Response;
};

/***
 *
 * @param Handler {CancelTokenSource}
 *
 * @returns {Promise<{Loading: boolean, Content: null, Transmission: boolean, Error: boolean}|null>}
 *
 * @constructor
 *
*/

export const Token = async (Handler) => {
    const Schema = await Store.getItem(STORE);
    return await Validate(Schema, Handler);
};

/***
 *
 * JWT Getter
 *
 * @returns {Promise<{JWT: String, Type: String} | null>}
 *
 * @constructor
 *
*/

export const JWT = async () => {
    return await Store.getItem(STORE);
}
