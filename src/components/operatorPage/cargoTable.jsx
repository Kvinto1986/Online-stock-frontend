import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './operatorPageStyles'

export default ({cargoList,handleDeleteProduct}) => {

    console.log(cargoList)
    const classes = useStyles();

    return (
        <Table className={classes.table} size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="center">Number</TableCell>
                    <TableCell align="center">Type</TableCell>
                    <TableCell align="center">Weight</TableCell>
                    <TableCell align="center">Boxing</TableCell>
                    <TableCell align="center">Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cargoList.map((elem,index)=>{
                    return <TableRow key={elem.type+index}>
                        <TableCell align="center">{index+1}</TableCell>
                        <TableCell align="center">{elem.type}</TableCell>
                        <TableCell align="center">{elem.weight}</TableCell>
                        <TableCell align="center">{elem.boxing}</TableCell>
                        <TableCell align="center">
                            <Button
                                variant="contained"
                                color="secondary"
                                style={{width:'40%',marginLeft:'3%', marginRight:'3%'}}
                                onClick={()=>handleDeleteProduct(index)}
                            >
                                Delete
                                <DeleteIcon style={{marginLeft: '5%'}}/>
                            </Button>
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    )
}