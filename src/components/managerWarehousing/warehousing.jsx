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

    const [state, setState] = useState(initialState)
    // const []
    const dndIsShown = value => {
        setState({
            ...state,
            ttnIsFound: value
        })
    }

    useEffect(() => {
        props.fetchAvailableStocks()
    }, [])

    const getEachAreaState = value => {

        return value
    }

    const sendAllDataToServer = () => {

    }

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