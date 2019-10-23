import WarehousingDataForm from './warehousingComponents/warehousingDataForm'
import { DndProvider } from 'react-dnd-cjs'
import HTML5Backend from 'react-dnd-html5-backend-cjs'
import DndStock from './warehousingComponents/dndStock'
import WarehousingSubmitButton from './warehousingComponents/WarehousingSubmitButton'
import React, { useState, useCallback } from 'react'   
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'

const initialState = {
    ttnIsFound: false
}

const initialWareHousingState = {
    areasData: [],
    formData: ''
}

const Warehousing = ({getTtn, ttnError, ttns, makeWarehousing, warehouses, user, reset}) => {

    const [curTtn, setCurTtn] = useState(null)
    const [ttnIsFound, seTttnIsFound] = useState(false)
    const [statusesState, setStatusesState] = useState(initialState)
    const [wareHousingState, setWareHousingState] = useState(initialWareHousingState)
    const [warehousingActiveStock, setWarehousingActiveStock] = useState(null)

    const successWirehousingAletrt = () => {
        Swal
        .fire({
            title: 'Success',
            text: 'Cargo placed to stock.',
            type: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
            allowOutsideClick: false
        })
        .then(reset)
    }

    const getFormData = data => {
        setWareHousingState({
            ...wareHousingState,
            ttnNumber: data
        })
    }

    const sendChangedStockData = changedStockData => { 
        setWareHousingState({
            ...wareHousingState,
            areasData: changedStockData
        })
    }

    const showSaveButton = useCallback(() => {
        setStatusesState({...statusesState, isSubmitButtonShown: true})
    }, [statusesState])

    const catchSubmitAction = () => {
        const data = {
            stockData: warehousingActiveStock,
            wareHousingData: wareHousingState,
        }
        
        makeWarehousing(data, successWirehousingAletrt)
    }

    return (
        <React.Fragment>
            <WarehousingDataForm 
                setCurrentTTN={setCurTtn}
                dndIsShown={seTttnIsFound}
                getFormData={getFormData} 
                getTtn={getTtn} 
                ttnError={ttnError}
                ttns={ttns}
                currentManager={user}
            />
            <DndProvider backend={HTML5Backend}>
                {ttnIsFound && 
                    <DndStock 
                        ttn={curTtn}
                        warehouses={warehouses}
                        showSaveButton={showSaveButton}
                        setSelectedStockState={setWarehousingActiveStock}
                        sendChangedStockData={sendChangedStockData}
                    />
                }
            </DndProvider>
            <WarehousingSubmitButton 
                isShown={statusesState.isSubmitButtonShown}
                catchSubmitAction={catchSubmitAction}
            />
        </React.Fragment>
    )
}

export default Warehousing