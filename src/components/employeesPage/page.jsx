import React from 'react'
import EmployeeTable from './table'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import useStyles from './style'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


export default ({company, employees, delEmployee}) => {
    const classes = useStyles()
    return (
        <Container component="main" maxWidth="xl">
            <CssBaseline/>
            <Typography
                component="h2"
                variant="h4"
                align="center"
                color="textPrimary"
                className={classes.companyName}
                gutterBottom
            >
                Employees of the company "{company}"
            </Typography>
            <Paper className={classes.form}>
                <EmployeeTable
                    employees={employees}
                    delEmployee={delEmployee}
                />
            </Paper>
        </Container>
    )
}