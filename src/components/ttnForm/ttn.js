import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import useStyles from './ttnStyles';
import Assignment from "@material-ui/icons/Assignment";
import DateFnsUtils from '@date-io/date-fns';
import {getAllSender} from '../../servies/senderServies';
import {listCarriers} from '../../servies/carrierServies';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {addPrevPath} from "../../actions/carrierAction";

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {addTtn} from "../../servies/ttn";
import Select from "react-select";

const currencies = [
    {
        value: 'KG',
        label: 'KG',
    },
    {
        value: 'BOX',
        label: 'BOX',
    },
];

const TtnForm = (props) => {
    const [carrierOptions, setCarrierOptions] = useState([])
    const [selectedDate, setSelectedDate] = React.useState(new Date())
    const[ttn, setTtn] = useState({
        TTNNumber: '',
        driver: '',
        carNumber: '',
        description: '',
        products: [],
    });
    const[options, setOptions] = useState({
        sender: [],
        carrier: [],
        data: Math.random()
    })
    const[selectItems, setSelectItems] = useState({
        sender: '',
        carrier: '',
    });

    const [values, setValues] = useState({
        type: 'KG',
        name: '',
        amount: "1",
        id: ''
    });
    const addProduct = () => {
        values.id = `f${(~~(Math.random()*1e8)).toString(16)}`
        setTtn({...ttn, products: [...ttn.products, values]})
        setValues({...values, name: '', amount: '1', warehouseID: '', warehouseAreas: []})
    }
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    useEffect( () => {
        (async () => {
            const  allCarriers = await listCarriers();
            const allSender = await getAllSender();
            setOptions(allSender);
            setCarrierOptions(allCarriers);
        })();

    }, []);
    const handleChangeSelect = name => event => {
        setSelectItems({...selectItems, [name]: event.value})
    };
    const handleInputChange = name => event => {
        setTtn({...ttn, [event.target.name]: event.target.value});
    }
    function handleDateChange(date) {
        setSelectedDate(date);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const ttnInfo = {
           "date": selectedDate,
           "TTNNumber": ttn.TTNNumber,
            "driver": ttn.driver,
            "carrier": selectItems.carrier,
            "sender": selectItems.sender,
            "registrar": props.user,
            "description": ttn.description,
            "carNumber": ttn.carNumber,
            "products": ttn.products
        }
        addTtn(ttnInfo)
            .then((res) => {props.history.push(props.prevPath)})
            .catch((err) => {console.log(err)})
         }
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <Assignment />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add TTN
                    </Typography>
                    <ValidatorForm className={classes.form}  onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    InputProps={{ min: "0", max: "14" } }
                                    type="number"
                                    className="noNumerical"
                                    variant="outlined"
                                    fullWidth
                                    id="ttnNumber"
                                    label="TTN number"
                                    name="TTNNumber"
                                    value={ttn.TTNNumber}
                                    validators={['minNumber:0', 'required']}
                                    errorMessages={['Ttn number will be positive', 'This field is required']}
                                    onChange={handleInputChange("TTNNumber")}
                                />
                            </Grid>

                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Select
                                    placeholder="Sender"
                                    name='sender'
                                    onChange={handleChangeSelect('sender')}
                                    options={options}
                                    className={classes.select}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        className={classes.dateInput}
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date"
                                        name='date'
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                        </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Select
                                placeholder="Carrier"
                                name="carrier"
                                onChange={handleChangeSelect("carrier")}
                                options={carrierOptions}
                                className={classes.select}
                            />
                        </Grid>

                    </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    className="noNumerical"
                                    variant="outlined"
                                    fullWidth
                                    id="info_about_car"
                                    label="Car Number"
                                    name="carNumber"
                                    autoComplete="car"
                                    value={ttn.carNumber}
                                    validators={['minNumber:0', 'required']}
                                    errorMessages={['Ttn number will be positive', 'This field is required']}
                                    onChange={handleInputChange('carNumber')}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    variant="outlined"
                                    fullWidth
                                    id="info_about_carrier"
                                    label="Driver"
                                    name="driver"
                                    autoComplete="driver"
                                    value={ttn.driver}
                                    validators={['required','matchRegexp:[a-z, A-Z, а-я, А-Я]']}
                                    errorMessages={['This field is required','Driver name will be no numerical']}
                                    onChange={handleInputChange('driver')}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className={classes.container}>
                            <Grid item xs={5}>
                                <TextValidator
                                    type='text'
                                    variant="outlined"
                                    fullWidth
                                    id="info-name-amount"
                                    label="Product"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange("name")}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    id="amount"
                                    label="Amount"
                                    value={values.amount}
                                    onChange={handleChange('amount')}
                                    type="number"
                                    className={classes.amount}
                                    InputProps={{ inputProps: { min: 1 }}}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                  <TextField
                                    id="filled-select-currency"
                                    select
                                    label="Select"
                                    className={classes.textField}
                                    value={values.type}
                                    onChange={handleChange('type')}
                                    SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                    }}
                                    variant="filled"
                                >
                                    {currencies.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Button variant="outlined" onClick={addProduct}> ADD PRODUCT</Button>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    className={classes.description}
                                    defaultValue="Description"
                                    rows={5}
                                    name='description'
                                    onChange={handleInputChange('description')}
                                />
                            </Grid>
                        </Grid>
                       <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Add
                        </Button>
                    </ValidatorForm>
                </div>
            </Container>
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user.email,
    prevPath: state.carriersReducer.prevPath
});
export default connect(mapStateToProps, {addPrevPath})(TtnForm);