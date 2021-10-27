import React, { lazy as Import, Suspense } from "react";

const Page = () => {
    const Awaitable = Import(() => import("./Awaitable.js"));

    return (
        <Suspense fallback={<></>}>
            <Awaitable Evaluation={"..."}/>
        </Suspense>
    );
};

export default Page;
