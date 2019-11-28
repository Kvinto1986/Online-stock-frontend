import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from './allCarrierStyle'
import AddIcon from '@material-ui/icons/Add'
import IconButton from "@material-ui/core/IconButton";

const TableRowsComponent = ({row, tableCells, handleEdit, handleNewCarrier, removeItem}) => {
    const classes = useStyles();
    const {id, company, email, tel} = row;
    return (
        <TableRow>
            {
                tableCells.map((item) => {
                    const {typeComponent, float, scope, name, type, action} = item;

                    return <TableCell key={name}>
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
            <TableCell>
                {row.isDisabled
                    ? (
                        <IconButton onClick={handleNewCarrier(id)}
                                    aria-label="add">
                            <AddIcon/>
                        </IconButton>
                    ) : (
                        <IconButton
                            aria-label="edit"
                            onClick={handleEdit(id)}>
                            <EditIcon/>
                        </IconButton>
                    )
                }
                <IconButton
                    id={row.id}
                    color="secondary"
                    onClick={removeItem(id)}
                    aria-label="delete">
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
        </TableRow>
    )
};

export default TableRowsComponent
