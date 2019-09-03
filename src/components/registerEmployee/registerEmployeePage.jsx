import React from "react";
import useStyles from "./registerEmployeeStyles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import RegisterUserForm from "./registerEmployeeForm";


export default ({onSubmit,errors,currentUser}) => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5" className={classes.formName}>
                    New user information
                </Typography>
                <RegisterUserForm
                    onSubmit={onSubmit}
                    errors={errors}
                    currentUser={currentUser}
                />
            </div>
        </Container>
    )
};