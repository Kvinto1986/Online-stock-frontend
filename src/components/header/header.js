import React from 'react';
import {logoutUser} from '../../actions/authenticationAction';

import Link from './Link';
import Button from '@material-ui/core/Button';

import {connect} from "react-redux";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Account from '../../resources/images/baseline-account_box-24px.svg'
import useStyles from './headerStyles'

const Header = (props) => {

    const logout = (e) => {
        e.preventDefault();
        props.logoutUser()
    };

    const classes = useStyles();

    const navigation = (linkArr) => {

        const navList = linkArr.map((elem) => {
            return (
                <Link key={elem.name} variant="button" color="primary" to={elem.link} className={classes.link}>
                    {elem.name}
                </Link>)
        });
        return (
            <nav>
                {navList}
            </nav>
        )
    };

    const NavigationBar = () => {
        switch (props.auth.user.role) {
            case 'mainAdmin':
                return navigation([
                    {name: 'Home', link: '/'},
                    {name: 'Registration new company ', link: '/newCompanyAdmin'},
                    {name: 'Reports', link: '/reports'},
                    {name: 'Companies', link: '/companiesList'}]);
            case 'companyAdmin':
                return navigation([
                    {name: 'Home', link: '/'},
                    {name: 'My warehouses', link: '/myWarehouses'},
                    {name: 'Create new user', link: '/createUser'},
                    {name: 'Company employees', link: '/employees'}]);
            case 'manager':
                return navigation([
                    {name: 'Stock delivery', link: '/stockDelivery'},
                    {name: 'Warehousing', link: '/warehousing'},
                    {name: 'manager3', link: '/manager3'},
                    {name: 'manager4', link: '/manager4'}]);
            case 'operator':
                return navigation([
                    {name: 'Search carrier', link: '/searchCarrier'},
                    {name: 'Add driver', link: '/driveRegistration'},
                    {name: 'All carrier', link: '/allCarrier'},
                    {name: 'operator4', link: '/operator4'}]);
            case 'controller':
                return navigation([
                    {name: 'My warehouses', link: '/myWarehouses'},
                    {name: 'controller2', link: '/controller2'},
                    {name: 'controller3', link: '/controller3'},
                    {name: 'controller4', link: '/controller4'}]);

            default:
                return null
        }
    };

    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="primary" noWrap className={classes.toolbarTitle}>
                    Company name
                </Typography>
                <NavigationBar
                />

                <img src={Account} className={classes.icon}/>
                <Typography variant="h6" color="inherit" noWrap>
                    {props.auth.user.email}
                </Typography>
                <Button color="primary" variant="outlined" className={classes.link} onClick={logout}>
                    Logout
                </Button>

            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {logoutUser})(Header)