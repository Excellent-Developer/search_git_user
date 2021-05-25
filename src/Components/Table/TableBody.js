import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const EnhancedTableBody = (props) => {

    const { rows, order, orderBy, rowsPerPage } = props

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length);

    return (
        <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
                .map((row, index) => {
                    return (
                        <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={`enhanced-table-checkbox-${index}`}
                        >
                            <TableCell align='center'>
                                <Avatar alt={row.login} src={row.avatar_url} />
                            </TableCell>
                            <TableCell align="left">{row.avatar_url}</TableCell>
                            <TableCell align="left">{row.login}</TableCell>
                            <TableCell align="left">{row.type}</TableCell>
                        </TableRow>
                    );
                })
            }
            {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                </TableRow>
            )}
        </TableBody>
    );
}

export default EnhancedTableBody