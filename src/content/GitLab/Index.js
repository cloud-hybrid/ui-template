import * as Styles from "./SCSS/Index.module.scss";

import {
    Column,
    Grid
} from "@carbon/react";

import React, {
    Suspense,
    lazy
} from "react";

import { Simulation } from "./../../components/Breadcrumb/Index";

/// ... const Breadcrumb = lazy(() => import("./../../components/Breadcrumb/Index").then((Module) => Module));
const Page = lazy(() => import("./Page").then((Module) => Module));

const Default = () => {
    return (
        <Grid className={ Styles["repo-page-gitlab"] }>
            <Simulation/>
            <Column lg={ 16 } md={ 8 } sm={ 4 } className={ Styles["repo-page-gitlab"] }>
                <Suspense fallback={ (<></>) }>
                    <Page/>
                </Suspense>
            </Column>
        </Grid>
    );
};

export default Default;
