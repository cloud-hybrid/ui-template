import React, { lazy as Import, Suspense } from "react";

import {
    ToastNotification,
    unstable_useFeatureFlag
} from "carbon-components-react";

const Page = () => {
    const Awaitable = Import(() => import("./Awaitable.js"));

    // unstable_useFeatureFlag("enable-v11-release");

    return (
        <Suspense fallback={<></>}>
            <Awaitable Evaluation={"Content"}/>
        </Suspense>
    );
};

export default Page;
