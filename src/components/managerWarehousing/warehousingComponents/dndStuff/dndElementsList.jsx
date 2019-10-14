import React from 'react'
import {Box, CircularProgress} from '@material-ui/core'
import DndElement from './dndElement'

const DndElementsList = ({elementData, movedCargoUnits, cargoIndex, ttnId, setCurrentHendleCargoUnit}) => {

    const dndElements = elementData && elementData.map((product, index) => {
        const isElementRemoved = movedCargoUnits.includes(product.id)

        if(!isElementRemoved) {
            // TODO: dimension ???
            const dimension = (product.type) ? product.type : product.dimension
            const spinerIndex = (cargoIndex === product.id) ? <CircularProgress size={20}/> : null
            
            if(product.amount > 0) {
                return (
                    <DndElement 
                        key={product.id + index} 
                        name={product.name} 
                        amount={product.amount} 
                        size={product.area}
                        setCurrentHendleCargoUnit={setCurrentHendleCargoUnit}
                        dimension={dimension} 
                        id={product.id}
                        ttnId={ttnId}
                        spinerIndex={spinerIndex}
                    />
                )
            }
        }
    })

    return (
        <Box mr={2.5} display="flex" flexDirection="column">
            {dndElements}
        </Box>
    )
}

export default DndElementsList