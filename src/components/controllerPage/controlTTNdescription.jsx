import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper'
import useStyles from './controlTTNstyle'

import TTNtable from './controlTTNcargoTable'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default ({open, setOpen,ttn}) => {
    const classes = useStyles()

    return (
        <Paper className={classes.select}>
            <div>
                <Dialog fullScreen open={open} onClose={()=>{setOpen(!open)}} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={()=>{setOpen(!open)}} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Cargo data change
                            </Typography>
                            <Button color="inherit" onClick={()=>{setOpen(!open)}}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <TTNtable
                        cargo={ttn.products}/>
                </Dialog>
            </div>
        </Paper>
    )
}
