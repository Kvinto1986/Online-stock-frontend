import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Slider from '@material-ui/core/Slider';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import AreaCard from './warehouseCard'
import {registerWarehouse} from '../../actions/warehouseAction';

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

import useStyles from './warehousePageStyles'
import warehouseImage from '../../resources/images/warehouse-icon-png-8.jpg'
import {connect} from "react-redux";

const WarehouseForm = (props) => {
    const classes = useStyles();

    const [values, setValues] = useState({
        name: '',
        license: '',
        type: false,
        totalArea: '',
    });

    const reset = () => {

        setValues({
            ...values, role: 'companyAdmin',
            name: '',
            license: '',
            type: false,
            totalArea: ''
        });

        setTotalArea(10);
        setOriginalArea(0);
        setList([]);
        setAddArea(false);
        setCurrentArea(10);

        Swal.fire({
            type: 'success',
            title: 'Congratulations!',
            text: 'Warehouse successfully created !',
            allowOutsideClick: false
        }).then(()=>{
            window.location.reload()
        })
    };

    const [totalArea, setTotalArea] = useState(10);
    const [originalArea, setOriginalArea] = useState(0);
    const [list, setList] = useState([]);
    const [addArea, setAddArea] = useState(false);
    const [currentArea, setCurrentArea] = useState(10);


    const handleInputChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    const handleChangeArea = (value) => {
        setTotalArea(value);
    };

    const handleChangeCurrentArea = (value) => {
        setCurrentArea(value);
    };

    const handleChangeAddArea = (e) => {
        e.preventDefault();
        if (totalArea > 0) {
            setAddArea(true);
            setOriginalArea(totalArea)
        }
    };

    const handleAddArea = (e) => {
        e.preventDefault();

        handleChange(e, totalArea - currentArea);

        const area = {
            area: currentArea,
            type: values.type
        };

        setList([...list, area]);

    };

    const handleDeleteArea = (index, area) => {

        console.log(index)
        console.log( area)
        const array = [...list];

        array.splice(index, 1);

        setList([...array]);

        setTotalArea(totalArea + area)

    };

    const unlock=()=>{
        setAddArea(false);
        setList([]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const warehouse = {
            adminId:props.auth.user._id,
            name: values.name,
            license: values.license,
            totalArea: originalArea,
            areas: list
        };

        props.registerWarehouse(warehouse,reset,unlock);


    };

    const handleChange = (event, newValue) => {
        setTotalArea(newValue);
    };

    return (
        <Container component="main" maxWidth="xl">
            <CssBaseline/>
            <div className={classes.main}>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Create new warehouse
                    </Typography>
                    <ValidatorForm className={classes.form} noValidate onSubmit={handleChangeAddArea}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextValidator
                                    required
                                    fullWidth
                                    label="Warehouse name"
                                    name="name"
                                    disabled={addArea}
                                    value={values.name}
                                    onChange={handleInputChange}
                                    validators={['required', 'minStringLength:2', 'maxStringLength:30']}
                                    errorMessages={['this field is required', 'the value must be at least 2 characters', 'the value must be no more than 30 characters']}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextValidator
                                    required
                                    fullWidth
                                    label="Warehouse license number"
                                    name="license"
                                    type='number'
                                    disabled={addArea}
                                    value={values.license}
                                    onChange={handleInputChange}
                                    validators={['required', 'minStringLength:15', 'maxStringLength:15']}
                                    errorMessages={['this field is required', 'the value must be 15 characters', 'the value must be 15 characters']}
                                />
                            </Grid>
                            <span style={{color: 'red'}}>{props.errors.license}</span>
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
                                <span style={{color: 'red'}}>{props.errors.area}</span>
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
                        </Grid>
                    </ValidatorForm>

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
                                                value={values.type}
                                                onChange={handleInputChange}
                                                inputProps={{
                                                    name: 'type',
                                                }}
                                            >
                                                <MenuItem value='heated'>Heated</MenuItem>
                                                <MenuItem value='unheated'>Unheated</MenuItem>
                                                <MenuItem value='cooling'>Cooling chamber</MenuItem>
                                                <MenuItem value='outdoor'>Outdoor</MenuItem>
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
                            {totalArea > 0 && currentArea > 0 && values.type ? (<CardActions>
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
                    {<img src={warehouseImage} className={classes.icon}/>}
                    <AreaCard
                        handleDeleteArea={handleDeleteArea}
                        list={list}
                    />
                </div>

            </div>


        </Container>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {registerWarehouse})(WarehouseForm)
