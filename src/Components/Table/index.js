import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

import TableHead from './TableHead'
import TableBody from './TableBody'

import useStyle from './styles'

import { PER_PAGE } from '../../Config/query'
export default function EnhancedTable(props) {
    const { page, setPage, rows, totalCount, headCells } = props

    const classes = useStyle();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        aria-label="enhanced table"
                    >
                        <TableHead
                            headCells={headCells}
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={totalCount}
                        />
                        <TableBody
                            order={order}
                            orderBy={orderBy}
                            rowsPerPage={PER_PAGE}
                            rows={rows}
                        />
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[PER_PAGE]}
                    component="div"
                    count={totalCount}
                    rowsPerPage={PER_PAGE}
                    page={page}
                    onChangePage={handleChangePage}
                />
            </Paper>
        </div>
    );
}
