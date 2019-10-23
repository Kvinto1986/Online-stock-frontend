import React, {Fragment, useState} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import useStyles from './controlTTNstyle'
import TTNsearch from './controlTTNsearch'
import TTNcard from './controlTTNcard'
import SubmitButton from './controlTTNsubmit'

import TTNdialog from './controlTTNdialog'
import moment from 'moment'

export default ({ttns, getTtn, getTtnError, editTtn}) => {
    const classes = useStyles()

    const [confirm, setConfirm] = useState(false)
    const [open, setOpen] = useState(false)
    const [report, setReport] = useState('')
    const [ttnId, setTtnId] = useState('')
    
    const [currentTTN, setRawCurrentTTN] = useState({})

    const setCurrentTTN = obj => {
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
            reportData.reports = [{report: report, date: moment().format()}, ...ttns[ttnId].reports]
        }

        editTtn(reportData, ttns[ttnId].id)
    }

    const handleChangeTTN = (e, id) => {
        currentTTN.products.forEach((elem) => {
            if (elem.id === id) {
                elem[e.target.name] = e.target.value
            }
        })
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
                        report={report}
                        setReport={setReport}
                        handleChangeTTN={handleChangeTTN}
                        cargo={currentTTN.products}
                        open={open}
                        openDialog={openDialog}
                    />
                </Fragment>)}

        </Container>

    )
}