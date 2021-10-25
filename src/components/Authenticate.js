const Request = require("axios");
const Adapter = require("axios-cache-adapter");
const Forage = require("localforage");

const STORE = "JWT";
const NAME = "Nexus-UI";
const DESCRIPTION = "Nexus Dashboard Login State";

const URL = process.env.REACT_APP_API_ENDPOINT;
const Deserialize = URL + "/API/Authentication/Deserialized";

export const Cancellation = Request.CancelToken;

export const Store = Forage.createInstance({
    name: NAME,
    storeName: STORE,
    description: DESCRIPTION,
    driver: Forage.INDEXEDDB
});

const Cache = Adapter.setupCache({
    debug: false, /// (process.env.NODE_ENV !== "production"),
    clearOnStale: true,
    ignoreCache: false,
    limit: false,
    clearOnError: true,
    readHeaders: true,
    readOnError: true,
    maxAge: 5 * 60 * 1000,
    store: Store
});

const API = Request.create({
    adapter: Cache.adapter,
    cache: Cache
});

/***
 *
 * @param Token
 * @param Handler
 *
 * @returns {Promise<{Status: {Message: string, Code: number}, Loading: boolean, Error: boolean, Data: null}>}
 *
 * @constructor
 */
const Validate = async (Token, Handler) => {
    let $ = false;
    const Validation = {
        Data: null,
        Loading: false,
        Error: false,
        Status: {
            Code: -1,
            Message: ""
        }
    };

    try {
        Validation.Loading = true;

        if ($ === false) {
            if (Token !== null) {
                await API.post(Deserialize, {
                    Token
                }, {
                    headers: {
                        "Authorization": Token
                    }, cancelToken: Handler.token
                }).then((Response) => {
                    $ = true;

                    Validation.Data = Response.data;
                    Validation.Loading = false;
                    Validation.Error = null;

                    Validation.Status.Code = Response.status;
                    Validation.Status.Message = Response.statusText;
                }).catch(async (error) => {
                    $ = true;

                    Validation.Data = null;
                    Validation.Loading = false;
                    Validation.Error = error;

                    console.error("[Error]", error, Validation);

                    await Store.clear();

                    Handler.cancel(JSON.stringify({Response, Error}, null, 4));
                }).finally(() => Validation.Loading = false);
            }
        } else {
            $ = true

            Validation.Loading = false;

            console.warn("[Warning] JWT Validation", "JWT !:= null" + " " + JSON.stringify(Validation));

            Handler.cancel("[Warning] JWT Validation", "JWT !:= null" + " " + JSON.stringify(Validation));
        }
    } catch (Error) {
        $ = true;

        console.error("[Error] JWT Validation Error", Error);

        Handler.cancel(JSON.stringify({Response, Error}, null, 4));
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
 * @returns {Promise<null|{Loading: boolean, Data: AxiosResponse, Error: boolean}>}
 *
 * @constructor
 *
*/

export const Authenticate = async (Payload, Handler, Authorization) => {
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

        console.log("[Trace]", Payload);

        if ($ === false)
            Response.Request = await API.post(Authorizer, {
                Grant: "Password",
                Username: Payload.Username,
                Password: Payload.Password
            }, {
                cancelToken: Handler.token,
                responseType: "json"
            }).then(async (Data) => {
                console.debug("[Debug] Authentication Authorization Request", Data);

                Response.Loading = false;
                Response.Data = Data;
                Response.Error = null;

                await Store.setItem(STORE, Data.data);

                Authorization[1](true);
            }).catch(async (Error) => {
                Response.Loading = false;
                Response.Data = null;
                Response.Error = Error;

                console.debug("[Error]", Response);

                await Store.clear();

                console.debug("[Warning] Cleared JWT Token");

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
 * @param Handler
 *
 * @returns {Promise<{Status: {Message: string, Code: number}, Loading: boolean, Error: boolean, Data: null}>}
 *
 * @constructor
 *
*/

export const Token = async (Handler) => {
    const Schema = await Store.getItem(STORE);
    return await Validate(Schema, Handler);
};

export const JWT = async () => {
    return await Store.getItem(STORE);
}
