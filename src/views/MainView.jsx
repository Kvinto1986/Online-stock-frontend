import React from 'react';
import {useSelector} from "react-redux";
import {authUserFilter} from "../store/filters";
import {COMPANY_ADMIN, EMPLOYEE, MAIN_ADMIN} from "../constants/role.constants";
import EmployeeView from "./EmployeeView";
import MainAdminView from "./MainAdminView";
import CompanyAdminView from "./CompanyAdminView";
import {Redirect} from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    viewContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100vh"
    },
    view: {
        flex: 1,
        margin: 32,
        padding: 24,
    },
}));

const MainView = () => {
    const user = useSelector(authUserFilter);
    const classes = useStyles();

    const View = () => {
        switch (user.role) {
            case EMPLOYEE:
                return <EmployeeView/>;
            case MAIN_ADMIN:
                return <MainAdminView/>;
            case COMPANY_ADMIN:
                return <CompanyAdminView/>;
            default:
                return <Redirect to="/"/>;
        }
    };

    return (
        <div className={classes.viewContainer}>
            <Header/>
            <Paper className={classes.view}>
                <View/>
            </Paper>
            <Footer/>
        </div>
    )
};

export default MainView;
