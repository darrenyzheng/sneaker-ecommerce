import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const Transactions = () => {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();

    const apiUrl = import.meta.env.MODE === 'development'
        ? 'http://localhost:5000/api'
        : '/api';

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await fetch(`${apiUrl}/account/transactions`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: 'include',
                });

                if (!response.ok) {
                    navigate('/unauthorized');
                    return;
                }
                const data = await response.json();

                const formattedRows = data.transactions?.map(transaction =>
                    createData(transaction.transaction_id, transaction.contents, transaction.date, transaction.total_price)
                );
                setRows(formattedRows);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };
        fetchTransactions();
    }, [apiUrl]);

    function createData(transaction_id, contents, date, total_price) {
        return { transaction_id, contents, date, total_price };
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.text.primary,
        fontSize: 14,
        '&.MuiTableCell-head': {
            backgroundColor: theme.palette.grey[500],
            color: theme.palette.common.white,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Transaction ID</StyledTableCell>
                        <StyledTableCell align="right">Total Price ($)</StyledTableCell>
                        <StyledTableCell align="right">Contents</StyledTableCell>
                        <StyledTableCell align="right">Date</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.transaction_id}>
                            <StyledTableCell component="th" scope="row">
                                {row.transaction_id}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.total_price}</StyledTableCell>
                            <StyledTableCell align="right">
                                <pre style={{ margin: 0, fontFamily: 'Inter, sans-serif', fontSize: 'inherit' }}>
                                    {row.contents}
                                </pre>
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.date}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Transactions;