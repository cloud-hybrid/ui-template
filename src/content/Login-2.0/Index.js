import {
    Grid, Column
} from "@carbon/react";

import React, {
    lazy as Import, Suspense
} from "react";

const Default = () => {
    const Page = Import(() => import("./Page").then((Module) => Module));

    return (
        <Grid>
            <Column lg={16} md={8} sm={4}>
                <Suspense fallback={(<></>)}>
                    <Page/>
                </Suspense>
            </Column>
        </Grid>
    );
};

export default Default;
