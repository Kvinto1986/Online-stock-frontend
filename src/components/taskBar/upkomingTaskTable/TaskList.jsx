import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import {
  Box, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TablePagination, 
  TableRow,
  Typography,
} from '@material-ui/core'

const initialState = {
  dateOfRegistration: true,
  deadlineData: true,
  timeOut: true,
}

const TaskList = (props) => {
    const classes = useStyles()
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [sortOrder, setSortOrder] = useState(initialState)

    const handleChangePage = (event, newPage) => {
      setPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
      setRowsPerPage(+event.target.value)
      setPage(0)
    }

    const sortHeandler = (fieldName) => {
      const body = {
        data: props.contentData.data,
        sortByFieldName: fieldName,
        isDesc: sortOrder[fieldName],
      }

      props.sortTasks(body)
      setSortOrder({...initialState, [fieldName]: !sortOrder[fieldName]})
    }

    const rowsCount = page * rowsPerPage
    const allRowsCount = page * rowsPerPage + rowsPerPage

    const sortIcon = (key) => sortOrder[key] 
    ? <ArrowDropDownIcon
      fontSize="small"
      className={classes.sortIcon}
    />
    : <ArrowDropUpIcon
      fontSize="small"
      className={classes.sortIcon}
    />

    return (
      <Box p={5}>
        {props?.contentData?.data.length > 0 ? (
          <>
            <TableContainer>
              <Table aria-label="Inbox table">
                <TableHead className={classes.thead}>
                  <TableRow>
                    <TableCell>TTN number</TableCell>
                    <TableCell>Car number</TableCell>
                    <TableCell
                      onClick={() => sortHeandler('dateOfRegistration')}
                      className={classes.iconPointer}
                    >
                      Registration date {sortIcon('dateOfRegistration')}
                    </TableCell>
                    <TableCell
                      onClick={() => sortHeandler('deadlineData')}
                      className={classes.iconPointer}
                    >
                      Task date {sortIcon('deadlineData')}
                    </TableCell>
                    <TableCell 
                      onClick={() => sortHeandler('timeOut')}
                      className={classes.iconPointer}
                    >
                      Time out {sortIcon('timeOut')}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.contentData.data.slice(rowsCount, allRowsCount).map(ttnOrder => (
                    <TableRow id={ttnOrder.id} hover role="checkbox">
                      <TableCell>{ttnOrder.number}</TableCell>
                      <TableCell>{ttnOrder.carNumber}</TableCell>
                      <TableCell>{ttnOrder.dateOfRegistration}</TableCell>
                      <TableCell>{ttnOrder.deadlineData}</TableCell>
                      <TableCell>
                        {
                          ttnOrder.isHotTask
                            ? <span className={classes.redTime}>{ttnOrder.timeOut}</span>
                            : <span>{ttnOrder.timeOut}</span>
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              component="div"
              count={props.contentData.data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                  'aria-label': 'previous page',
              }}
              nextIconButtonProps={{
                  'aria-label': 'next page',
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </>
        ) : (
          <Box>
            <Typography variant="em">
              Here is no any tasks for this time period.
            </Typography>
          </Box>
        )}
      </Box>
    )
}

const useStyles = makeStyles(() => ({
    thead: {
      backgroundColor: 'white',
    },
    redTime: {
      color: '#F88379'
    },
    iconPointer: {
      cursor: 'pointer',
    },
    sortIcon: {
      position: 'relative',
      top: '5px',
    }
}))

export default TaskList