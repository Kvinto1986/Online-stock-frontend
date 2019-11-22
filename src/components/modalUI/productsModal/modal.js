import React, {useRef} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import PersonIcon from '@material-ui/icons/Folder'
import {blue} from '@material-ui/core/colors'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    modal: {
        height: "700px"
    }
})


export default function SimpleDialog({open, close,  data}) {
    const classes = useStyles()


    return (
      <Dialog onClose={close} className={classes.modal} aria-labelledby="simple-dialog-title" open={open}>
          <DialogTitle id="simple-dialog-title">History of item</DialogTitle>
          <List>
              {data.map(d => (
                <ListItem button key={d[0]}>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <PersonIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={`${d[0]} : ${d[1]}`}/>
                </ListItem>
              ))}
          </List>
      </Dialog>
    )
}



