// import { Redirect, Route } from "react-router-dom";
// import { default as Skeleton } from "../Page-Loader";
// import {useEffect, useState} from "react";
//
// const Request = require("axios");
// const Forage = require("localforage");
//
// const STORE = "JWT";
// const NAME = "Nexus-UI";
// const DESCRIPTION = "Nexus Dashboard Login State";
//
// const Debug = (process.env["NODE_ENV"] !== "production");
//
// const URL = process.env.REACT_APP_API_ENDPOINT;
//
// /***
//  * API Validation Endpoint
//  *
//  * @type {string}
//  *
//  */
//
// const Deserialize = URL + "/API/Authentication/Deserialized";
//
// /***
//  * API Basic Authentication Endpoint + JWT Generator
//  *
//  * The following URL -- upon successful authentication -- will return a newly
//  * generated JWT authorization token.
//  *
//  * @type {string}
//  *
//  */
//
// const Authorizer = URL + "/API/Authentication/Guarantee";
//
// /***
//  * HTTP Request Cancellation Handler
//  *
//  * Without the following cancellation token, React-based front-ends will warn
//  * against memory leaks; additionally, the cancellation token is used to avoid
//  * difficult to debug errors and endless request loops.
//  *
//  * @type {function(): CancelTokenSource}
//  *
//  */
//
// export const Cancellation = () => Request.CancelToken.source();
//
// /***
//  * Browser Storage API
//  *
//  * @type {LocalForage}
//  *
//  */
//
// export const Store = Forage.createInstance({
//     name: NAME,
//     storeName: STORE,
//     description: DESCRIPTION
// });
//
// /***
//  *
//  * Axios-based Object Interface w/Cache + Adapter
//  *
//  * @type {AxiosInstance}
//  *
//  */
//
// const API = Request.create({
//     adapter: Cache.adapter
// });
//
// export const Gateway = ({Authorization, Components, ... Properties}) => {
//     return (
//         <Route {...Properties} render={({location}) =>
//             (Authorization)
//                 ? (Components)
//                 : (
//                     <Redirect
//                         to={{
//                             pathname: "/login",
//                             state: {from: location},
//                             push: true
//                         }}
//                     />
//                 )
//         }/>
//     );
// };
//
// /***
//  *
//  * JWT Validation Function
//  *
//  * @param Token {null|{JWT: String, Type: null|String}}
//  * @param Handler {CancelTokenSource}
//  *
//  * @returns {Promise<{Loading: boolean, Error: boolean, Data: {Status: Number, $: null, Headers: null}}>}
//  *
//  * @constructor
//  *
//  */
//
// export const Validate = async (Token, Handler) => {
//     const Validation = {
//         Data: {
//             $: null,
//             Status: null,
//             Headers: null
//         },
//         Loading: false,
//         Error: false
//     };
//
//     try {
//         Validation.Loading = true;
//
//         if (Token !== null && Token.Type === "Bearer") {
//             const JWT = Token.JWT;
//             await API.post(Deserialize, {
//                 Token
//             }, {
//                 headers: {
//                     "Authorization": JWT
//                 }, cancelToken: Handler.token,
//                 responseType: "json"
//             }).then(async (Response) => {
//                 console.debug("[Debug] JWT Authorization Request", Response);
//
//                 Validation.Loading = false;
//                 Validation.Data = {
//                     $: Response.data,
//                     Status: Response.status,
//                     Headers: Response.headers
//                 };
//                 Validation.Error = null;
//
//                 await Store.setItem(STORE, Response.data);
//             }).catch((Error) => {
//                 Validation.Loading = false;
//                 Validation.Data = null;
//                 Validation.Error = Error;
//
//                 console.debug("[Error]", Validation);
//
//                 Handler.cancel(JSON.stringify({...{Task: "... @Task Login.js"}, ...Validation}, null, 4));
//
//                 (async () => await Store.clear())().then(() => console
//                     .debug("[Informational] Cleared JWT Token")
//                 );
//             }).finally(() => Validation.Loading = false);
//         } else {
//             Handler.cancel("... @Task Login.js");
//
//             Response.Loading = false;
//         }
//     } catch (Error) {
//         console.debug("[Warning] JWT Validation", Error);
//
//         Handler.cancel(JSON.stringify({Validation, Error}, null, 4));
//     }
//
//     return Validation;
// };
//
// /***
//  *
//  * Authentication Entry Point
//  *
//  * @param Payload {{Username: null|String, Password: null|String}}
//  * @param Handler {CancelTokenSource}
//  *
//  * @returns {Promise<null|{Loading: boolean, Data: AxiosResponse, Error: boolean}>}
//  *
//  * @constructor
//  *
//  */
//
// export const Authenticate = async (Payload, Handler, Authorization) => {
//     let $ = false;
//     const Response = {
//         Data: null,
//         Loading: false,
//         Error: false
//     };
//
//     if (Payload.Username === null || Payload.Password === null) {
//         console.warn("[Warning] Authentication Payload Username || Password :== null");
//
//         return null;
//     }
//
//     try {
//         Response.Loading = true;
//
//         (Debug) ? console.log("[Trace]", Payload) : console.debug("[Trace] Submitting Authentication Payload ...");
//
//         if ($ === false)
//             Response.Request = await API.post(Authorizer, {
//                 Grant: "Password",
//                 Username: Payload.Username,
//                 Password: Payload.Password
//             }, {
//                 cancelToken: Handler.token,
//                 responseType: "json"
//             }).then(async (Data) => {
//                 console.debug("[Debug] Authentication Authorization Request", Data);
//
//                 Response.Loading = false;
//                 Response.Data = Data;
//                 Response.Error = null;
//
//                 await Store.setItem(STORE, Data.data);
//
//                 Authorization[1](true);
//             }).catch(async (Error) => {
//                 Response.Loading = false;
//                 Response.Data = null;
//                 Response.Error = Error;
//
//                 console.debug("[Error]", Response);
//
//                 await Store.clear();
//
//                 console.debug("[Warning] Cleared JWT Token");
//
//                 $ = true;
//             }).finally(() => Response.Loading = false);
//         else {
//             $ = true
//
//             Response.Loading = false;
//         }
//     } catch (Error) {
//         $ = true;
//
//         console.debug("[Warning] JWT Validation", Error);
//
//         Handler.cancel(JSON.stringify({Response, Error}, null, 4));
//     }
//
//     return Response;
// };
//
// /***
//  *
//  * @param Handler {CancelTokenSource}
//  *
//  * @returns {Promise<{Loading: boolean, Error: boolean, Data: {Status: Number, $: null, Headers: null}}>}
//  *
//  * @constructor
//  *
//  */
//
// export const Token = async () => {
//     const Schema = await Store.getItem(STORE);
//     return await Validate(Schema, Handler);
// };
//
// /***
//  *
//  * JWT Getter
//  *
//  * @returns {Promise<{JWT: String, Type: String} | null>}
//  *
//  * @constructor
//  *
//  */
//
// export const JWT = async () => {
//     return await Store.getItem(STORE);
// }
//

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

const API = Request.create({
    adapter: Cache.adapter,
    cache: Cache
});

const Validate = async (Token, Handler) => {
    const Validation = {
        Content: null,
        Loading: false,
        Error: false,
        Transmission: false
    };

    try {
        Validation.Loading = true;

        if (Token !== null && Token.Type === "Bearer") {
            const JWT = Token.JWT;

            if (Validation.Transmission === false)
                Validation.Request = await API.post(Deserialize, {
                    Token
                }, {
                    headers: {
                        "Authorization": JWT
                    }, cancelToken: Handler.token,
                    responseType: "json"
                }).then((Data) => {
                    console.debug("[Debug] JWT Authorization Request", Data);

                    Validation.Transmission = true;
                    Validation.Content = Data;
                    Validation.Error = null;
                }).catch((Error) => {
                    Validation.Transmission = true;
                    Validation.Content = false;
                    Validation.Error = Error;

                    console.debug("[Error]", Validation);

                    (async () => await Store.clear())().then(() => console
                        .debug("[Informational] Cleared JWT Token")
                    );
                }).finally(() => Validation.Loading = false);
        }
    } catch (Error) {
        console.debug("[Warning] JWT Validation", Error);
    }

    switch (Validation.Loading) {
        case false:
            return Validation;
        default:
            return null;
    }
};

export const Token = async (Handler) => {
    const Schema = await Store.getItem(STORE);
    return await Validate(Schema, Handler);
};

export const JWT = async () => {
    return await Store.getItem(STORE);
}
