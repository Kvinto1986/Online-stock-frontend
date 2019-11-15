import React from 'react'
import {Container, Typography, Grid, Box, Button, Slider} from '@material-ui/core'
import {ValidatorForm} from 'react-material-ui-form-validator'
import InputText from '../../fields/textField'
import useStyles from '../warehousePageStyles'

export default ({warehouse, totalArea, error, ...props}) => {
    
    const classes = useStyles()

    return (
        <Container maxWidth="sm">
            <Typography component="h1" variant="h5" className={classes.h5}>
                Create new warehouse
            </Typography>
            <ValidatorForm className={classes.form} noValidate onSubmit={props.handleChangeAddArea}>
                <Grid item xs={12}>
                    <InputText
                        min={2}
                        max={30}
                        pattern={/.*/}
                        required
                        fullWidth
                        label="Warehouse name"
                        name="name"
                        disabled={props.addArea}
                        value={warehouse}
                        handleChange={props.setWarehouse}
                        error={error}
                        helperClass={classes.error}
                    />
                </Grid>
                <Grid item xs={12}>
                    <InputText
                        min={10}
                        max={10}
                        pattern={/^[0-9]*$/}
                        required
                        fullWidth
                        label="Warehouse license number"
                        name="license"
                        disabled={props.addArea}
                        value={warehouse}
                        error={error}
                        handleChange={props.setWarehouse}
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
                            disabled={props.addArea}
                            value={warehouse}
                            error={error}
                            handleChange={props.setWarehouse}
                            helperClass={classes.error}
                        />
                        <Button 
                            onClick={props.onSelectLocation} 
                            disabled={props.addArea} 
                            color="primary" 
                            variant="contained"
                        >
                            Coordinates
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.h5} gutterBottom>
                        Warehouse total area (m<sup>2</sup>)
                    </Typography>
                    <Slider
                        value={totalArea}
                        onChange={props.handleChange}
                        defaultValue={0}
                        getAriaValueText={props.handleChangeArea}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={5}
                        marks
                        min={0}
                        max={1000}
                        disabled={props.addArea}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={props.addArea}
                    >
                        Save info
                    </Button>
                </Grid>
            </ValidatorForm>
        </Container>
    )
}
