import React, {useState} from 'react'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import TopBar from './reportComponents/topBar'
import ReportReason from './reportComponents/reportReason'
import ReportEdit from './reportComponents/reportEdit'
import Addition from './reportComponents/addition'
import { Button } from '@material-ui/core'

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
                    stapsState.first.isComplete &&
                    <ReportEdit 
                        cargo={cargo}
                        open={open}
                        handleChangeTTN={handleChangeTTN}
                        report={report}
                        setReport={setReport}
                    />
                }
                {
                    stapsState.second.isComplete && 
                    <Addition
                        setReport={setReport}
                        report={report}
                        open={open}
                    />
                }
                {
                    stapsState.third.isComplete && 
                    <Button
                        type="button"
                    >
                        Create report
                    </Button>
                }
            </Dialog>
        </div>
    )
}
