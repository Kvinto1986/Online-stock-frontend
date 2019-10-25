import React from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
import {PropTypes} from 'prop-types'
import {GOOGLE_MAPS_API_KEY} from '../../constaints'

const MapContainer = ({mapVisibility, GPS, google}) => {

    return (
        mapVisibility && (
            <Map
                google={google}
                zoom={5}
                initialCenter={GPS}
                style={{width: '40%', height: '400px'}}
            >
                <Marker
                    name="warehousingAddress"
                    position={{
                        lat: GPS.lat,
                        lng: GPS.lng
                    }}
                />
            </Map>
        )
    )
}

MapContainer.propTypes = {
    initialCenter: PropTypes.object.isRequired,
    mapVisibility: PropTypes.bool.isRequired,
    GPS: PropTypes.object.isRequired,
    google: PropTypes.object.isRequired
}

export default GoogleApiWrapper({
    apiKey: GOOGLE_MAPS_API_KEY, 
    libraries: ['places']
})(MapContainer)