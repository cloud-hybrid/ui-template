import * as Styles from "./SCSS/Index.module.scss";

import {
    Column,
    Grid, Loading
} from "@carbon/react";

import React, {
    Suspense,
    lazy, useState, lazy as Import, useEffect
} from "react";

const Default = ({Authorizer}) => {
    const [awaiting, setAwaiting] = useState(null);

    const Page = Import(() => import("./Page").then((Module) => Module));

    useEffect(() => {
        let $ = setTimeout(() => setAwaiting(false), 3 * 1000);

        return () => {
            clearTimeout($);
        };

        /***
         * useEffect will run only once with an empty [];
         * if there are value(s) associated inside the dependencies
         * array, then clearTimeout will run every time any attribute
         * or value changes.
         */
    }, []);

    const Awaitable = () => {
        /// const Location = (Target?.state?.pathname) ? Target?.state?.pathname : "/";

        return (awaiting === false) ? (<Page/>)
            : (awaiting === true) ? (<Loading withOverlay={true} description={"Loading ..."} active={true} small={true}/>)
                : (<Loading withOverlay={true} description={"Validating ..."} active={true} small={true}/>)
        ;
    };

    return (
        <Grid>
            <Column lg={16} md={8} sm={4}>
                <Suspense fallback={(Authorizer[0] === false && awaiting === true) ? (
                    <Loading withOverlay={true} description={"Loading ..."} active={true} small={true}/>
                ) : (Authorizer[0] === true && awaiting === true) ? (
                    <Loading withOverlay={true} description={"Redirecting ..."} active={true} small={true}/>
                ) : (
                    <Loading withOverlay={true} description={"Validating ..."} active={true} small={true}/>
                )}>
                    <Awaitable/>
                </Suspense>
            </Column>
        </Grid>
    );
};

export default Default;
