import React from 'react'
import EmployeeTable from './employeeTable'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import useStyles from './employeeStyle'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


export default ({currentUser, employees, errors, delEmployee}) => {

    const classes = useStyles()
    return (
        <Container component="main" maxWidth="xl">
            <CssBaseline/>
            <Typography component="h2" variant="h4" align="center" color="textPrimary" style={{marginTop: '3%'}}
                        gutterBottom>
                Employees of the company "{currentUser.company}"
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


