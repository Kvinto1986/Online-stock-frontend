import React from "react";
import useStyles from "./registerEmployeeStyles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import RegisterUser from "./registerEmployee";


export default () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5" className={classes.formName}>
                    New user information
                </Typography>
                <RegisterUser/>
            </div>
        </Container>
    )
};