import React from 'react'
import WarehousingDataForm from './warehousingComponents/warehousingDataForm'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DndStock from './warehousingComponents/dndStock'
import WarehousingSubmitButton from './warehousingComponents/WarehousingSubmitButton'
import { useState, useEffect } from 'react'
import { fetchAvailableStocks } from '../../actions/warehousingActions'
import { connect } from 'react-redux'
import { warehousingPostData } from '../../actions/warehousingActions'
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2/dist/sweetalert2.js'

const Warehousing = props => {

    // *** State ***

    const initialState = {
        ttnIsFound: false
    }

    const initialWareHousingState = {
        areasData: [],
        formData: ''
    }

    const [state, setState] = useState(initialState)
    const [wareHousingState, setWareHousingState] = useState(initialWareHousingState)

    // *** Variables ***

    const associativeAreaState = []

     // *** Functions ***

    const successWirehousingAletrt = () => {
        Swal
        .fire({
            title: 'Success',
            text: "Cargo will be plased to stock in close time.",
            type: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
            allowOutsideClick: false
        })
        .then(() => {
            window.location.reload()
        })
    }

    useEffect(() => {
        props.fetchAvailableStocks()
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if(wareHousingState.areasData.length > 0) {
                if(wareHousingState.areasData.length === props.warehousingActiveStock.areas.length) {
                    const data = {
                        stockData: props.warehousingActiveStock,
                        wareHousingData: wareHousingState,
                    }
                    
                    props.warehousingPostData(data, successWirehousingAletrt)
                }
            }
        }, 0)
    }, [wareHousingState.areasData])

    const dndIsShown = value => {
        setState({
            ...state,
            ttnIsFound: value
        })
    }

    const getEachAreaState = value => {
        associativeAreaState.push(value)

        setWareHousingState({
            ...wareHousingState,
            areasData: associativeAreaState
        })
    }

    const getFormData = data => {
        setWareHousingState({
            ...wareHousingState,
            formData: data
        })
    }
        
    return (
        <React.Fragment>
            <WarehousingDataForm dndIsShown={dndIsShown} getFormData={getFormData} />
            <DndProvider backend={HTML5Backend}>
                {state.ttnIsFound && 
                    <DndStock 
                        warehouses={props.warehouses} 
                        getEachAreaState={getEachAreaState} />
                }
            </DndProvider>
            <WarehousingSubmitButton />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    warehouses: state.warehouses,
    warehousingActiveStock: state.warehousingActiveStock
});

export default connect(mapStateToProps, {
    fetchAvailableStocks,
    warehousingPostData
})(Warehousing)