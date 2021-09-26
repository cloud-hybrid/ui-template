import { default as Types } from "prop-types";

import React from "react";

import {
    InlineLoading,
    Content
} from "@carbon/react";

const Fallback = ({ Loader = false }) => (
    <Content children={(
            (Loader) ? (<InlineLoading status={ "active" } style={ { marginTop: "1.0rem", marginLeft: "2.5rem" } } />)
                : (<InlineLoading status={ "active" } style={ { marginTop: "1.0rem", display: "none" } } />)
        )}
    />
);

Fallback.propTypes = {
    Loader: Types.bool
};

export default Fallback;
