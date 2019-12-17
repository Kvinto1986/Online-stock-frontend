import React from 'react'
import {Container, Table, TableBody} from '@material-ui/core'
import Row from './row'
import Form from './form'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function Manager({services, onCreate, onDelete, errorAdd, editService}) {
    return <Container fixed>
        <Form onCreate={onCreate} error={errorAdd}/>
        {services.length > 0 && (
            <Typography variant="h4" align="center" color="textSecondary" component="p" style={{marginTop: '5%'}}>
                List of services
            </Typography>
        )}
        <Box mt={5}>
            <Table stickyHeader >
                <TableBody >
                    {services.map(props => <Row {...props} onDelete={onDelete} key={props.id} onEdit={editService}/>)}
                </TableBody>
            </Table>
        </Box>
    </Container>
}

export default Manager