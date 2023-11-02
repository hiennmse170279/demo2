import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import styles from "./ListUser2.module.scss";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import classNames from "classnames/bind";
import PaginationControlled from '../../components/Pagination';
import { useState } from 'react';

const cx = classNames.bind(styles);

function createData(id, name, beatsound, datecrate, status) {
    return { id, name, beatsound, datecrate, status };
}

const rows = [
    createData('1', 'Doanh', 'BeatSound', '10-10-2010', 'Active'),
    createData('2', 'Doanh', 'BeatSound', '10-10-2010', 'Active'),
    createData('3', 'Doanh', 'BeatSound', '10-10-2010', 'Active'),
    createData('4', 'Doanh', 'BeatSound', '10-10-2010', 'Active'),
    createData('5', 'Doanh', 'BeatSound', '10-10-2010', 'Active'),
    createData('6', 'Doanh', 'BeatSound', '10-10-2010', 'Active'),
    createData('7', 'Doanh', 'BeatSound', '10-10-2010', 'Active'),
    createData('8', 'Doanh', 'BeatSound', '10-10-2010', 'Active'),
    createData('9', 'Doanh', 'BeatSound', '10-10-2010', 'Active'),
    createData('10', 'Doanh', 'BeatSound', '10-10-2010', 'Active'),
];

export default function ListUser2() {
    // const getUsers = async () => {
    //     let res = await fetchAllUsers();
    //     if (res && res.rows) {
    //         console.log(res)
    //         setTotalUsers(res.total)
    //         setListUsers(set.rows)
    //     }
    // }
    // const [totalUsers, setTotalUsers] = useState(0);
    // const [listUsers, setListUsers] = useState([]);
    return (
        <div className={cx("table")}>
            <h2 className={cx("header-text")}>
                List User
            </h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontSize: '20px', fontWeight: '500' }}>ID</TableCell>
                            <TableCell style={{ fontSize: '20px', fontWeight: '500' }} align="right">Name&nbsp;</TableCell>
                            <TableCell style={{ fontSize: '20px', fontWeight: '500' }} align="right">Date create&nbsp;</TableCell>
                            <TableCell style={{ fontSize: '20px', fontWeight: '500' }} align="right">Email&nbsp;</TableCell>
                            <TableCell style={{ fontSize: '20px', fontWeight: '500' }} align="right">Status&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ fontSize: '17px' }} component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell style={{ fontSize: "17px" }} align="right">{row.name}</TableCell>
                                <TableCell style={{ fontSize: '17px' }} align="right">{row.datecrate}</TableCell>
                                <TableCell style={{ fontSize: '17px' }} align="right"></TableCell>
                                <TableCell style={{ fontSize: '17px' }} align="right">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <PaginationControlled></PaginationControlled>
        </div>
    );
}
