import React from 'react'
import {useDrag} from 'react-dnd-cjs'
import ItemTypes from './ItemTypes'
import useStyles from '../../warehousingStyles'

const DndElement = ({name, amount, dimension, ttnNumber, id, spiner, setCurrentHendleCargoUnit}) => {
    const classes = useStyles()
    
    // isDragging is required on the lib layer
    const [{isDragging}, drag] = useDrag({
        item: {name, type: ItemTypes.BOX},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    return (
        <div 
            ref={drag} 
            className={classes.dndElement} 
            onDragStart={() => setCurrentHendleCargoUnit(name, amount, dimension, id, ttnNumber)}>
            <div>
                <b>{name}</b><small> | {amount} {dimension}</small>
            </div>
            {spiner}
        </div>
    )
}

export default DndElement
