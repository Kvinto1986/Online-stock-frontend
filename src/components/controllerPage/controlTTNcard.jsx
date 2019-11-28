import React, {Fragment, useState} from 'react'
import useStyles from './controlTTNstyle'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import moment from 'moment'
import CargoTable from './controlTTNcargoTable'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import DeleteIcon from '@material-ui/icons/Delete'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Container from '@material-ui/core/Container'

export default ({ttn, open, report, setReport}) => {
    const classes = useStyles()

    const [openReport, setOpenReport] = useState(false)

    const handleOpen = () => {
        setOpenReport(true)
    }
    const handleClose = () => {
        setOpenReport(false)
    }

    const handleDeleteReport = () => {
        setReport('')
    }

    return (
        <Container component="main" maxWidth="xl">
            <Paper>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center" colSpan={2}> <Typography variant="h5" gutterBottom>
                                <span className={classes.spanTable}>International waybill № </span> "{ttn.id}"
                                <span
                                    className={classes.spanTable}> from </span>
                                "{moment(ttn.dataOfRegistration).format('MMMM Do YYYY')}"
                            </Typography></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left"><b>Owner info:</b></TableCell>
                            <TableCell align="left">Passport info: {ttn.owner}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left"><b>Carrier info:</b></TableCell>
                            <TableCell align="left">Company: {ttn.carrier.company}, UNP №{ttn.carrier.unp},
                                phone: {ttn.carrier.tel} </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left"><b>Driver info:</b></TableCell>
                            <TableCell align="left">Name: {ttn.driver.name}, driver license №{ttn.driver.license}, car
                                number: {ttn.carNumber} </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <CargoTable
                    cargo={ttn.products}
                    open={open}
                />
                {ttn.description && (
                    <Paper className={classes.description}>
                        <Typography color="textPrimary">
                            {ttn.description}
                        </Typography>
                    </Paper>)}
            {report.length > 0 && (
                <Fragment>
                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openReport}>
                        <AppBar className={classes.appBar}>
                            <Toolbar>
                                <Typography variant="h6" className={classes.title}>
                                    Report
                                </Typography>
                                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                    <CloseIcon/>
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <DialogContent dividers>
                            <Typography gutterBottom>
                                {report}
                            </Typography>
                        </DialogContent>
                    </Dialog>
                    <IconButton onClick={handleDeleteReport} aria-label="close"
                                style={{marginLeft: '5%', marginBottom: '5%'}}>
                        <DeleteIcon fontSize="large"/>
                    </IconButton>
                    <Button
                        className={classes.report}
                        variant="outlined"
                        color="primary"
                        onClick={handleOpen}>
                        Read report
                    </Button>
                </Fragment>)}
</Paper>
        </Container>

    )
}