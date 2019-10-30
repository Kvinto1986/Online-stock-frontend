import React, {useEffect, useState} from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import useStyles from './allCarrierStyle'
import Spinner from '../spinner'
import TablePaginationActions from './tablePagination'

function CustomPaginationActionsTable({allCarriers, delCarrier, editCarrier}) {

  const classes = useStyles()
  const [rows, setRows] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [loaded, setLoaded] = useState(false)
  const [inputValue, setInputValue] = useState({})
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  function handleChangePage(event, newPage) {
    setPage(newPage)
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  useEffect(() => {
    setRows(allCarriers)
    setLoaded(true)

  }, [allCarriers])

  const removeItem = (unp) => () => {
    const newArr = rows.filter((item) => item.id !== unp)
    setRows(newArr)
    delCarrier(unp)
  }

  const handleEdit = (id) => () => {
    rows.forEach((item, indx) => rows[indx].isDisabled = false)

    let found = rows.find((elem, index) => elem.id === id)
    found.isDisabled = true
    setRows([...rows])
  }

  const handelEditInput = (e) => {
    setInputValue({...inputValue, [e.target.name]: e.target.value})
  }

  const searchFoundElem = (rows, _unp) => {
    const {carrier, email, tel} = inputValue
    let indx, found = null

    found = rows.find((elem) => elem.id === _unp)
    indx = rows.findIndex((elem) => elem.id === _unp)

    if (carrier) {
      found.company = carrier
    }

    if (email) {
      found.email = email
    }

    if (tel) {
      found.tel = tel
    }

    found.isDisabled = false

    const {company, countryCode, unp, id} = found
    let newArr = []
    for (let i = 0; i < rows.length; i++) {
      (i === indx) ? newArr.push(found) : newArr.push(rows[i])
    }
    setRows(newArr)
    return {id, company, countryCode, email, unp, tel}
  }

  const handleNewCarrier = (unp) => () => {
    const foundElem = searchFoundElem(rows, unp)
    editCarrier(foundElem)
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>
          <TableBody>
            <TableRow>
              <TableCell>Carrier</TableCell>
              <TableCell align='right'>Email.</TableCell>
              <TableCell align='right'>Phone</TableCell>
              <TableCell align='right'/>
            </TableRow>
            {!loaded
              ? <Spinner/>
              : rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow key={row.id}>
                  <TableCell component='th' scope='row'>
                    {
                      row.isDisabled
                        ? <input
                          type='text'
                          name='carrier'
                          placeholder={row.company}
                          onChange={handelEditInput}
                        />
                        : <span>{row.company}</span>
                    }
                  </TableCell>
                  <TableCell align='right'>
                    {
                      row.isDisabled
                        ? <input
                          type='text'
                          name='email'
                          placeholder={row.email}
                          onChange={handelEditInput}/>
                        : <span>{row.email}</span>
                    }
                  </TableCell>
                  <TableCell align='right'>
                    {
                      row.isDisabled
                        ? <input
                          type='number'
                          name='tel'
                          placeholder={row.tel}
                          onChange={handelEditInput}
                          className='noNumerical'
                        />
                        : <span>{row.tel}</span>
                    }
                  </TableCell>
                  <TableCell align='right'>
                    {row.isDisabled
                      ? <Fab
                        color='primary'
                        aria-label='add'
                        className={classes.add_btn}
                        onClick={handleNewCarrier(row.id)}
                      >
                        <AddIcon/>
                      </Fab>

                      : <Fab
                        color='secondary'
                        aria-label='edit'
                        className={classes.fab}
                        onClick={handleEdit(row.id)}
                      >
                        <EditIcon/>
                      </Fab>

                    }

                    <Fab
                      id={row.id}
                      onClick={removeItem(row.id)}
                      aria-label='delete'
                      className={classes.fab}
                    >
                      <DeleteIcon/>
                    </Fab>
                  </TableCell>
                </TableRow>
              ))
            }
            {emptyRows > 0 && (
              <TableRow style={{height: 35 * emptyRows}}>
                <TableCell colSpan={6}/>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Paper>
  )
}

export default CustomPaginationActionsTable
