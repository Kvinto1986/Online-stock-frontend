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

export default ({deleteWarehouse, warehouses}) => {

    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Action</TableCell>
                        <TableCell align="center">Warehouse</TableCell>
                        <TableCell align="center">License</TableCell>
                        <TableCell align="center">Total area</TableCell>
                        <TableCell align="center">Areas</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.values(warehouses).map(elem => (
                        <TableRow key={elem.id+elem.name}>
                            <TableCell align="center">
                                <Button variant="contained" color="secondary" className={classes.button}
                                        onClick={() => deleteWarehouse(elem.id)}>
                                    Delete
                                    <DeleteIcon style={{marginLeft: '5%'}}/>
                                </Button>
                            </TableCell>
                            <TableCell align="center">
                                {elem.name}
                            </TableCell>
                            <TableCell align="center">{elem.license}</TableCell>
                            <TableCell align="center">{elem.totalArea}</TableCell>
                            <TableCell align="center">
                                <Paper className={classes.root}>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Type</TableCell>
                                                <TableCell align="center">Area</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        {elem.areas.map((elem) => {
                                            return (
                                                <TableBody>
                                                    <TableRow key={elem.type + elem.area}>
                                                        <TableCell align="center">{elem.type}</TableCell>
                                                        <TableCell align="center">{elem.area}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            )
                                        })}
                                    </Table>
                                </Paper>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}