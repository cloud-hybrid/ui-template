import React from "react";

import styles from "./SCSS/Paginator.module.scss";

import {
    Pagination,
    PaginationSkeleton
} from "@carbon/react";

import { default as Style } from "./../../utilities/Styles";

const Name = Style(styles).Name.Unique;

export const Skeleton = () => {
    return (
        <PaginationSkeleton className={ Name }/>
    );
};

const Component = ({Pages}) => {
    return (
        <Pagination
            className={ Name }
            backwardText="Previous"
            forwardText="Next"
            itemsPerPageText="Total Paged Items"
            pageNumberText="Page Number"
            pageSize={ Pages.Size }
            /// pageSizes={ [5, 10, 15, 25, 50, 100, 1000] }
            pageSizes={[20]}
            totalItems={ Pages.Total }
            page={ Pages.Index.Data }
            onChange={ (Data) => Pages.Index.Setter(Data.page) }
    />);
};

export default Component;
