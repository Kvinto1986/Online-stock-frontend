import React from 'react'
import {Container, Paper, Table, TableBody} from '@material-ui/core'
import Row from './row'
import Form from './form'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from './style'
import TableContainer from "@material-ui/core/TableContainer";
import Grid from "@material-ui/core/Grid";

function Manager({services, onCreate, onDelete, errorAdd, editService}) {
    const classes = useStyles()

    return <Container component="main" maxWidth="md">
        <CssBaseline/>
        <Paper className={classes.paper}>
            <Form onCreate={onCreate} error={errorAdd}/>
            {services.length > 0 && (
                <Typography variant="h4" align="center" color="textSecondary">
                    List of services
                </Typography>
            )}
            <TableContainer className={classes.tableContainer}>
                <Table className={classes.table} size="small">
                    <TableBody>
                        {services.map(props => <Row {...props} onDelete={onDelete} key={props.id}
                                                    onEdit={editService}/>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    </Container>
}

export default Manager
