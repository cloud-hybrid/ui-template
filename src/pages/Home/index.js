import * as Styles from "./SCSS/Index.module.scss";

import {
    Grid, Column
} from "@carbon/react";

import React, {
    Suspense, lazy as Import
} from "react";

const Default = () => {
    const Page = Import(() => import("./Page").then((Module) => Module));

    return (
        <Grid className={ [Styles["home-page"], Styles.component].join(" ")}>
            <Column lg={ 16 } md={ 8 } sm={ 4 } className={ Styles["home-page"] }>
                <Suspense fallback={ (<></>) }>
                    <Page/>
                </Suspense>
            </Column>
        </Grid>
    );
};

export default Default;
