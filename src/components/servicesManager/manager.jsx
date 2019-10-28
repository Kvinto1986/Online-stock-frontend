import React from 'react'
import {Container, Table, TableBody} from '@material-ui/core'
import Row from './row'
import Form from './form'


function Manager({services, onCreate, onDelete, errorAdd}) {

    return <Container>
        <Form onCreate={onCreate} error={errorAdd}/>
        <Table>
            <TableBody>
                {services.map(props => <Row {...props} onDelete={onDelete} key={props.id}/>)}
            </TableBody>
        </Table>
    </Container>
}

export default Manager