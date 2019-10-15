import WarehousingDataForm from './warehousingComponents/warehousingDataForm'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DndStock from './warehousingComponents/dndStock'
import WarehousingSubmitButton from './warehousingComponents/WarehousingSubmitButton'
import React, { useState, useEffect } from 'react'   
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'

const initialState = {
    ttnIsFound: false
}

const initialWareHousingState = {
    areasData: [],
    formData: ''
}

const Warehousing = ({getTtn, ttnError, ttn, makeWarehousing, warehouses, currentManager, user}) => {

    const [curTtn, setCurTtn] = useState(initialState)
    const [state, setState] = useState(initialState)
    const [wareHousingState, setWareHousingState] = useState(initialWareHousingState)
    const [submitFlag, setSubmitFlag] = useState(false)
    const [warehousingActiveStock, setWarehousingActiveStock] = useState(null)

    const successWirehousingAletrt = () => {
        Swal
        .fire({
            title: 'Success',
            text: 'Cargo will be plased to stock in close time.',
            type: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
            allowOutsideClick: false
        })
        .then(() => {
            setSubmitFlag(false)
            // TODO: Remove page reload
            window.location.reload()
        })
    }

    useEffect(() => {
        if(wareHousingState.areasData.length > 0 && submitFlag) {
            if(wareHousingState.areasData.length === warehousingActiveStock.areas.length) {
                const data = {
                    stockData: warehousingActiveStock,
                    wareHousingData: wareHousingState,
                }

                makeWarehousing(data, successWirehousingAletrt)
            }
        }
    }, [wareHousingState.areasData])

    
    const setCurrentTTN = curTtn => {
        setCurTtn(curTtn) 
    }

    const dndIsShown = value => {
        setState({
            ...state,
            ttnIsFound: value
        })
    }

    const sendChangedStock = changedStockData => { 
        setWareHousingState({
            ...wareHousingState,
            areasData: changedStockData
        })
    }

    const getFormData = data => {
        setWareHousingState({
            ...wareHousingState,
            ttnNumber: data
        })
    }

    const showSaveButton = () => {
        setState({...state, isSubmitButtonShowen: true})
    }

    const catchSubmitAction = () => {
        setSubmitFlag(true)
    }

    const setSelectedStockState = data => {
        setWarehousingActiveStock(data)
    }
        
    return (
        <React.Fragment>
            <WarehousingDataForm 
                setCurrentTTN={setCurrentTTN}
                dndIsShown={dndIsShown}
                getFormData={getFormData} 
                getTtn={getTtn} 
                ttnError={ttnError}
                ttn={ttn}
                currentManager={user}
            />
            <DndProvider backend={HTML5Backend}>
                {state.ttnIsFound && 
                    <DndStock 
                        ttn={curTtn}
                        warehouses={warehouses}
                        showSaveButton={showSaveButton}
                        setSelectedStockState={setSelectedStockState} 
                        submitFlag={submitFlag}
                        sendChangedStock={sendChangedStock}
                    />
                }
            </DndProvider>
            <WarehousingSubmitButton 
                isShowen={state.isSubmitButtonShowen}
                catchSubmitAction={catchSubmitAction}
            />
        </React.Fragment>
    )
}

export default Warehousing