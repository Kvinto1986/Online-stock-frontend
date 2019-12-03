import React from 'react'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import moment from 'moment'
import CargoTable from './cargoTable'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import ExpansionPanel from './expansionPanel'
import useStyles from "./checkTtnStyles";

export default ({ttn, onDelete}) => {

    const classes = useStyles();

    return (
        <Container maxWidth="xl">
            <Paper className={classes.root}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={4}><Typography variant="h5" gutterBottom>
                                <span className={classes.spanTable}>International waybill № </span> "{ttn.id}"
                                <span
                                    className={classes.spanTable}> from </span>
                                "{moment(ttn.dataOfRegistration).format('MMMM Do YYYY')}"
                            </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className={classes.tableCell} align="left" colSpan={1}>
                                <Typography variant="h6" gutterBottom>
                                    <span className={classes.spanTable}>Service:</span> "{ttn.service}"
                                </Typography>
                            </TableCell>
                            <TableCell className={classes.tableCell} align="left" colSpan={1}>
                                <Typography variant="h6" gutterBottom>
                                    <span className={classes.spanTable}>Owner info:</span> "{ttn.owner}"
                                </Typography>
                            </TableCell>
                            <TableCell className={classes.tableCell} align="left" colSpan={1}>
                                <Typography variant="h6" gutterBottom>
                                    <span className={classes.spanTable}>Status:</span> "{ttn.status}"
                                </Typography>
                            </TableCell>
                            <TableCell align="left" colSpan={1}>
                                <Typography variant="h6" gutterBottom>
                                    <span
                                        className={classes.spanTable}>Warehouse company:</span> "{ttn.warehouseCompany}"
                                </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left" colSpan={1}>
                                <Typography variant="h6" gutterBottom>
                                    <span className={classes.spanTable}>Carrier info:</span>
                                </Typography>
                            </TableCell>
                            <TableCell className={classes.tableCell} align="center" colSpan={1}>
                                <Table aria-label="simple table">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <span className={classes.spanTable}>Unp: </span>
                                                "{ttn.carrier.unp}"
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <span className={classes.spanTable}>Phone: </span>
                                                "{ttn.carrier.tel}"
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <span className={classes.spanTable}>Company name: </span>
                                                "{ttn.carrier.company}"
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableCell>
                            <TableCell align="left" colSpan={1}>
                                <Typography variant="h6" gutterBottom>
                                    <span className={classes.spanTable}>Driver info:</span>
                                </Typography>
                            </TableCell>
                            <TableCell align="left" colSpan={1}>
                                <Table aria-label="simple table">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <span className={classes.spanTable}>Name: </span>
                                                "{ttn.driver.name}"
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <span className={classes.spanTable}>Driver license: </span>
                                                "{ttn.driver.license}"
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                <span className={classes.spanTable}>Car number: </span>
                                                "{ttn.carNumber}"
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" colSpan={4}><Typography variant="h5" gutterBottom>
                                <span className={classes.spanTable}>Cargo list:</span>
                            </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left" colSpan={4}>
                                <CargoTable
                                    cargo={ttn.products}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {ttn.report && (
                                <TableCell align="left" colSpan={4}>
                                    <ExpansionPanel
                                        report={ttn.report}
                                    />
                                </TableCell>
                            )}
                        </TableRow>
                        {ttn.status === 'registred' && (
                            <TableRow>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => onDelete(ttn.id)}>
                                    Delete
                                    <DeleteIcon style={{marginLeft: '5%'}}/>
                                </Button>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Paper>
        </Container>

    )
}
