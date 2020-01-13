import React from 'react'
import EmployeeTable from './employeesTable'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import useStyles from './style'
import Paper from '@material-ui/core/Paper'

export default ({employees, delEmployee,tableKey}) => {
    const classes = useStyles()
    return (
        <Container component="main" maxWidth="xl">
            <CssBaseline/>
            <Paper className={classes.form}>
                <EmployeeTable
                    key={tableKey}
                    employees={Object.values(employees)}
                    delEmployee={delEmployee}
                />
            </Paper>
        </Container>
    )
}
