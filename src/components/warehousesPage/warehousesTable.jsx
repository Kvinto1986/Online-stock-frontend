import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from './warehousePageStyles'
import Box from '@material-ui/core/Box'

export default ({deleteWarehouse, warehouses}) => {
    const classes = useStyles()

    return (
        <Box mt={5} mb={5}>
            <Paper className={classes.root}>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Warehouse</TableCell>
                            <TableCell align="center">License</TableCell>
                            <TableCell align="center">Total area</TableCell>
                            <TableCell align="center">Areas</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.values(warehouses).map(elem => (
                            <TableRow key={elem.id+elem.name}>
                                <TableCell align="center">
                                    <em><b>{elem.name}</b></em>
                                </TableCell>
                                <TableCell align="center">{elem.id}</TableCell>
                                <TableCell align="center">{elem.totalArea}</TableCell>
                                <TableCell align="center">
                                    <Box p={2}>
                                        <Table size="small">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">Type</TableCell>
                                                    <TableCell align="center">Area</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            {elem.areas.map((elem) => {
                                                return (
                                                    <TableBody key={elem.index}>
                                                        <TableRow key={elem.type + elem.area}>
                                                            <TableCell align="center">{elem.type}</TableCell>
                                                            <TableCell align="center">{elem.area}</TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                )
                                            })}
                                        </Table>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Button 
                                        variant="contained" className={classes.button}
                                        onClick={() => deleteWarehouse(elem.id)}>
                                            <DeleteIcon style={{marginLeft: '5%'}}/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    )
}