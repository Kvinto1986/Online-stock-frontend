import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import useStyles from "./loginStyles";
import LoginForm from './login'
import Link from '../header/Link'


export default () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box className={classes.paper}>
                <Fab variant="extended" aria-label="delete" color="primary" className={classes.fab}>
                    <NavigationIcon className={classes.extendedIcon}/>
                    <Link variant="button" color="primary" to='/' className={classes.link}>
                        Go to main page
                    </Link>
                </Fab>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h4">
                    Sign in
                </Typography>
                <LoginForm/>
            </Box>
        </Container>
    );
};
