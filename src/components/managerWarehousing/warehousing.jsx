import React from 'react'
import WarehousingDataForm from './warehousingComponents/warehousingDataForm'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DndStock from './warehousingComponents/dndStock'
import WarehousingSubmitButton from './warehousingComponents/WarehousingSubmitButton'
import { useState, useEffect } from 'react'
import { fetchAvailableStocks } from '../../actions/warehousingActions'
import { connect } from 'react-redux'

const Warehousing = props => {

    const initialState = {
        ttnIsFound: false
    }

    const initialSomeState = {
        areasData: []
    }

    const [state, setState] = useState(initialState)
    const [someState, setSomeState] = useState(initialSomeState)
    const dndIsShown = value => {
        setState({
            ...state,
            ttnIsFound: value
        })
    }

    useEffect(() => {
        props.fetchAvailableStocks()
    }, [])

    // Dear developer
    // Don't try to understand the function bellow
    // If you are absolutely sure, good luck
    // Please, increase the counter of the spent hours of life for this function
    // HOURS: 2
    const arr = []

    const getEachAreaState = value => {
        arr.push(value)
        setSomeState({
            areasData: arr
        })
    }

    const sendAllDataToServer = () => {

    }

    console.log(someState);
    

    return (
        <React.Fragment>
            <WarehousingDataForm dndIsShown={dndIsShown} />
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
});

export default connect(mapStateToProps, {
    fetchAvailableStocks
})(Warehousing)