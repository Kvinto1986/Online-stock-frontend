import React from 'react'
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import useStyles from '../controlTTNstyle'

const TopBar = ({saveTTN, open, openDialog}) => {
    const classes = useStyles()
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="close" onClick={() => {
                    openDialog(!open)
                }}>
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
    )
}

export default TopBar