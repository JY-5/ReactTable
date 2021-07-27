import React, { useMemo, useEffect, useState } from 'react'
import { useTable, usePagination, useSortBy } from 'react-table';
import { COLUMNS, toCurrency } from '../columnsData.js';
import styles from './Table.module.css';
import _ from "lodash";

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('/list')
      .then(res => res.json())
      .then(data => {
        setData(data);
      })  
    }, []);

    const columns = useMemo(() => COLUMNS, []);
    const pageSizeOptions = [10, 20, 50, 100];

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        prepareRow,
        pageOptions,
        page,
        state: { pageIndex, pageSize },
        gotoPage,
        previousPage,
        nextPage,
        setPageSize,
        canPreviousPage,
        canNextPage
    } =  useTable(
        {
            columns,
            data,
        },
        useSortBy,
        usePagination
    );

    return (  
        <div className={styles.tablePanel}> 
            <table {...getTableProps()} >
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? "▼" : "▲") : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <thead>
                    {footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()} className={styles.summary}>
                            {footerGroup.headers.map((column, idx) => (
                                <th key={idx}>
                                    {column.render('Footer')}
                                    {idx === 2 ?
                                        <span>{toCurrency(_.sum(_.map(data, d => d.spend)))}</span> : null}
                                    {idx === 3 ?
                                        <span>{toCurrency(_.sum(_.map(data, d => d.sales)))}</span> : null}
                                    {idx === 6 ?
                                        <span>{_.sum(_.map(data, d => d.impressions)).toLocaleString()}</span> : null}
                                    {idx === 7 ?
                                        <span>{_.sum(_.map(data, d => d.clicks)).toLocaleString()}</span> : null} 
                                    {idx === 11 ?
                                        <span>{toCurrency(_.sum(_.map(data, d => d.total_sales)))}</span> : null}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        );
                    })}    
                </tbody>
            </table>
            <div className={styles.turnPage}>
                <div>{pageIndex * pageSize + 1} - {pageIndex * pageSize + page.length} of {data.length} items</div>
                <div className={styles.rightTurn}>
                    <button className={styles.prev}  onClick={() => previousPage()} disabled={!canPreviousPage}>
                        <i className={`${styles.left} fa fa-angle-left`}></i>
                    </button>
                    <div className={styles.page}>
                        Page{' '}
                        <em>
                        {pageIndex + 1} of {pageOptions.length}
                        </em>
                    </div>
                    <button className={styles.next} onClick={() => nextPage()} disabled={!canNextPage}>
                        <i className={`${styles.right} fa fa-angle-right`}></i>
                    </button>
                    <div className={styles.goto}>Go to page:</div>
                    <input
                        type="number"
                        defaultValue={pageIndex + 1 || 1}
                        onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                        }}
                    />
                    <select
                        value={pageSize}
                        onChange={e => {
                        setPageSize(Number(e.target.value))
                        }}
                    >
                        {pageSizeOptions.map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Table;
