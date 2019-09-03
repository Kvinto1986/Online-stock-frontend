import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavigationBar from "./navigationBar";
import Account from "../../resources/images/baseline-account_box-24px.svg";
import Button from "@material-ui/core/Button";
import React from "react";
import useStyles from './headerStyles'


export default ({user,logout}) => {
    const classes = useStyles();

    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="primary" noWrap className={classes.toolbarTitle}>
                    Company name
                </Typography>
                <NavigationBar
                    user={user}
                />
                <img src={Account} className={classes.icon}/>
                <Typography variant="h6" color="inherit" noWrap>
                    {user.email}
                </Typography>
                <Button color="primary" variant="outlined" className={classes.link} onClick={logout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};