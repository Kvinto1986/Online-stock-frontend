import React from 'react'
import WarehousingDataForm from './warehousingComponents/warehousingDataForm'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DndStock from './warehousingComponents/dndStock'
import WarehousingSubmitButton from './warehousingComponents/WarehousingSubmitButton'
import { useState } from 'react'

const Warehousing = props => {

    const initialState = {
        ttnIsFound: false
    }

    const [state, setState] = useState(initialState)

    const dndIsShown = value => {
        setState({
            ...state,
            ttnIsFound: value
        })
    }

    return (
        <React.Fragment>
            <WarehousingDataForm dndIsShown={dndIsShown} />
            <DndProvider backend={HTML5Backend}>
                <DndStock ttnIsFound={state.ttnIsFound}/>
            </DndProvider>
            <WarehousingSubmitButton />
        </React.Fragment>
    )
}

export default Warehousing