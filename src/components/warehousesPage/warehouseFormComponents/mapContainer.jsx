import React from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
import {PropTypes} from 'prop-types'
import {GOOGLE_MAPS_API_KEY} from '../../../constaints'
import {Container, Box, Typography} from '@material-ui/core'
import useStyles from '../warehousePageStyles'
import '../overwrite.css'

const MapContainer = ({mapVisibility, GPS, google}) => {

    const classes = useStyles()

    return (
        mapVisibility &&
        <Container maxWidth="sm">
            <Box mb={5}>
                <Typography component="h1" variant="h5" className={classes.h5}>
                    Warehouse location
                </Typography>
            </Box>
            <Map
                google={google}
                zoom={5}
                initialCenter={GPS}
                style={{height: '400px'}}
            >
                <Marker
                    name="warehousingAddress"
                    position={{
                        lat: GPS.lat,
                        lng: GPS.lng
                    }}
                />
            </Map>
        </Container>
    )
}

MapContainer.propTypes = {
    mapVisibility: PropTypes.bool.isRequired,
    GPS: PropTypes.object.isRequired,
    google: PropTypes.object.isRequired
}

export default GoogleApiWrapper({
    apiKey: GOOGLE_MAPS_API_KEY, 
    libraries: ['places']
})(MapContainer)