import React, { lazy as Import, Suspense } from "react";

const Page = ({Authorizer}) => {
    const Awaitable = Import(() => import("./Form").then((Module) => Module));

    return (
        <Suspense fallback={<></>}>
            <Awaitable Authorizer={Authorizer}/>
        </Suspense>
    );
};

export default Page;
