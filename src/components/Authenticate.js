const Request = require("axios");
const Adapter = require("axios-cache-adapter");
const Forage = require("localforage");

const NAME = "Nexus-UI";
const DESCRIPTION = "Nexus Dashboard Login State";
export const STORE = "JWT";

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
    // clearOnStale: true,
    clearOnStale: false,
    ignoreCache: false,
    limit: false,
    // clearOnError: true,
    clearOnError: false,
    readHeaders: true,
    readOnError: true,
    maxAge: 5 * 60 * 1000,
    store: Store
});

export const API = Request.create({
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
    const Validation = {
        Data: null, // { JWT: String, Type: String ... }
        Loading: true,
        Error: false,
        Status: {
            Code: -1,
            Message: ""
        }
    };

    try {
        const $ = await API.post(Deserialize, {
            Token
        }, {
            headers: {
                "Authorization": ["Bearer", Token].join(" ")
            }, cancelToken: Handler.token
        }).then((Response) => {
            console.debug("[Debug]", "Authorization Validation Context");
            console.debug("[Debug]", "Contextual Response", Response);

            Validation.Data = Response.data;
            Validation.Error = null;

            Validation.Status.Code = Response.status;
            Validation.Status.Message = Response.statusText;

            return Store.setItem(STORE, (Validation.Data["JWT"]), (e, value) => {
                if (e) console.error("[Fatal Error] Unknown Exception", e);
                console.debug("[Debug]", "Established JWT Token in Storage", value);
            });
        }).catch((error) => {
            Validation.Data = null;
            Validation.Error = error;

            console.debug("[Debug]", "Clearing Session Storage ...");

            return Store.clear((e) => {
                if (e) console.error("[Fatal Error] Unknown Exception", e);
                console.debug("[Debug]", "Removed Stale JWT Token(s) from Storage");
            });
        });

        await $;

        console.debug("[Debug]", "Awaitable Complete", "Session Storage Awaitable(s) ?:= Complete")
    }

    catch (e) {
        console.error("[Fatal Error (2)]", "@Unknown, Uncaught Error", e);

        Handler.cancel("Invalid JWT Token or Response");
    }

    finally {
        Validation.Loading = false;
    }

    return Validation;
};

export const Token = async (Handler) => {
    console.debug("[Debug]", "Retrieving JWT Token from Storage ...");
    const Schema = await Store.getItem(STORE);
    console.debug("[Debug]", "JWT", Schema);

    if (Schema !== null) {
        return await Validate(Schema, Handler);
    } else {
        return null;
    }
};

export const JWT = async () => {
    return await Store.getItem(STORE);
}
