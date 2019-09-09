import React from 'react'
import {Box, Button, Container} from '@material-ui/core'
import { warehousingSubmit } from '../../../actions/warehousingActions'
import { connect } from 'react-redux'

const WarehousingSubmitButton = (props) => {

    const handleSubmit = () => {
        props.warehousingSubmit(true)
    }

     return (
        <Container maxWidth="sm">
            <Box my={3}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Move and save
                </Button>
            </Box>
        </Container>
     )
}

let mapStateToProps

export default connect(mapStateToProps, {
    warehousingSubmit
})(WarehousingSubmitButton)