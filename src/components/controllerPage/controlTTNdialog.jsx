import React, {useState} from 'react'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import TopBar from './reportComponents/topBar'
import ReportReason from './reportComponents/reportReason'
import ReportEdit from './reportComponents/reportEdit'
import ReportList from './reportComponents/reportList'
import {Button, Box} from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
});

const selectOptionsData = [
    {key: 1, value: 'Lost'},
    {key: 2, value: 'Damaged'},
    {key: 3, value: 'Not found'}
];

const initalStepsState = {
    first: {
        isComplete: false,
        data: null
    },
    second: {
        isComplete: false,
        data: null
    },
    third: {
        isComplete: false
    }
};

export default ({
    saveTTN,
    handleChangeTTN,
    currentTTN,
    initialCargo,
    cargo,
    open,
    openDialog,
    markCargoAsUnfound,
    setCheckedCargo,
    controller
}) => {
    const [stapsState, setStepsState] = useState(initalStepsState)

    const finishStep = (step, data) => {
        setStepsState({
            ...stapsState,
            [step]: {
                isComplete: true,
                data: data
            }
        })
    }

    return (
        <Box>
            <Dialog fullScreen open={open} onClose={() => {
                openDialog(!open)
            }} TransitionComponent={Transition}>
                <TopBar
                    open={open}
                    openDialog={openDialog}
                />
                <ReportReason
                    finishStep={finishStep}
                    selectOptionsData={selectOptionsData}
                />
                {stapsState.first.isComplete && (
                    <ReportEdit
                        initialCargo={initialCargo}
                        cargo={cargo}
                        reportReason={stapsState.first.data}
                        handleChangeTTN={handleChangeTTN}
                        finishStep={finishStep}
                        setCheckedCargo={setCheckedCargo}
                    />
                )}
                {stapsState.second.isComplete && (
                    <Box>
                        <ReportList
                            initialCargo={initialCargo}
                            cargo={cargo}
                            reportReason={stapsState.first.data}
                            currentTTN={currentTTN}
                            markCargoAsUnfound={markCargoAsUnfound}
                            controller={controller}
                        />
                        <Box mb={15} display="flex" justifyContent="center">
                            <Box>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    onClick={() => {
                                        openDialog(!open)
                                        saveTTN(true, stapsState.first.data, stapsState.second.data)
                                    }}
                                >
                                    Finish report
                                </Button>
                            </Box>

                        </Box>
                    </Box>
                )}
            </Dialog>
        </Box>
    )
}
