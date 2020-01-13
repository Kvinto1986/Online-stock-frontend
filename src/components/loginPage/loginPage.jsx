import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import NavigationIcon from '@material-ui/icons/Navigation'
import useStyles from './loginStyles'
import LoginForm from './login'
import Link from '../header/Link'
import {Paper} from "@material-ui/core";

export default () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline/>
            <Box className={classes.paper}>
                <Link variant="button" color="primary" to='/' className={classes.link}>
                    <Fab variant="extended" aria-label="delete" color="primary" className={classes.fab}>
                        <NavigationIcon className={classes.extendedIcon}/>
                        Go to main page
                    </Fab>
                </Link>
                <Paper className={classes.paperForm}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Box mt={2} mb={2}>
                    <Typography component="h1" variant="h4">
                        Sign in form
                    </Typography>
                </Box>
                <LoginForm/>
                </Paper>
            </Box>
        </Container>
    )
}
