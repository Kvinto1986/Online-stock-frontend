import React from 'react'
import {AppBar, Toolbar, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import useStyles from '../controlTTNstyle'

const TopBar = ({open, openDialog}) => {
    const classes = useStyles()
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="close" onClick={() => {
                    openDialog(!open)
                }}>
                    <CloseIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar