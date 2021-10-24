import React, { lazy as Import, Suspense } from "react";

const Page = ({Target, Authorizer}) => {
    const Awaitable = Import(() => import("./Awaitable.js").then((Module) => Module));

    return (
        <Suspense fallback={<></>}>
            <Awaitable Target={Target} Authorizer={Authorizer}/>
        </Suspense>
    );
};

export default Page;
