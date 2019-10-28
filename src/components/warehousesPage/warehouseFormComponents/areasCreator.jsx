import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Slider from '@material-ui/core/Slider'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import useStyles from '../warehousePageStyles'
import {PropTypes} from 'prop-types'

const AreasCreator = ({warehouse, totalArea, currentArea, ...props}) => {

    const classes = useStyles()

    return (
        <Container maxWidth="sm">
            <Card className={classes.card}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography component="h1" variant="h5" className={classes.h5}>
                                Create warehouse area
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={classes.formControl} required>
                                <InputLabel>Type</InputLabel>
                                <Select
                                    value={warehouse.type}
                                    onChange={props.handleInputChange}
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
                                getAriaValueText={props.handleChangeCurrentArea}
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
                {(totalArea > 0 && currentArea > 0 && warehouse.type) && (<CardActions>
                    <Button variant="contained" color="primary"
                        onClick={props.handleAddArea}>Add </Button>
                </CardActions>)}
            </Card>
        </Container>
    )
}

AreasCreator.propTypes = {
    warehouse: PropTypes.object.isRequired,
    totalArea: PropTypes.number.isRequired,
    currentArea: PropTypes.number.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleChangeCurrentArea: PropTypes.func.isRequired,
    handleAddArea: PropTypes.func.isRequired
}

export default AreasCreator