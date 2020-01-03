import React from "react"
import useStyles from "./registerEmployeeStyles"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import RegisterUser from "./index"
import {Paper} from "@material-ui/core"


export default () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h5" className={classes.formName}>
                    New user information
                </Typography>
                <RegisterUser/>
            </Paper>
        </Container>
    )
};
