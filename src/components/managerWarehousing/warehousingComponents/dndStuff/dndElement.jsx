import React from 'react'
import {useDrag} from 'react-dnd-cjs'
import ItemTypes from './ItemTypes'
import useStyles from '../../warehousingStyles'

const DndElement = ({name, amount, dimension, ttnNumber, id, spiner, setCurrentHendleCargoUnit}) => {
    const classes = useStyles()
    
    const [{isDragging}, drag] = useDrag({
        item: {name, type: ItemTypes.BOX},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const dragStartHendler = () => {
        setCurrentHendleCargoUnit(name, amount, dimension, id, ttnNumber)
    }

    return (
        <div ref={drag} className={classes.dndElement} onDragStart={dragStartHendler}>
            <div>
                <b>{name}</b><small> | {amount} {dimension}</small>
            </div>
            {spiner}
        </div>
    )
}

export default DndElement
