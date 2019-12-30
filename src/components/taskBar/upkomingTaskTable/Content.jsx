import React from 'react'
import { Box } from '@material-ui/core'
import TaskList from './TaskList'

const Content = () => {
    return (
        <Box style={{background: 'white'}}>
            <Box mt={3} >
                <TaskList />
            </Box>
        </Box>
    )
}

export default Content