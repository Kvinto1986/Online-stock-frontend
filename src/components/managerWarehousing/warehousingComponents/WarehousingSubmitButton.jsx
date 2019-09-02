import React from 'react'
import {Box, Button, Container} from '@material-ui/core'

const WarehousingSubmitButton = ({ isDisabled }) => {
     return (
        <Container maxWidth="sm">
            <Box my={3}>
                <Button
                    disabled={isDisabled}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Move and save
                </Button>
            </Box>
        </Container>
     )
}

export default WarehousingSubmitButton