import React, {Fragment, useState} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import useStyles from './controlTTNstyle'
import Search from '../operatorPage/search'
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
    // TODO: Delete logic with setFinalCargo
    const [finalCargo, setFinalCargo] = useState([])
    const [initialCurrentTTN, setInitialRawCurrentTTN] = useState({})
    const [currentTTN, setRawCurrentTTN] = useState({})

    const {firstName, lastName, patronymic} = user
    const userName = `${firstName} ${lastName} ${patronymic}`

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

    const handleChangeTTN = (e, id) => {
        currentTTN.products.forEach((elem) => {
            if (elem.id === id) {
                //TODO: SetState
                elem[e.target.name] = e.target.value
                elem.checked = true

                if(e.target.name === 'amount') {
                    elem.availableAmount = e.target.value
                }
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

    const getCheckedCargo= newCargoState => {
        setFinalCargo(newCargoState)
    }

    const checkWithoutReport = name => {
        const reportData = {
            status: 'checked',
            products: currentTTN.products,
            controller: name
        }

        if (report.length > 0) {
            reportData.report = {report: report, date: moment().format()}
        }

        editTtn(reportData, ttns[ttnId].id)
    }

    const checkWithReport = (name, reportSelectDetails, aditionalData) => {
        const {reasonNumber, reasonType} = reportSelectDetails

        let report = {
            reasonNumber, 
            reasonType,
            date: moment().format()
        }

        let updatedCargo

        switch (reasonNumber) {
            // Lost
            case 1: {
                updatedCargo = currentTTN.products
                break
            }
            // Damaged
            case 2: {
                const {data: dmgData} = aditionalData.editData

                updatedCargo = currentTTN.products.map((product, i) => {
                    if(product.id === dmgData[i].cargoId) {
                        const feedback = dmgData[`checked${[i]}`]

                        if(feedback) {
                            product.dmgFeedback = feedback
                        }
                    }
                    return product
                })
                break
            }
            // Not found
            case 3: {
                updatedCargo = currentTTN.products.filter(product => product.checked !== true)
                break
            }
            default: 
                break
        }
        
        const reportData = {
            report,
            status: 'checked',
            products: updatedCargo,
            controller: userName,
            initialProducts: initialCurrentTTN.products
        }

        editTtn(reportData, ttns[ttnId].id)
    }

    const handleSubmitTTN = (isReported, reportType, aditionalData) => {
        if (isReported) {
            checkWithReport(userName, reportType, aditionalData)

            // Close report page
            setOpen(false)
        } else {
            checkWithoutReport(userName)
        }
    }

    return (
        <Container component="main" maxWidth="xl" className={classes.mainContainer}>
            <CssBaseline/>
            <Search
                search={findTTN}
                searchText="Search TTN by number"
                error={getTtnError.number}
                value={ttnId}
                setValue={setTtnId}
                length={10}
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
                        currentTTN={currentTTN}
                        open={open}
                        openDialog={openDialog}
                        markCargoAsUnfound={getCheckedCargo}
                        setCheckedCargo={setCheckedCargo}
                        controller={userName}
                   />
                </Fragment>)}

        </Container>

    )
}