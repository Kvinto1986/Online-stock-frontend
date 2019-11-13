import React, {Fragment, useState} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import useStyles from './controlTTNstyle'
import TTNsearch from './controlTTNsearch'
import TTNcard from './controlTTNcard'
import SubmitButton from './controlTTNsubmit'

import TTNdialog from './controlTTNdialog'
import moment from 'moment'

export default ({ttns, getTtn, getTtnError, editTtn, user}) => {
    const classes = useStyles()

    const [confirm, setConfirm] = useState(false)
    const [open, setOpen] = useState(false)
    const [report, setReport] = useState('')
    const [ttnId, setTtnId] = useState('')
    const [finalCargo, setFinalCargo] = useState([])
    
    const [initialCurrentTTN, setInitialRawCurrentTTN] = useState({})
    const [currentTTN, setRawCurrentTTN] = useState({})

    const setCurrentTTN = obj => {
        setInitialRawCurrentTTN({...obj, products: [...obj.products.map(x => ({...x}))]})
        setRawCurrentTTN({...obj, products: [...obj.products.map(x => ({...x}))]})
    }

    const findTTN = (ttnId) => {
        getTtn(ttnId)
        setReport('')
    }

    const openDialog = (open) => {
        setOpen(open)
        setCurrentTTN(ttns[ttnId])
    }

    const handleSubmitTTN = () => {
        setOpen(false)
        const reportData = {
            status: 'checked',
            products: currentTTN.products,
        }

        if (report.length > 0) {
            reportData.report = {report: report, date: moment().format()}
        }

        editTtn(reportData, ttns[ttnId].id)
    }

    const handleChangeTTN = (e, id) => {
        currentTTN.products.forEach((elem) => {
            if (elem.id === id) {
                //TODO: SetState
                elem[e.target.name] = e.target.value
                elem.checked = true
            }
        })
    }

    const setCheckedCargo = (data, all) => {
        currentTTN.products.forEach((elem) => {
            if(all) {
                //TODO: SetState
                elem.checked = all.value
            }
            else if(data.index === elem.id) {
                //TODO: SetState
                elem.checked = data.checked
            } 
        })
    }
    
    const setReportType = type => {
        const {id, email, firstName, lastName, patronymic} = user
        setRawCurrentTTN({
            ...currentTTN, 
            report: type, 
            controller: {
                id: id,
                email: email,
                initials: `${firstName} ${lastName} ${patronymic}`
            }
        })
    }

    const markCargoAsUnfound = newCargoState => {
        setFinalCargo(newCargoState)
    }

    return (
        <Container component="main" maxWidth="xl" className={classes.mainContainer}>
            <CssBaseline/>
            <TTNsearch
                search={findTTN}
                searchText="Search TTN by number"
                error={getTtnError.number}
                value={ttnId}
                setValue={setTtnId}
            />
            {ttns[ttnId] && (
                <Fragment>
                    <TTNcard
                        ttn={ttns[ttnId]}
                        open={open}
                        report={report}
                        setReport={setReport}
                    />
                    <SubmitButton
                        saveTTN={handleSubmitTTN}
                        confirm={confirm}
                        setConfirm={setConfirm}
                        open={open}
                        setOpen={openDialog}
                    />
                    <TTNdialog
                        saveTTN={handleSubmitTTN}
                        handleChangeTTN={handleChangeTTN}
                        initialCargo={initialCurrentTTN.products}
                        cargo={currentTTN.products}
                        cargoReportType={currentTTN.report}
                        currentTTN={currentTTN}
                        open={open}
                        openDialog={openDialog}
                        setReportType={setReportType}
                        markCargoAsUnfound={markCargoAsUnfound}
                        setCheckedCargo={setCheckedCargo}
                   />
                </Fragment>)}

        </Container>

    )
}