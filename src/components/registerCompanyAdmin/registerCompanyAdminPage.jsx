import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import useStyles from './registerCompanyAdminStyles'
import Form from './registerCompanyAdminForm'

export default ({onSubmit,errors}) => {
    const classes = useStyles()

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    New company admin form
                </Typography>
                <Form
                    onSubmit={onSubmit}
                    errors={errors}
                />
            </div>
        </Container>
    )
};

