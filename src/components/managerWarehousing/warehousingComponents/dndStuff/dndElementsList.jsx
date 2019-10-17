import React from 'react'
import {Box, CircularProgress} from '@material-ui/core'
import DndElement from './dndElement'

const DndElementsList = ({elementData, cargoId, ttnNumber, setCurrentHendleCargoUnit}) => {
    const dndElements = elementData && elementData.map((product, index) => {
        const dimension = (product.type) ? product.type : product.dimension
        const spiner = (cargoId === product.id) ? <CircularProgress size={20}/> : null
        
        if(product.amount > 0) {
            return (
                <DndElement 
                    key={index} 
                    name={product.name} 
                    amount={product.amount}
                    dimension={dimension} 
                    id={product.id}
                    ttnNumber={ttnNumber}
                    spiner={spiner}
                    setCurrentHendleCargoUnit={setCurrentHendleCargoUnit}
                />
            )
        }
    })

    return (
        <Box mr={2.5} display="flex" flexDirection="column">
            {dndElements}
        </Box>
    )
}

export default DndElementsList