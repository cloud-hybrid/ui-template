import { settings } from "carbon-components";
import * as Features from "@carbon/feature-flags";

settings.prefix = "cds";

Features.merge({
    "enable-css-custom-properties": true,
    "enable-use-controlled-state-with-value": true,
    "enable-css-grid": true,
    "enable-v11-release": true
});

export default settings;

export const Flags = Features.FeatureFlags;

if (process.env.NODE_ENV !== "production") console.debug({ Flags: Features.FeatureFlags });
