import * as Styles from "./SCSS/Index.module.scss";

import {
    Grid, Column, Loading
} from "@carbon/react";

import React, {
    lazy as Import,
    lazy, Suspense, useEffect, useState
} from "react";

import {default as Waiter} from "./../../components/Loader";
import Loader from "./../../components/Loader";

const Component = ({description}) => {
    const timeout = 1500;

    const Page = Import(() => import("./Page").then((Module) => Module));

    return (
        <Grid className={Styles.component}>
            <Column lg={16} md={8} sm={4}>
                <Suspense fallback={(<Loader description={description} timeout={timeout}/>)}>
                    <Waiter description={description} timeout={timeout}>
                        <Page/>
                    </Waiter>
                </Suspense>
            </Column>
        </Grid>
    );
};

export default Component;
