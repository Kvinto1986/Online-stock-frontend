import React from 'react'
import WarehousingDataForm from './warehousingComponents/warehousingDataForm'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import DndStock from './warehousingComponents/dndStock'
import WarehousingSubmitButton from './warehousingComponents/WarehousingSubmitButton'

const Warehousing = props => {
    return (
        <React.Fragment>
            <WarehousingDataForm />
            <DndProvider backend={HTML5Backend}>
                <DndStock />
            </DndProvider>
            <WarehousingSubmitButton />
        </React.Fragment>
    )
}

export default Warehousing