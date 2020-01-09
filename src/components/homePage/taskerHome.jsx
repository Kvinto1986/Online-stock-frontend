import React from 'react'
import TaskBar from '../taskBar/TaskBar'
import TaskContent from '../taskBar/TaskContent'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'

export default () => {
    return (
        <>
            <CssBaseline />
            <Box display="flex" style={{height: '100%'}}>
                <TaskBar />
                <Container maxWidth="xl">
                    <TaskContent/>
                </Container>
            </Box>
        </>
    )
}