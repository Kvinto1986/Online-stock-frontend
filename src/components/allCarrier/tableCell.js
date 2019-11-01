import React from 'react'
import TableCell from '@material-ui/core/TableCell'

const TableCellComponent = ({row, typeParam, nameParam, placeholderEmail, placeholderTel, placeholderTelCarrier, actionParam, componentType, scope, align}) => {
  return (
    <TableCell component={componentType} align={align} scope={scope}>
      {
        row.isDisabled
          ? <input
            type={typeParam}
            name={nameParam}
            placeholder={nameParam === 'email' ? placeholderEmail : nameParam === 'tel' ? placeholderTel : placeholderTelCarrier}
            onChange={actionParam}
          />
          :
          <span>{nameParam === 'email' ? placeholderEmail : nameParam === 'tel' ? placeholderTel : placeholderTelCarrier}</span>
      }
    </TableCell>
  )
}

export default TableCellComponent
