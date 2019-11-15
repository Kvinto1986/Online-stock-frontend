import React, {useState, useEffect} from 'react'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Table from '@material-ui/core/Table'
import useStyles from '../controlTTNstyle'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import CheckboxControll from './checkbox'
import Modal from './dmgDescriptModal'

export default ({cargo, reportReason, handleChangeTTN, setCheckedCargo, isAllSelected, selectAll, getEditData}) => {
    const classes = useStyles()
    const [checks, setChecks] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [dmgDescription, setDmgDescription] = useState({})
    const [modal, setModal] = useState()

    const handleOpen = (name) => {
        setModal(name)
        setIsModalOpen(true)
    }
  
    const handleClose = () => {
        setModal()
        setIsModalOpen(false)
    }

    // Checkbox handler 
    const handleCheckboxChange = name => event => {
        setChecks({...checks, [name]: event.target.checked})
        setCheckedCargo({index: event.target.value, checked: event.target.checked}, null)
        
        !event.target.checked && 
        setDmgDescription({...dmgDescription, [name]: ''})
    }

    // Select all updating
    useEffect(() => {
        if(Object.values(checks).length === cargo.length) {
            const isEachSelected = Object.values(checks).every(elem => elem === true)
            const isAnySelected  = Object.values(checks).every(elem => elem === false)

            isEachSelected && selectAll(true) 
            isAnySelected  && selectAll(false)
        }
    }, [checks])

    // Then all-selecting is changing
    useEffect(() => {
        if(Object.values(checks).length === cargo.length) {
            let subchecks = {}
            for (let prop in checks) {
                subchecks = {...subchecks, [prop]: isAllSelected}
            }
            
            setChecks(subchecks)
            setCheckedCargo(null, {value: isAllSelected})
        }
    }, [isAllSelected])

    let arrChecks  = {},
        arrDmgData = []
    
    // Get each checkbox name, after initializate the initial checks's state
    const initChecks = (unitName, id) => {
        arrChecks  = {...arrChecks,  [unitName]: false}

        const initialDmgData = {[unitName]: '', cargoId: id}
        arrDmgData = [...arrDmgData, initialDmgData]

        if (Object.values(arrChecks).length === cargo.length) {
            setChecks(arrChecks)
            setDmgDescription(arrDmgData)
        }
    }
    

    return (
        <>
            <Table stickyHeader className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Target</TableCell>
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Amount</TableCell>
                        <TableCell align="left">Type</TableCell>
                        {reportReason.reasonNumber === 2 && <TableCell align="left">DMG Details</TableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cargo.map((elem, index) => {
                        const handleChange = (e) => handleChangeTTN(e, elem.id)
                        const unitName = `checked${index}`
                        const dmgDetails = dmgDescription[unitName] 
                            ? dmgDescription[unitName].substring(0, 15)+'...' 
                            : '-'
                        
                        return (
                            <TableRow key={elem.id} selected={checks[unitName]} className={classes.tableUnit} >
                                <TableCell>
                                    <CheckboxControll 
                                        checks={checks}
                                        initChecks={initChecks}
                                        unitName={unitName}
                                        handleCheckboxChange={handleCheckboxChange}
                                        id={elem.id}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <InputBase
                                        disabled
                                        defaultValue={elem.id}
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <InputBase
                                        disabled
                                        defaultValue={elem.name}
                                    />
                                </TableCell>
                                {
                                    // Lost
                                    reportReason.reasonNumber === 1 && (
                                        <TableCell align="center">
                                            <InputBase
                                                data-testid={elem.id + '-amount'}
                                                defaultValue={elem.amount}
                                                name="amount"
                                                onChange={handleChange}
                                                disabled={!checks[unitName]}
                                            />
                                        </TableCell>
                                    )
                                }
                                {
                                    // Damaged
                                    reportReason.reasonNumber === 2 && (
                                        <TableCell align="center">
                                            <InputBase
                                                defaultValue={elem.amount}
                                                disabled
                                                autoFocus={true}
                                            />
                                        </TableCell>
                                    )
                                }
                                {
                                    // Not found
                                    reportReason.reasonNumber === 3 && (
                                        <TableCell align="center">
                                            <InputBase
                                                defaultValue={elem.amount}
                                                disabled
                                            />
                                        </TableCell>
                                    )
                                }
                                <TableCell align="center">
                                    <InputBase
                                        data-testid={elem.id + '-package'}
                                        defaultValue={elem.package}
                                        name="package"
                                        onChange={handleChange}
                                        disabled
                                    />
                                </TableCell>
                                {
                                    // Damaged
                                    reportReason.reasonNumber === 2 && (
                                        <TableCell align="center">
                                            <InputBase
                                                value={dmgDetails}
                                                name="dmgDetails"
                                                disabled
                                            />
                                            <Button
                                                onClick={() => handleOpen(unitName)}
                                                disabled={!checks[unitName]}
                                            >
                                                Edit
                                            </Button>
                                            <Modal 
                                                isModalOpen={isModalOpen}
                                                handleClose={handleClose}
                                                dmgDescription={dmgDescription}
                                                setDmgDescription={setDmgDescription}
                                                actualDescription={dmgDescription[unitName]}
                                                rowName={modal}
                                            />
                                        </TableCell>
                                    )
                                }
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <Modal 
                isModalOpen={isModalOpen}
                handleClose={handleClose}
                dmgDescription={dmgDescription}
                setDmgDescription={setDmgDescription}
                actualDescription={dmgDescription[modal]}
                rowName={modal}
                getEditData={getEditData}
            />
        </>
    )
}

