import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Badge } from '@material-ui/core'

const InboxListComponent = ({ title, inboxDataUnit }) => {
    const classes = useStyles()
    return (
        <Box display="flex" alignItems="center" justifyContent="space-between">
            <small>
                <b>{title}</b>
            </small>
                {(inboxDataUnit && inboxDataUnit.length > 0) && 
                <Badge 
                    badgeContent={inboxDataUnit.length} 
                    color="primary" 
                    className={classes.badge}
                />}
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    badge: {
        padding: 0,
        marginRight: '27px',
    },
}))

export default InboxListComponent