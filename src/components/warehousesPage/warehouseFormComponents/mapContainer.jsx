import React from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
import {PropTypes} from 'prop-types'
import {GOOGLE_MAPS_API_KEY} from '../../../config/constaints'
import {Container, Box, Typography} from '@material-ui/core'
import useStyles from '../warehousePageStyles'
import '../overwrite.css'

const MapContainer = ({mapVisibility, GPS, google, theme, zoom, mapHeight, withTitle}) => {

    const classes = useStyles()

    return (
        mapVisibility &&
        <Container maxWidth="sm">
            <Box mb={5}>
                {withTitle && (<Typography component="h1" variant="h5" className={theme ? `classes.${theme}` : classes.h5 }>
                    Warehouse location
                </Typography>)}
            </Box>
            <div className="sellerMap">
                <Map
                    google={google}
                    zoom={zoom}
                    initialCenter={GPS}
                    style={{height:`${mapHeight}px`}}
                >
                    <Marker
                        name="warehousingAddress"
                        position={{
                            lat: GPS.lat,
                            lng: GPS.lng
                        }}
                    />
                </Map>
            </div>
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
