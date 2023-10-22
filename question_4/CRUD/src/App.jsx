import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUser, getUsers } from './Api/Api';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Row from './Row';


function App() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [data, setData] = useState([]) //all users
  const [open, setOpen] = useState(false) //dialog trigger

  //Input handler
  const handleInputChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //create user
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(formData)
    setFormData({ name: '', email: '', password: '' })
    getData()
  };

  //get users
  async function getData() {
    await getUsers().then((res) => setData(res))
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="container " style={{ position: "relative" }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className='d-flex gap-3'>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange} required style={{ color: "#000" }} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} required style={{ color: "#000" }} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" name="password" value={formData.password} onChange={handleInputChange} required style={{ color: "#000" }} />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <div>
        <div style={{ paddingTop: "2rem" }}>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Gmail</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => (
                  <React.Fragment key={item._id}>
                    <Row item={item} getData={getData} />
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div >
  );
}

export default App;
