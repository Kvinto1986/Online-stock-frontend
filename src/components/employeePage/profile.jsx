import React from 'react'
import useStyles from './styles'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import {TableBody} from '@material-ui/core'
import PropTypes from 'prop-types'


export default function Profile({employee}) {
    const classes = useStyles()
    const birthDate = employee.dateOfBirth ? new Date(employee.dateOfBirth).toDateString() : '--'
    // debugger
    return <Table>
        <TableBody>
            <TableRow>
                <TableCell/>
                <TableCell>
                    <Typography variant="h4">
                        {employee.lastName} {employee.firstName} {employee.patronymic}
                    </Typography>
                </TableCell>
            </TableRow>
            {[
                ['Email', employee.email || '--'],
                ['Roles', employee.position ? employee.position.join(', ') : '--'],
                ['Date of birth', birthDate || '--'],
                ['Address', employee.city ? `${employee.city} city, ${employee.street} street, house ${employee.house}${employee.apartment ? `, apartment ${employee.apartment}` : ''}` : '--']
            ].map(([header, content]) =>
                <TableRow key={header}>
                    <TableCell>
                        <Typography variant="subtitle1" className={classes.header}>
                            {header}:
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography variant="subtitle2">
                            {content}
                        </Typography>
                    </TableCell>
                </TableRow>
            )}
        </TableBody>
    </Table>
}

Profile.propTypes = {
    employee: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        patronymic: PropTypes.string,
        dateOfBirth: PropTypes.string,
        email: PropTypes.string,
        city: PropTypes.string,
        street: PropTypes.string,
        house: PropTypes.string,
        apartment: PropTypes.string,
        position: PropTypes.arrayOf(PropTypes.string)
    }),
}