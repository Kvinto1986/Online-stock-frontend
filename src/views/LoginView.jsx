import React from 'react';
import Login from "../components/loginPage/loginPage";
import Landing from "../components/landingPage/landing";
import Footer from "../components/footer/footer";
import {Route, Switch} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    loginPage: {
        height: '100vh',
        display: "flex",
        flexDirection: "column"
    },
    loginPageContent: {
        flex: 1,
    },
});

const LoginView = () => {

    const classes = useStyles();

    return (
        <Box className={classes.loginPage}>
            <Box className={classes.loginPageContent}>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route component={Landing}/>
                </Switch>
            </Box>
            <Footer/>
        </Box>
    );
};

export default LoginView;
