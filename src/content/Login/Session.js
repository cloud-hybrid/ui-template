const Request = require("axios");
const Forage = require("localforage");

const STORE = "JWT";
const NAME = "Nexus-UI";
const DESCRIPTION = "Nexus Dashboard Login State";

const Store = Forage.createInstance({
    name: NAME,
    storeName: STORE,
    description: DESCRIPTION,
    driver: Forage.INDEXEDDB
});

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

export const Responses = {
    Buffer: "arraybuffer",
    Binary: "blob",
    DOM: "document",
    JSON: "json",
    Text: "text",
    Stream: "stream"
};

export const Endpoint = process.env.REACT_APP_API_ENDPOINT;

export default Store;

export const Configuration = {
    url: null,
    method: null,
    headers: null,
    params: null,
    data: null,
    timeout: null,
    timeoutErrorMessage: null,
    withCredentials: null,
    auth: null,
    maxContentLength: null,
    validateStatus: null
};

export const Cancellation = Request.CancelToken;

export const API = () => Request.create(Configuration);

