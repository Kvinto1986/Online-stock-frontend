import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import useStyles from './registerCompanyAdminStyles'
import Form from './registerCompanyAdminForm'
import Box from '@material-ui/core/Box'
import Paper from "@material-ui/core/Paper";

export default ({onSubmit, errors, keyReset}) => {
    const classes = useStyles()

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Box m={3}>
                    <Typography component="h1" variant="h5">
                        Crate new company admin
                    </Typography>
                </Box>
                <Form
                    onSubmit={onSubmit}
                    errors={errors}
                    key={keyReset}
                />
            </Paper>
        </Container>
    )
}

