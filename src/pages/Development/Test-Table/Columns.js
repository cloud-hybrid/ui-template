import React from "react";

import { Person } from "./Generator.js";

/***
 *
 * @returns {[{SubCell: (function(): null), Header: (function(): null), id: string, Cell: (function({row: *}))}, {Header: string, columns: [{SubCell: (function(*)), Header: string, accessor: (function(*): string|*)}, {Header: string, accessor: (function(*): string|*)}]}, {Header: string, columns: [{Header: string, accessor: (function(Person): string|String|*)}, {Header: string, accessor: (function(Person): *)}, {Header: string, accessor: (function(Person): string|Marital|*)}]}]}
 *
 * @constructor
 *
 */

const Columns = () => {
    return [
        {
            id: "expander", // @required
            // Cell := Expander
            Header: () => null,
                /// ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
                /// <span {...getToggleAllRowsExpandedProps()}>
                ///     {isAllRowsExpanded ? '👇' : '👉'}
                /// </span>
                /// ),
            Cell: ({ row }) => (
                // Use Cell to render an expander for each row.
                // We can use the getToggleRowExpandedProps prop-getter
                // to build the expander.
                <span { ... row.getToggleRowExpandedProps() }>
                    { row.isExpanded ? "👇" : "👉" }
                </span>
            ),
            // We can override the cell renderer with a SubCell to be used with an expanded row
            SubCell: () => null // No expander on an expanded row
        },

        {
            Header: "First Name",
            // We re-map data using accessor functions for subRows
            accessor: ($) => $.Name?.First,
            // We can render something different for subRows
            SubCell: (cellProps) => (
                <>🥳 { cellProps.value } 🎉</>
            )
        },
        {
            Header: "Last Name",
            accessor: ($) => $.Name?.Last
        },
        {
            Header: "Age",
            /*** @param $ {Person} */
            accessor: ($) => $.Age
        },
        {
            Header: "Height",
            /*** @param $ {Person} */
            accessor: ($) => $.Height
        },
        {
            Header: "Status",
            /*** @param $ {Person} */
            accessor: ($) => $.Marital
        }

//        {
//            Header: "Name",
//            columns: [
//                {
//                    Header: "First Name",
//                    // We re-map data using accessor functions for subRows
//                    accessor: ($) => $.Name?.First,
//                    // We can render something different for subRows
//                    SubCell: (cellProps) => (
//                        <>🥳 { cellProps.value } 🎉</>
//                    )
//                },
//                {
//                    Header: "Last Name",
//                    accessor: ($) => $.Name?.Last
//                }
//            ]
//        },
//        {
//            Header: "Information",
//            columns: [
//                {
//                    Header: "Age",
//                    /*** @param $ {Person} */
//                    accessor: ($) => $.Age
//                },
//                {
//                    Header: "Height",
//                    /*** @param $ {Person} */
//                    accessor: ($) => $.Height
//                },
//                {
//                    Header: "Status",
//                    /*** @param $ {Person} */
//                    accessor: ($) => $.Marital
//                }
//            ]
//        }
    ];
};

export default Columns;
