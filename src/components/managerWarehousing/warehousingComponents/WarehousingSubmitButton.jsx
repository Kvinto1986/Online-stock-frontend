import React from 'react'
import {Box, Button, Container} from '@material-ui/core'
import { warehousingSubmit } from '../../../actions/warehousingActions'

const WarehousingSubmitButton = ({ sendAllDataToServer }) => {

    const handleSubmit = () => {
        warehousingSubmit()
        // sendAllDataToServer()
    }

     return (
        <Container maxWidth="sm" onClick={handleSubmit}>
            <Box my={3}>
                <Button
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