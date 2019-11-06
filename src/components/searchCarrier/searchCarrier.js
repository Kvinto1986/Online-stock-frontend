import React, {useState } from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useStyles from "../searchCarrier/searchCarrierStyles";
import {findDriver} from "../../servies/driverServies";
import SearchIcon from '@material-ui/icons/Search';
import {connect} from 'react-redux';
import {addPrevPath, searchCarrier} from '../../actions/carrierAction';
const SearchCarrier = (props) => {
    const [unp, setPassport] = useState('');
    const [driver, setDriver] = useState('');

    const handleInputChange = (e) => {
        setPassport(e.target.value);
    };
    const handleDriverInputChange = (e) => {
        setDriver(e.target.value)
    };
    const handleSubmitCarrier = (e) => {
        e.preventDefault();
        props.addPrevPath(props.location.pathname)

        props.searchCarrier(unp, props.history)
};
    const handleSubmitDriver = (e) => {
        e.preventDefault();

            props.findDriver(driver, props.history)
    };

    const classes = useStyles();

    return (
    <React.Fragment>
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <SearchIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Search Carrier
                </Typography>
                <ValidatorForm className={classes.form} noValidate onSubmit={handleSubmitCarrier}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextValidator
                            type="number"
                            className="noNumerical"
                            variant="outlined"
                            required
                            fullWidth
                            id="company"
                            label="UNP"
                            name="company"
                            autoComplete="company"
                            onChange={handleInputChange}
                        />
                    </Grid>
                        {props.carrierErr}
                </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Search
                    </Button>
                </ValidatorForm>
                <Avatar className={classes.avatar}>
                     <SearchIcon />
                 </Avatar>
                <Typography component="h1" variant="h5">
                    Search Driver
                </Typography>

                <ValidatorForm className={classes.form} noValidate onSubmit={handleSubmitDriver}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextValidator
                                variant="outlined"
                                required
                                fullWidth
                                id="driver"
                                label="Driver license"
                                name="driver"
                                autoComplete="driver"
                                onChange={handleDriverInputChange}
                            />
                        </Grid>
                        {props.driverErr}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                    >
                        Search
                    </Button>
                </ValidatorForm>
            </div>
        </Container>

    </React.Fragment>

    )

}

const mapStateToProps = state => ({
    driverErr: state.errors.driver,
    carrierErr: state.errors.carrier,
    store: state,
    prevPath: state.carriersReducer.prevPath
})

export default connect(mapStateToProps, {addPrevPath, searchCarrier, findDriver} )(SearchCarrier)
