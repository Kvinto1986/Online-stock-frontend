import React from 'react'
import withTaskBar from './withTaskBar'
import { Box } from '@material-ui/core'
import Upcoming from './upcomingTaskList/UpcomingList'

class TaskBar extends React.Component {
    render() {
        return (
            <Box style={{background: 'white'}}>
                <Upcoming />
            </Box>
        )
    }
}

export default withTaskBar(TaskBar)