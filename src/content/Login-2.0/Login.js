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
    ignoreCache: true,
    limit: 0,
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
 * @returns {Promise<{Loading: boolean, Content: null, Error: boolean}>}
 *
 * @constructor
 *
*/

export const Validate = async (Token, Handler) => {
    let $ = false;

    const Validation = {
        Content: null,
        Loading: false,
        Error: null,
        Status: {
            Code: -1,
            Message: ""
        }
    };

    try {
        Validation.Loading = true;

        if (Token !== null && Token.Type === "Bearer" && $ === false) {
            const JWT = Token.JWT;

            await API.post(Deserialize, {
                Token
            }, {
                headers: {
                    "Authorization": JWT
                }, cancelToken: Handler.token,
                responseType: "json"
            }).then(async (Data) => {
                $ = true;

                console.debug("[Debug] JWT Validation Data", Data.data);
                console.debug("[Debug] JWT Validation Response Headers", Data.headers);

                Validation.Loading = false;
                Validation.Error = false;
                Validation.Data = {
                    Payload: Data.data,
                    Headers: Data.headers,
                    Status: {
                        Code: Data.status,
                        Message: Data.statusText
                    }
                };

                Validation.Status.Code = Data.status;
                Validation.Status.Message = Data.statusText;

                try {
                    console.trace("[Trace] Validation Object", Validation);
                    await Store.setItem(STORE, Validation.Data.Payload.JWT);
                    console.info("[Informational] Successfully Updated JWT Token", Validation.Data.Payload.JWT);
                } catch (error) {
                    await Store.clear();

                    console.debug("[Warning] Unsuccessfully Updated JWT Token", error);

                    Validation.Error = error;

                    Handler.cancel(JSON.stringify({Validation, error}, null, 4));
                }
            }).catch(async (Error) => {
                $ = true;

                Validation.Loading = false;
                Validation.Data = null;
                Validation.Error = Error;

                console.debug("[Error]", Validation);

                console.warn("[Warning] Cleared JWT Token after Unsuccessful Login Establishment");

                await Store.clear();

                Handler.cancel(JSON.stringify({Response, Error}, null, 4));
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
    // let $ = false;
    const Return = {
        Data: null,
        Loading: true,
        Error: false,
        Status: {
            Code: -1,
            Message: ""
        }
    };

          (Debug) ? console.log("[Trace] Submitting Authentication Payload", Payload)
            : console.debug("[Trace] Submitting Authentication Payload ...");

        const $ = async () => await Request.post(Authorizer, {
            Grant: "Password",
            Username: Payload.Username,
            Password: Payload.Password
        }, {
            cancelToken: Handler.token
        }).then((Data) => {
            // $ = true;

            console.debug("[Debug] Response Data", Data);
            console.debug("[Debug] JWT Authorization Data", Data.data);
            console.debug("[Debug] JWT Authorization Return Headers", Data.headers);

            // Return.Loading = false;

            Return.Error = false;
            Return.Data = {
                Payload: Data.data,
                Headers: Data.headers,
                Status: {
                    Code: Data.status,
                    Message: Data.statusText
                }
            };

            Return.Status.Code = Data.status;
            Return.Status.Message = Data.statusText;

            try {
                console.trace("[Trace] Authentication Object", Return);
                console.debug("[Debug]", "JWT Token (Pre-Storage Setter)", Return.Data.Payload["JWT"]);

                return Store.setItem(STORE, Return.Data.Payload["JWT"], (e, value) => {
                    if (e) console.error("[Fatal Error] Unknown Exception", e);
                    console.debug("[Debug]", "Established JWT Token in Storage", value);
                });
            } catch (error) {
                console.debug("[Warning] Unsuccessfully Established JWT Token", error);
                Return.Error = error;
                // Handler.cancel(JSON.stringify({Return, error}, null, 4));

                return Store.clear();
            }
            // });
            // }).catch(async (Error) => {
            //     $ = true;
            //
            //     Return.Loading = false;
            //     Return.Error = Error;
            //     Return.Data = null;
            //
            //     Return.Status.Code = 401;
            //     Return.Status.Message = Error;
            //
            //     console.warn("[Warning] Cleared JWT Token after Unsuccessful Login Establishment");
            //
            //     await Store.clear();
            //
            //     Handler.cancel(JSON.stringify(Error, null, 4));
            // }).finally(() => Return.Loading = false);
            // else {
            //     $ = true
            //
            //     Return.Loading = false;
            // }
        }).finally(() => Return.Loading = false);

    console.debug("[Debug]", "Initializing Authorization Awaitable ...");

    await $();

    console.debug("[Debug]", "Awaitable Complete", "Session Storage Awaitable(s) ?:= Complete")

    return Return;
};

/***
 *
 * @param Handler {CancelTokenSource}
 *
 * @returns {Promise<{Loading: boolean, Content: null, Error: boolean}>}
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
