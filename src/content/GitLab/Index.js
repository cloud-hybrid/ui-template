import * as Styles from "./SCSS/Index.module.scss";

import {
    Grid, Column
} from "@carbon/react";

import React, {
    lazy, Suspense
} from "react";

const Page = lazy(() => import("./Page").then((Module) => Module));

const Default = () => {
    return (
        <Grid className={ Styles["repo-page-gitlab"] }>
            <Column lg={ 16 } md={ 8 } sm={ 4 } className={ Styles["repo-page-gitlab"] }>
                <Suspense fallback={ (<></>) }>
                    <Page/>
                </Suspense>
            </Column>
        </Grid>
    );
};

export default Default;
