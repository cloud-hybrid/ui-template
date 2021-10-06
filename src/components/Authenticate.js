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
