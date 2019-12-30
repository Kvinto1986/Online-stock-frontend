import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Collapse, List, ListItem, ListItemText, ListItemIcon  } from '@material-ui/core'
import { StarBorder } from '@material-ui/icons'

const InboxPopUpList = ({ roleTasks, isOpen }) => {
    const classes = useStyles()
    return (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <StarBorder fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary={`In 2 hours`} />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <StarBorder fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary={`In 8 hours`} />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <StarBorder fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary={`Today`} />
                </ListItem>
                <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <StarBorder fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText 
                        primary={
                            <span>
                                All <small>({roleTasks.length})</small>
                            </span>
                        }
                        onClick={() => {}}
                    />
                </ListItem>
            </List>
        </Collapse>
    )
}

const useStyles = makeStyles(theme => ({
    nested: {
        padding: 0,
        paddingLeft: theme.spacing(4),
    },

}))

export default InboxPopUpList