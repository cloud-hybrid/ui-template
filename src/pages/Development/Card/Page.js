import React, { lazy as Import, Suspense } from "react";
import {
    Grid, Row, Column
} from "@carbon/react";

const Page = () => {
    const Awaitable = Import(() => import("./Content.js"));

    return (
        <Suspense fallback={ null }>
            <Awaitable/>
        </Suspense>
    );
};

export default Page;
