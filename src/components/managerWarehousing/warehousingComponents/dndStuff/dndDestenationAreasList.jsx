import React from 'react'
import { Box } from '@material-ui/core'
import DndDestenationArea from './dndDestenationArea'

const DndDestenationAreasList = ({chosenWarehouse, activeArea, activeCargoUnit, ...props}) => {
    const dndDestenationAreas = chosenWarehouse && chosenWarehouse.areas.map((stockUnit, index) => {
        const areaIndex = index + 1
        const areaKey = stockUnit.freeArea + stockUnit.type + index
        const isActiveArea = (activeArea && (activeArea.index === (index + 1)))
        
        if(stockUnit.freeArea > 0) {
            return (
                <DndDestenationArea 
                    index={areaIndex}
                    area={stockUnit.area}
                    freeArea={stockUnit.freeArea}
                    type={stockUnit.type}
                    products={stockUnit.products}
                    activeCargoUnit={activeCargoUnit}
                    addCargoUnitToRemove={props.addCargoUnitToRemove}
                    initActiveCargoAndArea={props.initActiveCargoAndArea}
                    key={areaKey} 
                    isActiveArea={isActiveArea}
                /> 
            )
        }
    }) 

    return (
        <Box display="flex" flexDirection="column" justifyContent="flex-end">
            {dndDestenationAreas}
        </Box>
    )
}

export default DndDestenationAreasList