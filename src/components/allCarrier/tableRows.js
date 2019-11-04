import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import Fab from '@material-ui/core/Fab'
import TableRow from '@material-ui/core/TableRow'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from './allCarrierStyle'
import AddIcon from '@material-ui/icons/Add'

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
      <TableCell align='right'>
        {row.isDisabled
          ? <Fab
            color='primary'
            aria-label='add'
            className={classes.add_btn}
            onClick={handleNewCarrier(id)}
          >
            <AddIcon/>
          </Fab>
          : <Fab
            aria-label='edit'
            className={classes.add_btn}
            onClick={handleEdit(id)}
          >
            <EditIcon/>
          </Fab>
        }
        <Fab
          id={row.id}
          onClick={removeItem(id)}
          aria-label='delete'
          className={classes.fab}
          color='secondary'
        >
          <DeleteIcon/>
        </Fab>
      </TableCell>
    </TableRow>
  )
}

export default TableRowsComponent
