import React from 'react'
import { Box } from '@material-ui/core'
import TaskList from './TaskList'

const Content = (props) => {
    return (
        <Box style={{background: 'white'}}>
            <Box mt={3} >
                <TaskList 
                    contentData={props.contentData}
                    sortTasks={props.sortTasks}
                />
            </Box>
        </Box>
    )
}

export default Content