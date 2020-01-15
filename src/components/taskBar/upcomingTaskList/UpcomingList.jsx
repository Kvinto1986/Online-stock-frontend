import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { ListSubheader, List, Box } from '@material-ui/core'
import { getExportTTN, getTTNdateOut } from '../../../actions/taskBarActions'
import Inbox from './inbox/Inbox'
import worker_script2 from './inboxWorker2'
import worker_script8 from './inboxWorker8'
import worker_script24 from './inboxWorker24'
import RightBottomAlert from '../../common/alerts/rightBottomAlert'

const UpcomingList = props => {
    const classes = useStyles()
    const [isOpen, setIsOpen] = useState(false)
    const [inboxData, setInboxData] = useState([])
    const [workerFlag, setWorkerFlag] = useState(true)
    const [timeFlag, setAlertTime] = useState(true)

    const isBardata = props.barData && props.barData.length > 0

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        props.getExportTTN()
        props.getTTNdateOut(new Date(), 0)
    }, [])

    useEffect(() => {
        setAlertTime(true)
        setTimeout(() => {
            setAlertTime(false)
        }, 4000)
    }, [props.barData])
    
    if (isBardata && workerFlag) {
        if (window.Worker) {
            const workerWorking = (worker, hours) => {
                worker.onmessage = (e) => {
                    setInboxData(prevState => [...prevState, e.data])
                }
                worker.postMessage({barData: props.barData ,hours})
            }

            setWorkerFlag(false)
            const worker2H  = new Worker(worker_script2)
            const worker8H  = new Worker(worker_script8)
            const worker24H = new Worker(worker_script24)

            workerWorking(worker2H,  2)
            workerWorking(worker8H,  8)
            workerWorking(worker24H, 24)
        } else {
            alert("Your browser isn't support Web Workers \n Inbox will output uncorrest task data.")
        }
    }

    return (
        <>
            <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root} subheader={
                <Box display="flex" justifyContent="space-between" alignItems="center" mt={1.75} mb={1.75}>
                    <ListSubheader component="div" id="nested-list-subheader">
                        Upcoming
                    </ListSubheader>
                </Box>
            }>
                <Inbox 
                    handleClick={handleClick} 
                    isOpen={isOpen} 
                    roleTasks={props.barData}
                    inboxData={inboxData}
                    getTTNdateOut={props.getTTNdateOut}
                />
            </List>
            {isBardata && timeFlag && (
                <RightBottomAlert 
                    message={`Here is ${props.barData.length} upcoming tasks found.`}
                />
            )}
        </>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '260px',
        backgroundColor: theme.palette.background.paper,
    },
    autorenewIcon: {
        cursor: 'pointer',
    },
}))

const mapStateToProps = (state) => ({
    barData: state.roleTasks.barData,
    contentData: state.roleTasks.contentData,
})

export default connect(mapStateToProps, { getExportTTN, getTTNdateOut })(UpcomingList)