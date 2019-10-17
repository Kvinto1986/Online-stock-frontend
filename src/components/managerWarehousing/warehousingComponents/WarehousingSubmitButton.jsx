import React from 'react'
import { Box, Button, Container } from '@material-ui/core'

const WarehousingSubmitButton = ({isShown, catchSubmitAction}) => {
    return (
        <Container maxWidth="sm">
            <Box my={3}>
                <Button
                    disabled={!isShown}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={catchSubmitAction}
                >
                    Save warehousing
                </Button>
            </Box>
        </Container>
    )
}

export default WarehousingSubmitButton