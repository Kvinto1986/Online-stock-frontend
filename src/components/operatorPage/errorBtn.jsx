import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

const ErrorBtn = ({setFormVisibility, formVisibility}) => {
    return (
        <Box>
            <Button 
                color="primary" 
                variant="contained"
                size="small"
                onClick={() => setFormVisibility(!formVisibility)}
            >
                {formVisibility ? ('Close form') : 'Create new'}
            </Button>
        </Box>
    )
}

export default ErrorBtn
