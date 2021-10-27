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

const Component = ({Data, currentPageSize, setCurrentPageSize, setFirstRowIndex}) => {
    return (
        <Pagination
            className={ Name }
            totalItems={ Data.length }
            backwardText="Previous Page"
            forwardText="Next Page"
            pageSize={ currentPageSize }
            pageSizes={ [5, 10, 15, 25, 50, 100, 1000] }
            itemsPerPageText="Total Page Item(s)"
            onChange={ ({ page, pageSize }) => {
                if (pageSize !== currentPageSize) {
                    setCurrentPageSize(pageSize);
                }
                setFirstRowIndex(pageSize * (page - 1));
            } }
        />
    )
};

export default Component;
