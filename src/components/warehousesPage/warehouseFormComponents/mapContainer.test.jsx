import React from 'react'
import {render} from '@testing-library/react'
import {Container, Box, Typography} from '@material-ui/core'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
import {GOOGLE_MAPS_API_KEY} from '../../../config/constaints'

it('should map be rendered', async () => {
    const MapContainer = (props) => {
        return (
            <Container maxWidth="sm">
                <Box mb={5}>
                    <Typography component="h1" variant="h5">
                        Warehouse location
                    </Typography>
                </Box>
                <Map
                    google={{maps: {}}}
                    zoom={5}
                    initialCenter={props.GPS}
                    style={{height: '400px'}}
                >
                    <Marker
                        name="warehousingAddress"
                        position={{
                            lat: props.GPS.lat,
                            lng: props.GPS.lng
                        }}
                    />
                </Map>
            </Container>
        )
    }

    const MapWrapper = GoogleApiWrapper({
        apiKey: GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    })(MapContainer)

    const data = {
        mapVisibility: true,
        GPS: {lat: 30, lng: 30}
    }

    const {getByText} = render(<MapWrapper {...data}/>)

    getByText('Loading...')
})
