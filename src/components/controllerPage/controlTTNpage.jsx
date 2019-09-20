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

export default ({editCurrentTTN, currentTTN, setCurrentTTN, report, setReport, ttnsList, selectedTtn, findTTN}) => {
    const classes = useStyles()


    const [confirm, setConfirm] = useState(false)
    const [open, setOpen] = useState(false)
    const [editTTN, setEditTTN] = useState(false)


    const openDialog = (open) => {
        setOpen(open)
        setCurrentTTN(selectedTtn)
    }

    const handleSubmitTTN = () => {
        const reportData = {
            id: currentTTN._id,
            products: currentTTN.products,
            report: {report: report, date: moment().format()}
        }

        modalSwal(reportData,editCurrentTTN,open,setOpen)
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
            <Typography component="h2" variant="h4" align="center" color="textPrimary" style={{marginTop: '3%'}}
                        gutterBottom>
                Search by TTN number
            </Typography>
            <TTNsearch
                ttnsList={ttnsList}
                findTTN={findTTN}
            />
            {Object.keys(selectedTtn).length !== 0 && (
                <Fragment>
                    <TTNcard
                        ttn={selectedTtn}
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