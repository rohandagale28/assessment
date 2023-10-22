import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { updateUser } from './Api/Api';


const Row = (row) => {
    const { item } = row
    const { getData } = row

    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState({ name: item.name, email: item.email, password: item.password });
 

    const handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //delete user
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`https://crud-server-ochre.vercel.app/register/${id}`)
            if (res) {
                getData()
            }
        } catch (error) {
            console.error(error);
        }
    };
    //update user
    const onUpdate = async (id) => {
        try {
            const res = await updateUser(id, formData)
            if (res) {
                getData()
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => { }, [row])
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row">
                    {item._id}
                </TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">
                    <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
                        <div><button onClick={() => setOpen(!open)}>Edit</button></div>
                        <div><button onClick={() => handleDelete(item._id)}>Delete</button></div>
                    </div>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Edit Info
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <div style={{ display: "flex", gap: "1rem" }}>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                            < label > Name</label>
                                            <input type='text' value={formData.name} onChange={handleInputChange} name="name" style={{ padding: "0.5rem", backgroundColor: "#FFF", border: "none", outline: "2px solid #696969", color: "#000" }} />
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                            <label>Email</label>
                                            <input type='text' value={formData.email} onChange={handleInputChange} name="email" style={{ padding: "0.5rem", backgroundColor: "#FFF", border: "none", outline: "2px solid #696969", color: "#000" }} />
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                            <label> New Password</label>
                                            <input type='password' value={formData.password} onChange={handleInputChange} name='password' style={{ padding: "0.5rem", backgroundColor: "#FFF", border: "none", outline: "2px solid #696969", color: "#000" }} />
                                        </div>
                                    </div>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={item._id}>
                                        <TableCell component="th" scope="row">
                                            {item._name}
                                        </TableCell>
                                        <TableCell>{item._email}</TableCell>
                                        <TableCell align="right">
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                                <button onClick={() => onUpdate(item._id)}>Save</button>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow >
        </React.Fragment >
    )
}

export default Row