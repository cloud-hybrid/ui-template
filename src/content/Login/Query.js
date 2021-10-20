import React, {useEffect, useState} from "react";

const Request = require("axios");
const Adapter = require("axios-cache-adapter");
const Forage = require("localforage");

const STORE = "JWT";
const NAME = "Nexus-UI";
const DESCRIPTION = "Nexus Dashboard Login State";

export const Cancellation = () => Request.CancelToken.source();

const Store = Forage.createInstance({
    name: NAME,
    storeName: STORE,
    description: DESCRIPTION,
    driver: Forage.INDEXEDDB
});

const Cache = Adapter.setupCache({
    excludeFromCache: false, // --> Debugging
    debug: (process.env.NODE_ENV !== "production"),
    clearOnStale: true,
    ignoreCache: true,
    limit: false,
    clearOnError: true,
    readHeaders: true,
    readOnError: true,
    maxAge: 5 * 60 * 1000,
    store: Store
});

const API = Request.create({
    adapter: Cache.adapter,
    cache: Cache,
    cancelToken: Cancellation.token
});

export const Responses = {
    Buffer: "arraybuffer",
    Binary: "blob",
    DOM: "document",
    JSON: "json",
    Text: "text",
    Stream: "stream"
};

export const Methods = [
    "get", "GET",
    "delete", "DELETE",
    "head", "HEAD",
    "options", "OPTIONS",
    "post", "POST",
    "put", "PUT",
    "patch", "PATCH",
    "purge", "PURGE",
    "link", "LINK",
    "unlink", "UNLINK"
];

class Base extends Object {
    static URL = null;
    static Store = null;
    static Cache = null;

    static API = null;

    static Request = () => null;
    static Awaitable = () => null;
};

export class AIO extends Base {
    static URL = process.env.REACT_APP_API_ENDPOINT;
    static Endpoint = AIO.URL + "/API/Authentication/Guarantee";
    static Validate = AIO.URL + "/API/Authentication/Deserialized";

    static Update = async (JWT, Type) => {
        const Object = {JWT, Type};

        await Store.setItem(STORE, Object);

        return Object;
    }

    static Deserialize = (Token, Handler) => {
        return (Token.Type === "Bearer") ? () => {
            const JWT = Token.JWT;

            console.debug("[Debug] Bearer Validation", JWT);

            API.post(AIO.Validate, {
                Token
            }, {
                headers: {
                    "Authorization": JWT
                }, cancelToken: Handler.token
            }).then((Data) => {
                return Data;
            });
        } : () => {
            return null;
        };
    }

    static Validation = (Result, Handler) => {
        if (Result && Result.loading !== null && Result.status === 200) {
            const Data = Result.data;

            const JWT = Data.JWT;
            const Type = Data.Type;

            console.debug("[Debug] Authentication Data", Data, JWT, Type);

            AIO.Update(JWT, Type).then(
                (Response) => AIO.Deserialize(
                    Response,
                    Handler
                ));
        }

        return null;
    }

    static Request = (Username, Password, Handler) => {
        const Query = (Token) => {
            const [data, setData] = useState({});
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState(null);

            useEffect(() => {
                setLoading(true);

                let ignore = false;

                const Fetch = async () => {
                    try {
                        setError({});

                        const Awaitable = {Value: null};

                        const Handler = async () => {
                            if (Awaitable.Value !== null) {
                                // Perform Back-End Validation(s)

                                const Response = () => API.post(AIO.Endpoint, {
                                    Grant: "Password",
                                    Username: Username,
                                    Password: Password
                                }, {
                                    cancelToken: Token.token
                                }).catch(async (Error) => await Store.clear()
                                    .then(() => {
                                        if (ignore === false) console.debug("[Debug] Await Handler", "Cache Cleared");
                                    }).finally(() => {
                                        ignore = true;
                                        return null;
                                    })
                                ).then((Data) => {
                                    Awaitable.Value = Data;
                                    return Data;
                                });

                                await Response().then((Data) => {
                                    Awaitable.Value = Data;
                                }); // .catch((_, error) => {});

                                await Store.setItem(STORE, Awaitable.Value);

                                console.debug("[Debug] Await Handler", Awaitable.Value);
                            }
                        };

                        const Update = () => async (Value) => await Store.setItem(STORE, Value);

                        await Handler().then(async () => {
                            if (ignore === false) {
                                API.post(AIO.Endpoint, {
                                        Grant: "Password",
                                        Username: Username,
                                        Password: Password
                                    }, { cancelToken: Token.token }
                                ).catch((error) => (
                                    (!ignore) ? console.debug(
                                        "[DEBUG]", "API", "Login", "Error", error)
                                        : null)
                                ).then((Data) => {
                                    const Collection = Data;
                                    Update(Collection);

                                    if (!ignore) setData(Collection);
                                }).then(() => setLoading(false)).finally(
                                    () => {
                                        console.debug("[DEBUG]", "Query Awaitable Complete");
                                    }
                                );
                            }
                        });
                    } catch (error) {
                        console.debug("[Warning] Fetch", error);
                        await Store.clear();
                        console.debug("[DEBUG]", "Cache", "JWT", "Cleared");
                    }
                };

                Fetch().then().finally();

                return (() => {
                    ignore = true;
                });
            }, [URL]);
            return {data, loading, error};
        };
        return Query(Handler);
    };

    static Clear = async () => {
        await Store.clear();
    }

    static Awaitable = (Username, Password, Handler) => {
        const {data, loading, error} = AIO.Request(Username, Password, Handler);

        console.debug("[Debug] Awaitable Data", data);

        const Validation = async () => await AIO.Validation(data, Handler);

        return {
            Response: data,
            Waiter: loading,
            Error: error,
            Validation: Validation()
        };
    };
};

export default AIO;

export const State = AIO.Awaitable;
