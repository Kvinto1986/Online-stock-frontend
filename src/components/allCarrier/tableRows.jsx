import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import Box from '@material-ui/core/Box'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import useStyles from './allCarrierStyle'

const TableRowsComponent = ({row, tableCells, handleEdit, handleNewCarrier, removeItem}) => {
    const classes = useStyles()
    const {id, company, email, tel} = row
    return (
        <TableRow>
            {
                tableCells.map((item) => {
                    const {typeComponent, float, scope, name, type, action} = item
                    return <TableCell key={name} component={typeComponent} align={float} scope={scope}>
                        {
                            row.isDisabled
                                ? <input
                                    type={type}
                                    name={name}
                                    placeholder={name === 'email' ? email : name === 'carrier' ? company : tel}
                                    onChange={action}
                                />
                                :
                                <span>{name === 'email' ? email : name === 'carrier' ? company : tel}</span>
                        }
                    </TableCell>
                })
            }
            <TableCell align="right">
                <Box display="flex" justifyContent="flex-end">
                    <Box>
                        {row.isDisabled
                            ? <Button
                                color="primary"
                                variant="outlined"
                                size="small"
                                onClick={handleNewCarrier(id)}
                            >
                                Save
                            </Button>
                            : <Button
                                color="primary"
                                variant="outlined"
                                size="small"
                                onClick={handleEdit(id)}
                            >
                                Edit
                            </Button>
                        }
                    </Box>
                    <Box ml={1.5}>
                        <Button
                            variant="outlined"
                            size="small"
                            onClick={removeItem(id)}
                        >
                            Block
                        </Button>
                    </Box>
                </Box>
            </TableCell>
        </TableRow>
    )
}

export default TableRowsComponent
