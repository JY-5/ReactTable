import React from "react";

export const toCurrency = (numberString) => {
    let number = parseFloat(numberString);
    return "$" + number.toLocaleString('USD', {
        minimumFractionDigits: 2
    });
}

export const COLUMNS = [
    {
        Header: 'Picture',
        accessor: 'img',
        maxWidth: 70,
        minWidth: 70,
        Cell: ({ cell: { value }}) => (
            <img src={value} alt="" width={60}/>
        )
    },
    {
        Header: 'Breakdown',
        Footer: 'Total:',
        accessor: 'product'
    },
    {
        Header:'Spend',
        Footer: '',
        accessor: 'spend',
        Cell: props => <React.Fragment> {toCurrency(props.value)}</React.Fragment>
    },
    {
        Header: 'Sales',
        Footer: '',
        accessor: 'sales',
        Cell: props => <React.Fragment> {toCurrency(props.value)}</React.Fragment>
    },
    {
        Header: 'ACoS',
        Footer: '',
        accessor: 'a_co_s',
        Cell: props => <React.Fragment> {props.value + "%"}</React.Fragment>
    },
    {
        Header: 'ROAS',
        Footer: '',
        accessor: 'roas'
    },
    {
        Header: 'Impressions',
        Footer: '',
        accessor: 'impressions',
        Cell: props => <React.Fragment> {props.value.toLocaleString()}</React.Fragment>
    },
    {
        Header: 'Clicks',
        Footer: '',
        accessor: 'clicks',
        Cell: props => <React.Fragment> {props.value.toLocaleString()}</React.Fragment>
    },
    {
        Header: 'CTR',
        Footer: '',
        accessor: 'ctr',
        Cell: props => <React.Fragment> {props.value + "%"}</React.Fragment>
    },
    {
        Header: 'CPC',
        Footer: '',
        accessor: 'cpc',
        Cell: props => <React.Fragment> {toCurrency(props.value)}</React.Fragment>
    },
    {
        Header: 'PPC Orders',
        Footer: '',
        accessor: 'ppc_orders'
    },
    {
        Header: 'Total Sales',
        Footer: '',
        accessor: 'total_sales',
        Cell: props => <React.Fragment> {toCurrency(props.value)}</React.Fragment>
    },
    {
        Header: 'TACoS',
        Footer: '',
        accessor: 'ta_cos',
        Cell: props => <React.Fragment> {props.value + "%"}</React.Fragment>
    }
]

// const columnsData = {
//     COLUMNS,
//     toCurrency
// }

// export default columnsData;