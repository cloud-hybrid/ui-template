import React from "react";

import { useTable, useExpanded, useAsyncDebounce } from "react-table";

import { default as Generator } from "./Generator.js";

import { default as Columns } from "./Columns.js";

import { matchSorter } from "match-sorter";

function GlobalFilter(
    {
        preGlobalFilteredRows,
        globalFilter,
        setGlobalFilter,
    }
) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
      Search:{' '}
            <input
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
                style={{
                    fontSize: '1.1rem',
                    border: '0',
                }}
            />
    </span>
    )
}

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
function SliderColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the min and max
  // using the preFilteredRows

  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={filterValue || min}
        onChange={e => {
          setFilter(parseInt(e.target.value, 10))
        }}
      />
      <button onClick={() => setFilter(undefined)}>Off</button>
    </>
  )
}

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
function NumberRangeColumnFilter({
  column: { filterValue = [], preFilteredRows, setFilter, id },
}) {
  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <input
        value={filterValue[0] || ''}
        type="number"
        onChange={e => {
          const val = e.target.value
          setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
        }}
        placeholder={`Min (${min})`}
        style={{
          width: '70px',
          marginRight: '0.5rem',
        }}
      />
      to
      <input
        value={filterValue[1] || ''}
        type="number"
        onChange={e => {
          const val = e.target.value
          setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
        }}
        placeholder={`Max (${max})`}
        style={{
          width: '70px',
          marginLeft: '0.5rem',
        }}
      />
    </div>
  )
}

function SubRows({ row, rowProps, visibleColumns, data, loading }) {
    if ( loading ) {
        return (
            <tr>
                <td/>
                <td colSpan={ visibleColumns.length - 1 }>
                    Loading...
                </td>
            </tr>
        );
    }

    // error handling here :)

    return (
        <>
            {
                (
                    row.isExpanded
                    ? (
                            data.map((x, i) => {
                                    return (
                                        <tr
                                            { ... rowProps }
                                            key={ `${ rowProps.key }-expanded-${ i }` }
                                        >
                                            { row.cells.map((cell) => {
                                                return (
                                                    <td { ... cell.getCellProps() } >
                                                        {
                                                            cell.render(
                                                                cell.column.SubCell
                                                                    ? "SubCell"
                                                                    : "Cell", {
                                                                    value:
                                                                        cell.column.accessor &&
                                                                        cell.column.accessor(x, i),
                                                                    row: { ... row, original: x }
                                                                }
                                                            )
                                                        }
                                                    </td>
                                                );
                                            }) }
                                        </tr>
                                    );
                                })
                    ) : null
                )
            }
        </>
    );
}

const SubRowAsync = ({ row, rowProps, visibleColumns }) => {
    const [ loading, setLoading ] = React.useState(true);
    const [ data, setData ] = React.useState([]);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setData(Generator(3));
            setLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <SubRows
            row={ row }
            rowProps={ rowProps }
            visibleColumns={ visibleColumns }
            data={ data }
            loading={ loading }
        />
    );
};

function fuzzyTextFilterFn(rows, id, filterValue) {
    return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val

// A simple way to support a renderRowSubComponent is to make a render prop
// This is NOT part of the React Table API, it's merely a rendering
// option we are creating for ourselves in our table renderer
function Table({ columns: userColumns, data: userData, renderer }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        visibleColumns,
        state
    } = useTable(
        {
            columns: userColumns,
            data: userData
        },
        useExpanded // We can useExpanded to track the expanded state
        // for sub components too!
    );

    return (
//        <>
//      <pre>
//        <code>{ JSON.stringify({ expanded: expanded }, null, 2) }</code>
//      </pre>
            <table { ... getTableProps() } className={["cds--data-table", "cds--data-table--normal", "cds--data-table--no-border"].join(" ")}>
                <thead>
                { headerGroups.map(headerGroup => (
                    <tr { ... headerGroup.getHeaderGroupProps() }>
                        { headerGroup.headers.map(column => (
                            <th className={"cds--table-expand"} { ... column.getHeaderProps() }>{ column.render("Header") }</th>
                        )) }
                    </tr>
                )) }
                </thead>
                <tbody { ... getTableBodyProps() }>
                { rows.map((row, i) => {
                    prepareRow(row);
                    const rowProps = row.getRowProps();
                    return (
                        // Use a React.Fragment here so the table markup is still valid
                        <React.Fragment key={ rowProps.key }>
                            <tr { ... rowProps }>
                                { row.cells.map(cell => {
                                    return (
                                        <td { ... cell.getCellProps() }>{ cell.render("Cell") }</td>
                                    );
                                }) }
                            </tr>
                            {/* We could pass anything into this */ }
                            {
                                row?.isExpanded && renderer(
                                    { row, rowProps, visibleColumns }
                                )
                            }
                        </React.Fragment>
                    );
                }) }
                </tbody>
            </table>
//            <br/>
//            <div>Showing the first 20 results of { rows.length } rows</div>
//        </>
    );
};

const Component = () => {
    const columns = React.useMemo(() => Columns(), []);
    const data = React.useMemo(() => Generator(20), []);
    const renderer = React.useCallback(
        ({ row, rowProps, visibleColumns }) => {
            return (
                <SubRowAsync
                    row={ row }
                    rowProps={ rowProps }
                    visibleColumns={ visibleColumns }
                />
            );
        }, []
    );

    return (<Table columns={ columns } data={ data } renderer={ renderer }/>);
};

export default Component;