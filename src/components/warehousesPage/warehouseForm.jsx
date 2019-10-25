import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Slider from '@material-ui/core/Slider'
import {ValidatorForm} from 'react-material-ui-form-validator'
import AreaCard from './warehouseCard'
import InputText from '../fields/textField'
import MapContainer from './mapContainer' 
import useStyles from './warehousePageStyles'
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete'
import warehouseImage from '../../resources/images/warehouse-icon-png-8.jpg'

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
        <Container component="main" maxWidth="xl">
            <Box mt={7}>
                <CssBaseline/>
                <div className={classes.main}>
                    <div className={classes.paper}>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h5">
                                Create new warehouse
                            </Typography>
                            <ValidatorForm className={classes.form} noValidate onSubmit={handleChangeAddArea}>
                                <Grid item xs={12}>
                                    <InputText
                                        min={2}
                                        max={30}
                                        pattern={/.*/}
                                        required
                                        fullWidth
                                        label="Warehouse name"
                                        name="name"
                                        disabled={addArea}
                                        value={warehouse}
                                        handleChange={setWarehouse}
                                        error={error}
                                        helperClass={classes.error}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputText
                                        min={15}
                                        max={15}
                                        pattern={/^[0-9]*$/}
                                        required
                                        fullWidth
                                        label="Warehouse license number"
                                        name="license"
                                        disabled={addArea}
                                        value={warehouse}
                                        error={error}
                                        handleChange={setWarehouse}
                                        helperClass={classes.error}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Box mb={10}>
                                        <InputText
                                            pattern={/.*/}
                                            required
                                            fullWidth
                                            label="Warehouse address"
                                            name="address"
                                            disabled={addArea}
                                            value={warehouse}
                                            error={error}
                                            handleChange={setWarehouse}
                                            helperClass={classes.error}
                                        />
                                        <Button onClick={onSelectLocation} color="primary" variant="contained">
                                            Coordinates
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography gutterBottom>
                                        Warehouse total area (m<sup>2</sup>)
                                    </Typography>
                                    <Slider
                                        value={totalArea}
                                        onChange={handleChange}
                                        defaultValue={0}
                                        getAriaValueText={handleChangeArea}
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="auto"
                                        step={5}
                                        marks
                                        min={0}
                                        max={1000}
                                        disabled={addArea}
                                    />
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disabled={addArea}
                                >
                                    Save info
                                </Button>
                            </ValidatorForm>
                        </Container>
                        {addArea ? (
                            <Card className={classes.card}>
                                <CardContent>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <Typography component="h1" variant="h5">
                                                Create warehouse area
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl className={classes.formControl} required>
                                                <InputLabel>Type</InputLabel>
                                                <Select
                                                    value={warehouse.type}
                                                    onChange={handleInputChange}
                                                    inputProps={{
                                                        name: 'type',
                                                    }}
                                                >
                                                    <MenuItem value="heated">Heated</MenuItem>
                                                    <MenuItem value="unheated">Unheated</MenuItem>
                                                    <MenuItem value="cooling">Cooling chamber</MenuItem>
                                                    <MenuItem value="outdoor">Outdoor</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography component="h1" variant="h6">
                                                Available area: {totalArea}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography id="discrete-slider" gutterBottom>
                                                Area (m<sup>2</sup>)
                                            </Typography>
                                            <Slider
                                                getAriaValueText={handleChangeCurrentArea}
                                                defaultValue={0}
                                                valueLabelDisplay="auto"
                                                step={5}
                                                marks
                                                min={0}
                                                max={totalArea}
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                {totalArea > 0 && currentArea > 0 && warehouse.type ? (<CardActions>
                                    <Button variant="contained" color="primary"
                                        onClick={handleAddArea}>Add </Button>
                                </CardActions>) : null}

                            </Card>
                        ) : null}

                        {addArea && totalArea === 0 ? (
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
                        ) : null}
                    </div>
                    <div className={classes.paperList}>
                        <MapContainer
                            GPS={mapState.GPS}
                            mapVisibility={mapState.mapVisibility}
                        />
                        <Box mt={50}>
                            <AreaCard
                                handleDeleteArea={handleDeleteArea}
                                list={list}
                            />
                        </Box>
                            
                    </div>
                </div>
            </Box>
        </Container>
    )
}
