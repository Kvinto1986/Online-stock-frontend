import React, {useState, useEffect} from 'react'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Table from '@material-ui/core/Table'
import useStyles from '../controlTTNstyle'
import InputBase from '@material-ui/core/InputBase'
import CheckboxControll from './checkbox'

export default ({cargo, reportReason, handleChangeTTN, setCheckedCargo, isAllSelected, selectAll}) => {
    
    const classes = useStyles()
    const [checks, setChecks] = useState({})

    // Checkbox handler 
    const handleCheckboxChange = name => event => {
        setChecks({ ...checks, [name]: event.target.checked })
        setCheckedCargo(event.target.value)
    }

    // Select all updating
    useEffect(() => {
        if(Object.values(checks).length === cargo.length) {
            const isEachSelected = Object.values(checks).every(elem => elem === true)
            const isAnySelected = Object.values(checks).every(elem => elem === false)

            isEachSelected && selectAll(true) 
            isAnySelected && selectAll(false)
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
        }
    }, [isAllSelected])

    // Get each checkbox name, after initializate the initial checks's state
    let arr = {}
    const initChecks = (unitName) => {
        arr = {...arr, [unitName]: false}
        if (Object.values(arr).length === cargo.length) {
            setChecks(arr)
        }
    }


    return (
        <Table stickyHeader className={classes.table} size="small">
            <TableHead>
                <TableRow>
                    <TableCell align="left">Target</TableCell>
                    <TableCell align="left">ID</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Amount</TableCell>
                    <TableCell align="left">Type</TableCell>
                    {reportReason === 2 && <TableCell align="left">DMG Details</TableCell>}
                </TableRow>
            </TableHead>
            <TableBody>
                {cargo.map((elem, index) => {
                    const handleChange = (e) => handleChangeTTN(e, elem.id)
                    const unitName = `checked${index}`
                    return (
                        <TableRow key={elem.id} selected={checks[unitName]}>
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
                                reportReason === 1 && (
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
                                reportReason === 2 && (
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
                                reportReason === 3 && (
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
                                    data-testid={elem.id + '-type'}
                                    defaultValue={elem.type}
                                    name="type"
                                    onChange={handleChange}
                                    disabled/>
                            </TableCell>
                            {
                                // Damaged
                                reportReason === 2 && (
                                    <TableCell align="center">
                                        <InputBase
                                            data-testid={elem.id + '-dmgDetails'}
                                            defaultValue={''}
                                            name="dmgDetails"
                                            onChange={handleChange}
                                            disabled={!checks[unitName]}
                                        />
                                    </TableCell>
                                )
                            }
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

