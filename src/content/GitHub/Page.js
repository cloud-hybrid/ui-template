import React, { useState, useMemo, useEffect } from "react";

import { default as Table } from "./Table";

import {
    Link,
    DataTableSkeleton,
    Pagination,
    Grid,
    Column
} from "@carbon/react";

const headers = [
    {
        key: "name",
        header: "Name"
    },
    {
        key: "createdAt",
        header: "Created"
    },
    {
        key: "updatedAt",
        header: "Updated"
    },
    {
        key: "issueCount",
        header: "Open Issues"
    },
    {
        key: "stars",
        header: "Stars"
    },
    {
        key: "links",
        header: "Links"
    }
];

const LinkList = ({ url, homepageUrl }) => (
    <ul style={ { display: "flex" } }>
        <li>
            <Link href={ url }>GitHub</Link>
        </li>
        { homepageUrl && (
            <li>
                <span>&nbsp;|&nbsp;</span>
                <Link href={ homepageUrl }>Homepage</Link>
            </li>
        ) }
    </ul>
);

const generateData = () => {
    const repositories = [];

    for (let i = 0; i <= 200; i++) {
        repositories[i] = {
            id: String(i),
            name: "Test",
            stargazers: [
                null,
                null,
                null
            ],
            issues: [
                null
            ],
            createdAt: new Date().getDate(),
            updatedAt: new Date().getDate(),
            url: "https://localhost",
            homepageUrl: "https://github.com/cloud-hybrid"
        };
    }

    return repositories;
}

const getRowItems = (rows) => {
    return rows.map(
        (row) => ({
            ...row,
            key: row.id,
            stars: row.stargazers.length,
            issueCount: row.issues.length,
            createdAt: new Date(row.createdAt).toLocaleDateString(),
            updatedAt: new Date(row.updatedAt).toLocaleDateString(),
            links: <LinkList url={ row.url } homepageUrl={ row.homepageUrl } />
        })
    );
};

const Skeleton = () => {
    return (
        <Grid className="repo-page">
            <Column lg={ 16 } md={ 8 } sm={ 4 } className="repo-page__r1">
                <DataTableSkeleton
                    columnCount={ headers.length + 1 }
                    rowCount={ 10 }
                    headers={ headers }
                />
            </Column>
        </Grid>
    );
}

const Page = () => {
    const [firstRowIndex, setFirstRowIndex] = useState(0);
    const [currentPageSize, setCurrentPageSize] = useState(10);

    const Data = useMemo(() => generateData(), []);

    const [awaiting, setAwaiting] = useState(true);

    useEffect(() => {
        async function Await() {
            const Waiter = new Promise((_) => setTimeout(
                (_) => {
                    console.debug("Updating Await := false");
                    setAwaiting(false);
                },
                1500
            ));

            await Waiter;
            Waiter.resolve();
        }

        Await().then((_) => {
            /// ... console.log("...");
        });

        return () => {
            setAwaiting(null);
        }
    }, []);

    if (awaiting === true) return (<Skeleton />)
    else {
        const rows = getRowItems(Data);

        return (
            <Grid className="repo-page">
                <Column lg={ 16 } md={ 8 } sm={ 4 } className="repo-page__r1">
                    <Table
                        headers={ headers }
                        rows={ rows.slice(firstRowIndex, firstRowIndex + currentPageSize) }
                    />
                    <Pagination
                        totalItems={ Data.length }
                        backwardText="Previous page"
                        forwardText="Next page"
                        pageSize={ currentPageSize }
                        pageSizes={ [5, 10, 15, 25] }
                        itemsPerPageText="Items per page"
                        onChange={ ({ page, pageSize }) => {
                            if (pageSize !== currentPageSize) {
                                setCurrentPageSize(pageSize);
                            }
                            setFirstRowIndex(pageSize * (page - 1));
                        } }
                    />
                </Column>
            </Grid>
        );
    }
}

export default Page;
