import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ThoughtsTable ({journalArray, setJournalArray}) {
    const handleDelete =(journalId)=>{

        //Filter out the product with the specified productId from the array
        const newArr = journalArray.filter((journal)=>journal.journalId !== journalId);
        
        //update the state to reflect the changes
        setJournalArray(newArr);

        //update the localStorage with the  modified Array
        localStorage.setItem('journalDetails', JSON.stringify(newArr));
    };
  
  return (
    <div className='mb-5'>
       <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow className='bg-primary'>
                    
                        <TableCell align="center" className='fs-5'>ID</TableCell>
                        <TableCell align="center" className='fs-5'>Date</TableCell>
                        <TableCell align="center" className='fs-5'>Thoughts for the Day</TableCell>
                        <TableCell align="center" className='fs-5'>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {journalArray.map((journalArray) => (
                    <TableRow
                    key={journalArray.journalId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="center">{journalArray.journalId}</TableCell>
                        <TableCell align="center">{journalArray.date}</TableCell>
                        <TableCell align="center">{journalArray.inputThoughts}</TableCell>
                        <TableCell align="center">
                            <button className='btn btn-warning mx-3'>Edit</button>
                            <button className='btn btn-danger'onClick={()=>handleDelete(journalArray.journalId)}>Delete</button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ThoughtsTable
