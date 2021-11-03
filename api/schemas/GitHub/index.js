import { default as Organization } from "./Generator/Organization.js";

export default {
    Organization: async () => JSON.parse(await Organization())
};
