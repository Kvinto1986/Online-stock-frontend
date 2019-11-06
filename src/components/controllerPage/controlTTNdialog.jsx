import React, {useState} from 'react'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import useStyles from './controlTTNstyle'
import {Box, Container} from '@material-ui/core'
import TopBar from './reportComponents/topBar'
import ReportReason from './reportComponents/reportReason'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const selectOptionsData = [
    {key: 1, value: 'Lost'},
    {key: 2, value: 'Damaged'},
    {key: 3, value: 'Other...'}
]

const initalStepsState = {
    first: {
        isComplete: false,
        data: null 
    },
    second: {
        isComplete: false 
    },
    third: {
        isComplete: false 
    }
}

export default ({saveTTN, report, setReport, handleChangeTTN, cargo, open, openDialog}) => {
    const classes = useStyles()
    const [stapsState, setStepsState] = useState(initalStepsState)

    const finishStep = (step, data) => {
        setStepsState({...stapsState, [step]: {
            isComplete: true,
            data: data
        }})
    }
    
    return (
        <div>
            <Dialog fullScreen open={open} onClose={() => {
                openDialog(!open)
            }} TransitionComponent={Transition}>
                <TopBar
                    saveTTN={saveTTN}
                    open={open}
                    openDialog={openDialog}
                />
                <ReportReason
                    finishStep={finishStep}
                    selectOptionsData={selectOptionsData}
                />
                {
                    stapsState.first.isComplete && (
                        // {/* ReportEdit */}
                        <Box>
                        <Box>
                            <Typography component="h1" variant="h3" className={classes.stepNumber}>2. REPORT EDIT</Typography>
                        </Box>
                        <Container component="main" maxWidth="xl">
                            <Box>

                            </Box>
                        </Container>
                        </Box>
                    )
                }
                
                {/* AdditionForm */}
                <Box>
                    <Box>
                        <Typography component="h1" variant="h3" className={classes.stepNumber}>3. ADDITION</Typography>
                    </Box>
                    <Container component="main" maxWidth="xl">
                        <Box>
                            
                        </Box>
                    </Container>
                </Box>
                {/* ReportButton */}

                {/* <Paper className={classes.dialogPaper}>
                    <TTNtable
                        handleChangeTTN={handleChangeTTN}
                        cargo={cargo}
                        open={open}/>
                </Paper> */}
                {/* <Paper className={classes.dialogPaper}>
                    <Typography component="h2" variant="h6" align="center" color="textPrimary" style={{marginTop: '3%'}}
                                gutterBottom>
                        Write a report
                    </Typography>
                    <TextField
                        label="Report"
                        multiline
                        rowsMax="7"
                        style={{marginTop: '3%', width: '80%', marginLeft: '10%', marginBottom: '5%'}}
                        margin="normal"
                        onChange={(e) => setReport(e.target.value)}
                        defaultValue={report}
                        autoFocus={open}
                    />
                </Paper> */}
            </Dialog>
        </div>
    )
}
