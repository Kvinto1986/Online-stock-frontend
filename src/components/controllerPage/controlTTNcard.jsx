import React, {Fragment, useState} from 'react'
import useStyles from './controlTTNstyle'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import moment from 'moment'
import Table from './controlTTNcargoTable'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import DeleteIcon from '@material-ui/icons/Delete'

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
        <Paper className={classes.cardPaper}>
            <Typography component="h1" variant="h5" align="center" color="textPrimary" data-testid={'number'}style={{marginTop: '2%'}}>
                TTN #{ttn.number}
            </Typography>
            <Card className={classes.card}>
                <CardContent>
                    <Typography>
                        Sender: {ttn.sender}
                    </Typography>
                    <Typography>
                        Carrier: {ttn.carrier}
                    </Typography>
                    <Typography>
                        Driver name: {ttn.driver}
                    </Typography>
                    <Typography>
                        Car number: {ttn.carNumber}
                    </Typography>
                    <Typography>
                        Operator name: {ttn.registrar}
                    </Typography>
                    <Typography>
                        Registration data: {moment(ttn.dataOfRegistration).format('MMMM Do YYYY, h:mm:ss a  ')}
                    </Typography>

                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardContent>
                    <Typography component="h1" variant="h6" align="center" color="textPrimary">
                        Cargo
                    </Typography>
                    <Table
                        cargo={ttn.products}
                        open={open}
                    />
                    {ttn.description.length > 0 && (
                        <Paper className={classes.description}>
                            <Typography color="textPrimary">
                                {ttn.description}
                            </Typography>
                        </Paper>)}
                </CardContent>

            </Card>
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
                    <IconButton onClick={handleDeleteReport} aria-label="close" style={{marginLeft: '5%', marginBottom: '5%'}}>
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

    )
}