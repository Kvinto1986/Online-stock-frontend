import React, { memo } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {
    Box, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TablePagination, 
    TableRow,
    Typography
} from '@material-ui/core'


const TaskList = (props) => {
    const classes = useStyles()

    return (
      <Box p={5}>
        {props.roleTasks.length > 0 ? (
          <>
            <TableContainer>
              <Table aria-label="Inbox table">
                <TableHead className={classes.thead}>
                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>TTN number</TableCell>
                    <TableCell>Car number</TableCell>
                    <TableCell>Date/Time</TableCell>
                    <TableCell>Time out</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.roleTasks.map(ttnOrder => (
                    <TableRow id={ttnOrder.id} hover role="checkbox">
                      <TableCell></TableCell>    
                      <TableCell>{ttnOrder.number}</TableCell>
                      <TableCell>{ttnOrder.carNumber}</TableCell>
                      <TableCell>{ttnOrder.deadlineData}</TableCell>
                      <TableCell>{ttnOrder.deadlineData}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              //   count={rows.length}
              //   rowsPerPage={rowsPerPage}
              //   page={page}
              //   onChangePage={handleChangePage}
              //   onChangeRowsPerPage={handleChangeRowsPerPage}
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
}))

const mapStateToProps = (state) => ({
    roleTasks: state.roleTasks
})

export default connect(mapStateToProps, {})(memo(TaskList))