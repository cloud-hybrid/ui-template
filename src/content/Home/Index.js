import * as Styles from "./SCSS/Index.module.scss";

import {
    Grid, Column
} from "@carbon/react";

import React, {
    Suspense, lazy
} from "react";

const Page = lazy(() => import("./Page").then((Module) => Module));

const Default = () => {
    return (
        <Grid className={ Styles["home-page"] }>
            <Column lg={ 16 } md={ 8 } sm={ 4 } className={ Styles["home-page"] }>
                <Suspense fallback={ (<></>) }>
                    <Page/>
                </Suspense>
            </Column>
        </Grid>
    );
};

export default Default;
