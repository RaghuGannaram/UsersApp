import React from 'react';
import {Table, TableContainer, TableHead, TableBody, TableRow, TableCell} from '@mui/material';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types'; 


function CustomTable({res}) {

  const rows = res.data;  

  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table" className='table'>
        <TableHead className='tableHead'>
          <TableRow>
            <TableCell className="tableCell">Profile</TableCell>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">First Name</TableCell>
            <TableCell className="tableCell">Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='tableBody'>
          {rows&&rows.map(row => (
            <TableRow key={row.id} className="tableRow" sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell className="tableCell"><img src={row.avatar} alt="avatar"/></TableCell>
              <TableCell className="tableCell" contentEditable="true">{row.id}</TableCell>
              <TableCell className="tableCell" contentEditable="true">{row.email}</TableCell>
              <TableCell className="tableCell" contentEditable="true">{row.first_name}</TableCell>
              <TableCell className="tableCell" contentEditable="true">{row.last_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CustomTable.propTypes = {
  res: PropTypes.object
}

export default CustomTable;
