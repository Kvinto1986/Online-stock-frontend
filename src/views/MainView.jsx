import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {authUserFilter} from "../store/filters";
import {COMPANY_ADMIN, EMPLOYEE, MAIN_ADMIN} from "../constants/role.constants";
import EmployeeView from "./EmployeeView";
import MainAdminView from "./MainAdminView";
import CompanyAdminView from "./CompanyAdminView";
import {Redirect} from "react-router-dom";
import Header from "../components/header/header";
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import NavigationDrawer from "../components/drawers/NavigationDrawer";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
    viewContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100vh"
    },
    view: {
        flex: 1,
        display: "flex",
    },
    contentContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column"
    },
    content: {
        flex: 1,
        padding: 24
    },
    breadcrumbs: {
        padding: "8px 24px"
    },
}));

const MainView = () => {
    const user = useSelector(authUserFilter);
    const classes = useStyles();
    const [links, setLinks] = useState([
        {route: "/abc1", name: "abc1"},
        {route: "/abc2", name: "abc2"},
        {route: "/abc3", name: "abc3"},
    ]);

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
        <Box className={classes.viewContainer}>
            <Header/>
            <Box className={classes.view}>
                <NavigationDrawer/>
                <Box className={classes.contentContainer}>
                    <Box className={classes.breadcrumbs}>
                        <Breadcrumbs links={links}
                                     currentView={user.role}/>
                    </Box>
                    <Divider/>
                    <Paper className={classes.content} square="false">
                        <View/>
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
};

export default MainView;
