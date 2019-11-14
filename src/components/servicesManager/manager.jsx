import React from 'react'
import {Paper} from '@material-ui/core'
import {Container, Table, TableBody} from '@material-ui/core'
import Row from './row'
import Form from './form'
import Typography from '@material-ui/core/Typography'

function Manager({services, onCreate, onDelete, errorAdd, editService}) {

    return <Container>
        <Form onCreate={onCreate} error={errorAdd}/>
        {services.length > 0 && (
            <Typography variant="h4" align="center" color="textSecondary" component="p" style={{marginTop: '5%'}}>
                List of services
            </Typography>)}
        <Paper style={{marginTop: '3%'}}>
            <Table>
                <TableBody>
                    {services.map(props => <Row {...props} onDelete={onDelete} key={props.id} onEdit={editService}/>)}
                </TableBody>
            </Table>
        </Paper>
    </Container>

}

export default Manager