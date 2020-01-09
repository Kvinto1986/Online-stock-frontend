import React, { memo } from 'react'
import ArchiveIcon from '@material-ui/icons/Archive'
import { makeStyles } from '@material-ui/core/styles'
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import InboxPopUpList from './InboxPopUpList'

const Inbox = ({ handleClick, isOpen, roleTasks = [], inboxData, getTTNdateOut }) => {
    const classes = useStyles()

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <ArchiveIcon />
                </ListItemIcon>
                <ListItemText 
                    primary={
                        <span>
                            <b>Inbox <small>({roleTasks.length})</small></b>
                        </span>
                    } 
                    className={classes.topLevelListItem}
                />
                {isOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {isOpen && (
                <InboxPopUpList 
                    roleTasks={roleTasks} 
                    isOpen={isOpen} 
                    inboxData={inboxData}
                    getTTNdateOut={getTTNdateOut}
                />
            )}
        </>
    )
}

const useStyles = makeStyles(theme => ({
    topLevelListItem: {
        paddingLeft: 0,
        paddingRight: theme.spacing(2),
    },
}))

export default memo(Inbox)