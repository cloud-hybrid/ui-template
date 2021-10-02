import React from "react";

import * as Properties from "prop-types";

import { Breadcrumb, BreadcrumbItem, BreadcrumbItemProps, BreadcrumbProps } from "@carbon/react";

const Component = (Attributes = { Title: "Nexus" }) => {

    const Split = Attributes.Title.split("/");

    return (
        <Breadcrumb aria-label={"Parent Navigation"} noTrailingSlash={true} style={{margin: "1.0rem"}}>
            {Split.map((Content, Index, Collection) => (
                <BreadcrumbItem style={{display: "initial"}} href={"/#/" + Content.toLowerCase()} value={-1} key={String("Breadcrumb-Item" + "-" + String(Index))} isCurrentPage={(Index === Collection.length - 1) ? true : false}>
                    {Content}
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};

Component.propTypes = {
    Title: Properties.string
};

export default Component;
