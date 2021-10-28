import React, {
    useState,
    useEffect
} from "react";

import * as Activity from "./SCSS/Activity.module.scss";

import { default as API } from "./Query";

import Skeleton from "./Skeleton";

import {
    Tag as Visibility
} from "@carbon/react";

import { default as Tabular } from "./Table";

const Component = () => {
    const [rows, setRows] = useState(20);
    const [page, setPage] = useState(1);
    const [awaiting, setAwaiting] = useState(true);

    useEffect(() => {
        async function Await() {
            const Waiter = new Promise((_) => setTimeout(
                (_) => {
                    console.debug("Updating Await := false");
                    setAwaiting(false);
                }
            ), 1500);

            await Waiter;
        }

        Await().finally(() => {
            /* ... */
        });
    }, []);

    const Handler = API.Awaitable();

    const Headers = [ // Total = 8
        {
            key: "ID",
            header: "ID",
            sortable: false,
            value: "ID"
        },
        {
            key: "Name",
            header: "Name",
            sortable: false,
            value: "Name"
        },
        {
            key: "Activity",
            header: "Activity",
            sortable: false,
            value: "Activity"
        },
        {
            key: "Visibility",
            header: "Visibility",
            sortable: false,
            value: "Visibility"
        },
        {
            key: "URL",
            header: "URL",
            sortable: false,
            value: "URL"
        },
        {
            key: "Description",
            header: "Description",
            sortable: false,
            value: "Description"
        },

        {
            key: "Git-HTTP-URL",
            header: "Git-HTTP-URL",
            sortable: false,
            value: "URL"
        }
    ];

    const Pages = {
        Rows: {
            Data: rows,
            Setter: (value) => setRows(value)
        }, Total: (Handler.Total > rows) ? Handler.Total - rows: rows,
        Index: {
            Data: page,
            Setter: (value) => setPage(value)
        }, Size: rows,
        Sizes: [rows]
    };

    const Awaitable = () => {
        if (awaiting === true) {
            return Component();
        }

        const Data = (Handler && Handler.Response && Handler.Response[page] !== null) ? new Array(
                Handler.Response[page])
            : new Array(0);

        return (<Tabular Headers={ Headers } Data={ Data.pop() } State={ setAwaiting } Pages={ Pages }/>);
    };

    return (Handler.Waiter === false) ? (<Awaitable/>): (<Skeleton/>);
};

export default Component;
