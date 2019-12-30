import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { ListSubheader, List, Box } from '@material-ui/core'
import { getTTNdateOut } from '../../../actions/taskBarActions'
import AutorenewIcon from '@material-ui/icons/Autorenew'
import Inbox from './inbox/Inbox'

const UpcomingList = props => {
    const classes = useStyles()
    const [isOpen, setIsOpen] = React.useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        props.getTTNdateOut()
    }, [])

    return (
        <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root} subheader={
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={1.75} mb={1.75}>
                <ListSubheader component="div" id="nested-list-subheader">
                    Upcoming
                </ListSubheader>
                <Box mr={2}>
                    <AutorenewIcon fontSize="small" color="primary" className={classes.autorenewIcon} onClick={() => props.getTTNdateOut()}/>
                </Box>
            </Box>
        }>
            <Inbox 
                handleClick={handleClick} 
                isOpen={isOpen} 
                roleTasks={props.roleTasks}
            />
        </List>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '260px',
        backgroundColor: theme.palette.background.paper,
    },
    autorenewIcon: {
        cursor: 'pointer'
    }
}))


const mapStateToProps = (state) => ({
    roleTasks: state.roleTasks
})

export default connect(mapStateToProps, { getTTNdateOut })(UpcomingList)