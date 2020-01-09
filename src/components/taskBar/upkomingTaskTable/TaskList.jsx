import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Box, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead,
    TableRow,
    Typography,
} from '@material-ui/core'

const TaskList = (props) => {
    const classes = useStyles()

    const isHotTask = (ttnOrder) => Date.parse(`01/01/2011 ${ttnOrder.timeOut}`) < Date.parse('01/01/2011 01:00:00')

    return (
      <Box p={5}>
        {props.contentData && props.contentData.data && props.contentData.data.length > 0 ? (
          <TableContainer>
            <Table aria-label="Inbox table">
              <TableHead className={classes.thead}>
                <TableRow>
                  <TableCell>TTN number</TableCell>
                  <TableCell>Car number</TableCell>
                  <TableCell>Registration date</TableCell>
                  <TableCell>Task date</TableCell>
                  <TableCell>Time out</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.contentData.data.map(ttnOrder => (
                  <TableRow id={ttnOrder.id} hover role="checkbox">
                    <TableCell>{ttnOrder.number}</TableCell>
                    <TableCell>{ttnOrder.carNumber}</TableCell>
                    <TableCell>{ttnOrder.dateOfRegistration}</TableCell>
                    <TableCell>{ttnOrder.deadlineData}</TableCell>
                    <TableCell>
                      {
                        isHotTask(ttnOrder)
                          ? <span className={classes.redTime}>{ttnOrder.timeOut}</span>
                          : <span>{ttnOrder.timeOut}</span>
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
}))

export default TaskList