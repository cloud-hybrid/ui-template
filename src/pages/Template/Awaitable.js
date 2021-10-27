import { default as Types } from "prop-types";

import React, { useState, useEffect } from "react";

import { SkeletonPlaceholder } from "@carbon/react";

import * as Query from "./Query";

const Component = ({ Evaluation }) => {
    const [awaiting, setAwaiting] = useState(false);

    const Handler = Query.State(setAwaiting);

    useEffect(() => {
        switch (awaiting) {
            case true:
                return () => setAwaiting(false);
            case false:
                return () => setAwaiting(true);
            default:
                return () => setAwaiting(null);
        }
    }, []);

    const Awaitable = () => {
        return (<p>{ Evaluation }</p>);
    };

    return (Handler.Waiter && Handler.Waiter !== false || awaiting === true)
        ? (<SkeletonPlaceholder/>) : (<Awaitable/>);

};

Component.propTypes = {
    Evaluation: Types.string
};

export default Component;
