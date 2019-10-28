import React from 'react'
import {Paper} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import ConnectedManager from './connectedManager'

export default () => {

    return <Box component={Paper} m={10}>
        <ConnectedManager/>
    </Box>
}