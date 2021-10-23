import React, { lazy as Import, Suspense } from "react";

const Page = () => {
    const Awaitable = Import(() => import("./Awaitable.js").then((Module) => Module));

    return (
        <Suspense fallback={<></>}>
            <Awaitable/>
        </Suspense>
    );
};

export default Page;
