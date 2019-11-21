import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

const ErrorBtn = ({setFormVisibility, formVisibility}) => {
    return (
        <Container component="main" maxWidth="sm">
            <Button color="primary" style={{marginLeft: '1.5%', marginBottom:'5%'}} variant="outlined"
                    onClick={() => setFormVisibility(!formVisibility)}>
                {formVisibility ? ('Close form') : 'Create new'}
            </Button>
        </Container>
    )
}

export default ErrorBtn
