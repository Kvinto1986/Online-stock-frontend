import React from 'react'
import withTaskBar from './withTaskBar'
import { Box, Typography } from '@material-ui/core'
import Content from './upkomingTaskTable/Content'

class TaskContent extends React.Component {
    render() {
        return (
            <Box>
                <Box style={{background: 'white'}} p={1.5}>
                    <Typography variant="h4">TTNs to check</Typography>
                </Box>
                <Box>
                    <Content />
                </Box>
            </Box>
        )
    }
}

export default withTaskBar(TaskContent)