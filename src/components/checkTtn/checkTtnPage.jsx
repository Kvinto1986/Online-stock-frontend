import React, {Fragment, useEffect, useState} from 'react'
import {TtnCheck} from "./ttnCheck";
import {findTtn} from '../../servies/ttn';
import TtnTable from './ttnTabale'

export const CheckTtnPage = () => {
    const[rows, setRows] = useState([])

    function createData( number, status, dataOfRegistration, carrier, carNumber, driver, sender) {
        return { status, number, dataOfRegistration, carrier, carNumber, driver, sender };
    }

    const f = async (ttnNumber) => {
        let ttn = await findTtn(ttnNumber)
        console.log(ttn)
        const{number, status,  dataOfRegistration, carrier, carNumber, driver, sender} = ttn
        setRows([createData(status, number, dataOfRegistration, carrier, carNumber, driver, sender) ])
    }

    return(
        <Fragment>
            <TtnCheck
                submit={f}
            />
            <TtnTable
                rows = {rows}
            />
        </Fragment>


    )
}
