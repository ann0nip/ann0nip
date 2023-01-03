import * as React from 'react';

import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

import { formatPrice, getExchangeName } from '../../utils/utils';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.main,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:first-of-type td, &:first-of-type th': {
        backgroundColor: theme.palette.green.light,
    },
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const CryptoTable = ({ data = [], headers = [], amount }) => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
            <Table aria-label="crypto table">
                <TableHead>
                    <TableRow>
                        {headers.map((header) => (
                            <StyledTableCell align="left" key={header}>
                                <Typography variant="subtitle1">
                                    {header}
                                </Typography>
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((exchange) => (
                        <StyledTableRow key={exchange.ticker}>
                            <StyledTableCell component="th" scope="row">
                                {getExchangeName(exchange)}
                            </StyledTableCell>
                            <StyledTableCell>
                                {formatPrice(exchange.data.totalBid)}
                            </StyledTableCell>
                            <StyledTableCell>
                                {amount && '~'}
                                {formatPrice(
                                    exchange.data.totalBid * amount,
                                    0,
                                )}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CryptoTable;
