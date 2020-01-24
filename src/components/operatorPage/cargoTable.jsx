import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import DeleteIcon from '@material-ui/icons/Delete'
import Fab from '@material-ui/core/Fab'

export default ({cargoList, handleDeleteProduct, offButton}) => {
    return (
        <Container maxWidth="sm">
            <Box mb={5}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell colSpan={5} align="center">
                                <Typography color="textSecondary" component="h1" variant="h5" style={{textAlign: 'center', marginBottom:'25px'}}>
                                    Cargo table
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Number</TableCell>
                            <TableCell align="center">Type</TableCell>
                            <TableCell align="center">Boxing</TableCell>
                            <TableCell align="center">Amount</TableCell>
                            {!offButton && (<TableCell align="center">Action</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cargoList.map((elem, index) => (
                            <TableRow key={elem.id}>
                                <TableCell align="center">{elem.id}</TableCell>
                                <TableCell align="center">{elem.name}</TableCell>
                                <TableCell align="center">{elem.package}</TableCell>
                                <TableCell align="center">{elem.amount}</TableCell>
                                {!offButton && (
                                    <TableCell align="center">
                                        <Fab size="small" color="default"
                                            onClick={() => handleDeleteProduct(index)}
                                        >
                                        <DeleteIcon/>
                                        </Fab>
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Container>
    )
}
