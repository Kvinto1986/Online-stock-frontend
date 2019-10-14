import React from 'react'
import { Box, Button, Container } from '@material-ui/core'

const WarehousingSubmitButton = ({isShowen, catchSubmitAction}) => {

    const handleSubmit = () => {
        catchSubmitAction()
    }

    return (
        <Container maxWidth="sm">
            <Box my={3}>
                <Button
                    disabled={!isShowen}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Save warehousing
                </Button>
            </Box>
        </Container>
    )
}

export default WarehousingSubmitButton