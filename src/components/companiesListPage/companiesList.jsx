import React, {useEffect, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './companiesListStyles'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import swal from '../swal/findSwal';

import Moment from 'react-moment';

import 'sweetalert2/src/sweetalert2.scss'
import {getCompaniesList, getCompany, changeStatus} from '../../actions/companyAdminAction';
import Box from '@material-ui/core/Box'

const Companies = (props) => {
    const classes = useStyles();


    const [companyName, setCompanyName] = useState(props.currentCompany.email);
    const [company, setCompany] = useState(props.currentCompany);

    const handleChangeCompanyName = (e) => {
        setCompanyName(e.target.value)
    };

    const handleSubmit = () => {
        props.getCompany(companyName,setCompany);
    };

    const handleChangeStatus = () => {
        props.changeStatus(props.currentCompany.email,{active:!props.currentCompany.active},swal);

    };

    useEffect(() => setCompany(props.currentCompany), []);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Container component="main" className={classes.main} maxWidth="sm">
                <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.main}>
                    Find company by email
                </Typography>
                <Paper className={classes.rootPaper}>
                    <InputBase
                        value={companyName}
                        className={classes.input}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search google maps' }}
                        onChange={handleChangeCompanyName}
                    />
                    <Divider className={classes.divider} orientation="vertical" />
                    <Button onClick={handleSubmit}>
                        <IconButton className={classes.iconButton} aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                    </Button>

                </Paper>
                <Box mt={1}>
                <span style={{color: 'red'}}>{props.errors.user}</span>
                </Box>
                {company.email ? (<Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Company name: <span className={classes.bullet}>{props.currentCompany.company}</span>
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Company admin email: <span className={classes.bullet}>{props.currentCompany.email}</span>
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Creation date: <span className={classes.bullet}><Moment format="D MMM YYYY" withTitle>{props.currentCompany.date}</Moment></span>
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Status: <span
                            className={classes.bullet}>{props.currentCompany.active ? ('Active') : ('Not active')}</span>
                        </Typography>

                    </CardContent>
                    <CardActions>
                        {props.currentCompany.active ? (
                                <Button size="small" variant="contained" color="secondary"
                                        onClick={handleChangeStatus}>Deactivate</Button>)
                            : (<Button size="small" variant="contained" color="primary"
                                       onClick={handleChangeStatus}>Activate</Button>)}
                    </CardActions>
                </Card>) : null}

            </Container>
        </div>
    );
};

Companies.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    companiesList: state.companiesList,
    currentCompany: state.currentCompany
});

export default connect(mapStateToProps, {getCompaniesList, getCompany, changeStatus})(Companies)
