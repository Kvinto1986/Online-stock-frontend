import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import useStyles from './operatorPageStyles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete'
import TableContainer from "@material-ui/core/TableContainer";
import Fab from "@material-ui/core/Fab";

export default ({cargoList, handleDeleteProduct, offButton}) => {

    const classes = useStyles()

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={5} align="center">
                            <Typography color="textSecondary" component="h1" variant="h5" style={{textAlign: 'center'}}>
                                Cargo table
                            </Typography></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Number</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Amount</TableCell>
                        <TableCell align="center">Boxing</TableCell>
                        {!offButton && (<TableCell align="center">Action</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cargoList.map((elem, index) => {
                        return <TableRow key={elem.type + index}>
                            <TableCell align="center">{elem.id}</TableCell>
                            <TableCell align="center">{elem.name}</TableCell>
                            <TableCell align="center">{elem.amount}</TableCell>
                            <TableCell align="center">{elem.package}</TableCell>
                            {!offButton && (<TableCell align="center"><Fab size="small" color="default"
                                onClick={() => handleDeleteProduct(index)}
                            >
                                <DeleteIcon/>
                            </Fab></TableCell>)}


                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
