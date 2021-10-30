import getUsers from '../Service/api';
import { useEffect, useState } from 'react';
import { Table, TableCell, TableHead, TableRow, TableBody, makeStyles } from '@material-ui/core';

const dataStyle = makeStyles ({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: '#ffffff',
            fontSize: 18
        }
    },
    row: {
        '& > *':{
            fontSize: 18
        }
    }
})

const AllUsers = () => {
    const [avengers, setUsers] = useState([]);

    const styling = dataStyle();

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        const response = await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }
    return (
        <Table className = {styling.table}>
            <TableHead>
                <TableRow className = {styling.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Power</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    avengers.map(data1 => (
                        <TableRow className = {styling.row}>
                            <TableCell>{data1.id}</TableCell>
                            <TableCell>{data1.name}</TableCell>
                            <TableCell>{data1.username}</TableCell>
                            <TableCell>{data1.email}</TableCell>
                            <TableCell>{data1.power}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllUsers;