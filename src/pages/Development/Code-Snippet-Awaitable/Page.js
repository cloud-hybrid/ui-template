import React, { lazy as Import, Suspense } from "react";

const Page = () => {
    const Awaitable = Import(() => import("./Content.js"));

    return (
        <Suspense fallback={ null }>
            <Awaitable/>
        </Suspense>
    );
};

export default Page;
