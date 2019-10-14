import React, {Fragment, useState} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import useStyles from './controlTTNstyle'
import Typography from '@material-ui/core/Typography'

import TTNsearch from './controlTTNsearch'
import TTNcard from './controlTTNcard'
import SubmitButton from './controlTTNsubmit'

import TTNdialog from './controlTTNdialog'
import modalSwal from './swalModal'
import moment from 'moment'

export default ({ttn,editCurrentTTN,getTtnError,getTtn}) => {
    const classes = useStyles()

    const [report, setReport] = useState('')
    const [confirm, setConfirm] = useState(false)
    const [open, setOpen] = useState(false)
    const [editTTN, setEditTTN] = useState(false)
    const [ttnId,setTtnId]=useState('')

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
        setCurrentTTN(ttn[ttnId])
    }

    const handleSubmitTTN = () => {
        const reportData = {
            id: currentTTN.id,
            products: currentTTN.products,
            report: {report: report, date: moment().format()}
        }

        modalSwal(reportData, editCurrentTTN, open, setOpen)
        setEditTTN(true)
    }

    const handleChangeTTN = (e, id) => {
        currentTTN.products.map((elem) => {
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
                searchText="Find"
                value={ttnId}
                setValue={setTtnId}
                error={getTtnError.number}
            />

            {ttn[ttnId] && (
                <Fragment>
                    <TTNcard
                        ttn={ttn[ttnId]}
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