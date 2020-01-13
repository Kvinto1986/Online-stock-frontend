import React from 'react'
// import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Collapse, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { StarBorder } from '@material-ui/icons'
import InboxListComponent from './InboxListComponent'

const InboxPopUpList = ({ roleTasks, isOpen, inboxData, getTTNdateOut }) => {
    const classes = useStyles()
    return (
        <Collapse in={isOpen} timeout="auto" unmountOnExit className={classes.collapse}>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested} onClick={() => getTTNdateOut(new Date(), 2)}>
                    <ListItemIcon>
                        <StarBorder fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText 
                        primary={
                            <InboxListComponent 
                                title="In 2 hours"
                                inboxDataUnit={inboxData[0]}
                            />
                        }
                    />
                </ListItem>
                <ListItem button className={classes.nested} onClick={() => getTTNdateOut(new Date(), 8)}>
                    <ListItemIcon>
                        <StarBorder fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText 
                        primary={
                            <InboxListComponent 
                                title="In 8 hours"
                                inboxDataUnit={inboxData[1]}
                            />
                        }
                        
                    />
                </ListItem>
                <ListItem button className={classes.nested} onClick={() => getTTNdateOut(new Date(), 24)}>
                    <ListItemIcon>
                        <StarBorder fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText 
                        primary={
                            <InboxListComponent 
                                title="Today"
                                inboxDataUnit={inboxData[2]}
                            />
                        } 
                    />
                </ListItem>
                <ListItem button className={classes.nested} onClick={() => getTTNdateOut(new Date(), 0)}>
                    <ListItemIcon>
                        <StarBorder fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText 
                        primary={
                            <InboxListComponent 
                                title="All"
                                inboxDataUnit={roleTasks}
                            />
                        }
                    />
                </ListItem>
            </List>
        </Collapse>
    )
}

const useStyles = makeStyles(theme => ({
    collapse: {
        marginTop: theme.spacing(1),
    },
    nested: {
        padding: 0,
        paddingBottom: '5px',
        paddingTop: '5px',
        paddingLeft: theme.spacing(2),
    },
}))

export default InboxPopUpList