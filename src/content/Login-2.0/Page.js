import React, { lazy as Import, Suspense } from "react";

const Page = ({Authorizer}) => {
    const Awaitable = Import(() => import("./Awaitable.js").then((Module) => Module));

    return (
        <Suspense fallback={<></>}>
            <Awaitable Authorizer={Authorizer}/>
        </Suspense>
    );
};

export default Page;
