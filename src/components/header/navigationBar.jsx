import useStyles from "./headerStyles";
import Link from "./Link";
import React from "react";

export default ({user}) => {
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

    switch (user.role) {
        case 'mainAdmin':
            return navigation([
                {name: 'Home', link: '/'},
                {name: 'Registration new company ', link: '/newCompanyAdmin'},
                {name: 'Reports', link: '/reports'},
                {name: 'Companies', link: '/companiesList'}]);

        case 'companyAdmin':
            return navigation([
                {name: 'Home', link: '/'},
                {name: 'Create new employee', link: '/createUser'},
                {name: 'My warehouses', link: '/myWarehouses'},
                {name: 'Company employees', link: '/employees'}]);

        case 'employee':
            let arr = [];

            if (user.position === 'manager') {
                arr = [
                    {name: 'Stock delivery', link: '/stockDelivery'},
                    {name: 'Warehousing', link: '/warehousing'},
                    {name: 'manager3', link: '/manager3'},
                    {name: 'manager4', link: '/manager4'}]
            }
            if (user.position === 'operator') {
                arr = [
                    {name: 'Search carrier', link: '/searchCarrier'},
                    {name: 'Add driver', link: '/driveRegistration'},
                    {name: 'All carrier', link: '/allCarrier'},
                    {name: 'operator4', link: '/operator4'}]
            }
            if (user.position === 'controller') {
                arr = [
                    {name: 'My warehouses', link: '/myWarehouses'},
                    {name: 'controller2', link: '/controller2'},
                    {name: 'controller3', link: '/controller3'},
                    {name: 'controller4', link: '/controller4'}]
            }

            return navigation(arr);

        default:
            return null
    }
};