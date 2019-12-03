import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import AreaCard from './warehouseCard'
import useStyles from './warehousePageStyles'
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete'
import WarehouseDetailsForm from './warehouseFormComponents/warehouseDetailsForm'
import AreasCreator from './warehouseFormComponents/areasCreator'
import MapContainer from './warehouseFormComponents/mapContainer'

const initialMapState = {
    mapVisibility: false,
    GPS: {}
}

export default ({onSubmit, error, company}) => {
    const classes = useStyles()

    const [warehouse, setWarehouse] = useState({
        name: '',
        license: '',
        type: false,
        totalArea: '',
        company: company,
        address: ''
    })

    const [totalArea, setTotalArea] = useState(10)
    const [originalArea, setOriginalArea] = useState(0)
    const [list, setList] = useState([])
    const [addArea, setAddArea] = useState(false)
    const [currentArea, setCurrentArea] = useState(10)
    const [mapState, setMapState] = useState(initialMapState)

    const handleInputChange = (e) => {
        setWarehouse({...warehouse, [e.target.name]: e.target.value})
    }

    const handleChangeArea = (value) => {
        setTotalArea(value)
    }

    const handleChangeCurrentArea = (value) => {
        setCurrentArea(value)
    }

    const handleChangeAddArea = (e) => {
        e.preventDefault()
        if (totalArea > 0) {
            setAddArea(true)
            setOriginalArea(totalArea)
        }
    }

    const handleAddArea = (e) => {
        e.preventDefault()
        handleChange(e, totalArea - currentArea)
        const area = {
            area: currentArea,
            type: warehouse.type,
            freeArea: currentArea,
            products: []
        }
        setList([...list, area])
    }

    const handleDeleteArea = (index, area) => {
        const array = [...list]
        array.splice(index, 1)
        setList([...array])
        setTotalArea(totalArea + area)
    }

    const unlock = () => {
        setAddArea(false)
        setList([])
    }

    const onSelectLocation = () => {
        const addressName = warehouse.address

        setMapState({...mapState, mapVisibility: false})

        geocodeByAddress(addressName)
          .then(results => getLatLng(results[0]))
          .then(latLng => {
              setMapState({
                  ...mapState,
                  GPS: latLng,
                  mapVisibility: true
              })
          })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const areas = list.map((elem, index) => {
            elem.index = index + 1
            return elem
        })

        const data = {
            company: warehouse.company,
            name: warehouse.name,
            license: warehouse.license,
            totalArea: originalArea,
            areas: areas,
            freeArea: originalArea,
            address: warehouse.address,
            GPS: mapState.GPS
        }

        onSubmit(data, unlock)
    }

    const handleChange = (e, newValue) => {
        setTotalArea(newValue)
    }

    return (
      <Container maxWidth="xl">
          <Box mt={7}>
              <CssBaseline/>
              <div className={classes.main}>
                  <div className={classes.paper}>
                      <WarehouseDetailsForm
                        warehouse={warehouse}
                        totalArea={totalArea}
                        error={error}
                        handleChangeArea={handleChangeArea}
                        handleChangeAddArea={handleChangeAddArea}
                        onSelectLocation={onSelectLocation}
                        addArea={addArea}
                        setWarehouse={setWarehouse}
                        handleChange={handleChange}
                      />
                      {addArea && (
                        <AreasCreator
                          warehouse={warehouse}
                          totalArea={totalArea}
                          currentArea={currentArea}
                          handleInputChange={handleInputChange}
                          handleChangeCurrentArea={handleChangeCurrentArea}
                          handleAddArea={handleAddArea}
                        />
                      )}
                      {(addArea && totalArea === 0) && (
                        <Container maxWidth="sm">
                            <Box mt={10}>
                                <Button
                                  type="submit"
                                  fullWidth
                                  variant="contained"
                                  color="primary"
                                  className={classes.submit}
                                  onClick={handleSubmit}
                                >
                                    Create warehouse
                                </Button>
                            </Box>
                        </Container>
                      )}
                  </div>
                  <div className={classes.paperList}>
                      <MapContainer
                        mapVisibility={mapState.mapVisibility}
                        GPS={mapState.GPS}
                        zoom={15}
                        mapHeight={200}/>
                      {list.length > 0 && (
                        <Box mt={77}>
                            <Container maxWidth="sm">
                                <AreaCard
                                  handleDeleteArea={handleDeleteArea}
                                  list={list}
                                />
                            </Container>
                        </Box>
                      )}
                  </div>
              </div>
          </Box>
      </Container>
    )
}
