import PropTypes from "prop-types";

import React, {
    useEffect, useState
} from "react";

import {
    InlineLoading
} from "@carbon/react"

export const Loader = ({description}) => (
    <InlineLoading description={description} iconDescription={"Loading Indicator"}/>
);

/***
 *
 * @param children {JSX.Element}
 * @param description {String}
 * @param timeout {Number}
 *
 * @returns {JSX.Element}
 *
 * @constructor
 *
 */

const Component = ({children, description, timeout}) => {
    const $ = () => children;

    const [awaiting, setAwaiting] = useState(null);

    useEffect(() => {
        let $ = setTimeout(() => setAwaiting(false), timeout);

        return () => {
            clearTimeout($)
        };

        /***
         * useEffect will run only once with an empty [];
         * if there are value(s) associated inside the dependencies
         * array, then clearTimeout will run every time any attribute
         * or value changes.
         */
    }, []);

    return (awaiting === false) ? (<$/>) : (<Loader description={description}/>);
};

Component.propTypes = {
    /***
     * Target render component that replaces the loading component upon timout
     */

    children: PropTypes.element,

    /***
     * String describing the waiting event; description is displayed as text
     * inline to the loading component
     */

    description: PropTypes.string.isRequired,

    /***
     * Total timeout (ms) before children component renders and replaces the loading
     * component
     */

    timeout: PropTypes.number.isRequired
};

export default Component;
