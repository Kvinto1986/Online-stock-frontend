import React, {useState} from 'react'
import {Container, Typography, Grid, Box, Button, Slider} from '@material-ui/core'
import {ValidatorForm} from 'react-material-ui-form-validator'
import InputText from '../../fields/textField'
import useStyles from '../warehousePageStyles'
import LoadAvatar from '../../common/loadAvatar/loadAvatar'
import Autocomplete from './googleAutocomplete'
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/AccountBox";


export default ({warehouse, totalArea, error, ...props}) => {

    const classes = useStyles()

    return (
        <Container maxWidth="sm" className={classes.createForm}>
            <Typography component="h1" variant="h5" className={classes.h5}>
                Fill the form
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
                <Grid container spacing={7}>
                    <Grid item xl={12} xs={12}>
                        <Autocomplete
                            addArea={props.addArea}
                            handleLocationChange={props.handleLocationChange}
                            location={props.location}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={7}>
                <Grid item xl={9}>
                <LoadAvatar setAvatar={props.setAvatar}/>
                </Grid>
                <Grid item xl={3}>
                    <Avatar src={props.avatarUrl} variant="square" className={classes.square}
                            style={{
                                width:'50%',
                                height:'70%',

                            }}>
                    </Avatar>
                </Grid>
                </Grid>
                <Grid item xs={12} style={{marginTop:'10%'}}>
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
