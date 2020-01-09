import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const ErrorBtn = ({setFormVisibility, formVisibility}) => {
    return (
        <Container component="main" maxWidth="md">
            <Box display="flex" justifyContent="center">
                <Button color="primary" variant="outlined"
                        onClick={() => setFormVisibility(!formVisibility)}>
                    {formVisibility ? ('Close form') : 'Create new'}
                </Button>
            </Box>
        </Container>
    )
}

export default ErrorBtn
