import { default as Projects } from "./Generator/Projects.js";

export default {
    Project: JSON.parse(await Projects())
};
