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
        value: 'КГ',
        label: 'кг',
    },
    {
        value: 'BOX',
        label: 'box',
    },
];

const TtnForm = (props) => {
    const[ttn, setTtn] = useState({
        TTNNumber: '',
        date: '',
        driver: '',
        carNumber: '',
        description: '',
        products: []
    });
    const[options, setOptions] = useState([])
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [sender, setSender] = useState(false);
    const [carrierItem, setCarrierItem] = useState(false);
    const [carrierOptions, setCarrierOptions] = useState([]);
    const [values, setValues] = React.useState({
        type: 'КГ',
        name: '',
        amount: "1"
    });
    const addProduct = () => {
        setTtn({...ttn, products: [...ttn.products, values]})
        setValues({...values, name: '', amount: '1'})
    }
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    useEffect(() => {
        getAllSender()
            .then((res) => {
                setOptions(res.data);
            } )

        listCarriers()
            .then((res) => {
                setCarrierOptions(res.data);
            })
    }, []);
    const handleChangeCompanyName = e => {
        setSender(e.value)
    };
    const handleChangeCarrierName = e => {
        setCarrierItem(e.value);
    };
    const handleInputChange = (e) => {
        setTtn({...ttn, [e.target.name]: e.target.value});
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
            "carrier": carrierItem,
            "sender": sender,
            "registrar": props.user,
            "description": ttn.description,
            "carNumber": ttn.carNumber,
            "products": ttn.products
        };
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
                    <ValidatorForm className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    type="number"
                                    className="noNumerical"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="ttnNumber"
                                    label="TTN number"
                                    name="TTNNumber"
                                    autoComplete="TTNNumber"
                                    onChange={handleInputChange}
                                    value={ttn.TTNNumber}
                                />
                            </Grid>

                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Select
                                    placeholder="Sender"
                                    onChange={handleChangeCompanyName}
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
                                onChange={handleChangeCarrierName}
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
                                    required
                                    fullWidth
                                    id="info_about_сфк"
                                    label="Car Number"
                                    name="carNumber"
                                    autoComplete="car"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="info_about_carrier"
                                    label="Driver"
                                    name="driver"
                                    autoComplete="driver"
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} className={classes.container}>
                            <Grid item xs={5}>
                                <TextValidator
                                    type='text'
                                    variant="outlined"
                                    required
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
                                    id="standard-number"
                                    label="Number"
                                    value={values.amount}
                                    onChange={handleChange('amount')}
                                    type="number"
                                    min="0"
                                    className={classes.textField}
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
                                    onChange={handleInputChange}
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
    user: state.auth.user.name,
    prevPath: state.carriersReducer.prevPath
});
export default connect(mapStateToProps, {addPrevPath})(TtnForm);