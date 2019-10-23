import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import Paper from '@material-ui/core/Paper'
import useStyles from './controlTTNstyle'
import CloseIcon from '@material-ui/icons/Close'
import TTNtable from './controlTTNcargoTable'

import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default ({saveTTN, report, setReport, handleChangeTTN, cargo, open, openDialog}) => {
    const classes = useStyles()

    return (
        <div>
            <Dialog fullScreen open={open} onClose={() => {
                openDialog(!open)
            }} TransitionComponent={Transition}>

                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={() => {
                            openDialog(!open)
                        }} aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Сlose and clear data
                        </Typography>
                        <Button variant="contained" color="secondary" onClick={() => {
                            openDialog(!open)
                            saveTTN()
                        }}>
                           Finish control and send report
                        </Button>
                    </Toolbar>
                </AppBar>
                <Typography component="h2" variant="h4" align="center" color="textPrimary" style={{marginTop: '3%'}}
                            gutterBottom>
                    Edit cargo and create report
                </Typography>
                <Paper className={classes.dialogPaper}>
                    <TTNtable
                        handleChangeTTN={handleChangeTTN}
                        cargo={cargo}
                        open={open}/>
                </Paper>
                <Paper className={classes.dialogPaper}>
                    <Typography component="h2" variant="h6" align="center" color="textPrimary" style={{marginTop: '3%'}}
                                gutterBottom>
                        Write a report
                    </Typography>
                    <TextField
                        label="Report"
                        multiline
                        rowsMax="7"
                        style={{marginTop: '3%', width: '80%', marginLeft: '10%', marginBottom: '5%'}}
                        margin="normal"
                        onChange={(e) => setReport(e.target.value)}
                        defaultValue={report}
                        autoFocus={open}
                    />
                </Paper>


            </Dialog>
        </div>
    )
}
