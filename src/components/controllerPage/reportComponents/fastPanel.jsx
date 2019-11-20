import React from 'react'
import {Box, Button} from '@material-ui/core'

export default ({isAllSelected, selectAll}) => {

    const doSelect = () => {
        isAllSelected
        ? selectAll(false)
        : selectAll(true)
    }

    return (
        <Box>
            <hr />
            <Box>
                <Button onClick={doSelect}>
                    {isAllSelected ? 'UNCHECK ALL' : 'CHECK ALL'}
                </Button>
            </Box>
            <hr />
        </Box>
    )
}