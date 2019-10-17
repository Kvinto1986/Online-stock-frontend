import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

import useStyles from '../operatorPage/operatorPageStyles'

export default ({cargoList, handleDeleteProduct}) => {

    const classes = useStyles()

    return (
        <Table className={classes.table} size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="center">Number</TableCell>
                    <TableCell align="center">From TTN</TableCell>
                    <TableCell align="center">Type</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cargoList.map((elem, index) => {
                    return <TableRow key={elem.name + elem.ttnNumber}>
                        <TableCell align="center">{index + 1}</TableCell>
                        <TableCell align="center">{elem.ttnNumber}</TableCell>
                        <TableCell align="center">{elem.name}</TableCell>
                        <TableCell align="center">{elem.amount}</TableCell>
                        <TableCell align="center">
                            <Button
                                variant="contained"
                                color="secondary"
                                style={{width: '40%', marginLeft: '3%', marginRight: '3%'}}
                                onClick={() => handleDeleteProduct(index)}
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