import React from 'react'
import {useDrag} from 'react-dnd'
import ItemTypes from './ItemTypes'
import useStyles from '../../warehousingStyles'

const DndElement = ({ name, amount, dimension, ttnId, setCurrentHendleCargoUnit, id, ...props }) => {
    const classes = useStyles()
    
    const [{isDragging}, drag] = useDrag({
        item: {name, type: ItemTypes.BOX},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const dragStartHendler = () => {
        setCurrentHendleCargoUnit(name, amount, dimension, id, ttnId)
    }

    return (
        <div ref={drag} className={classes.dndElement} onDragStart={dragStartHendler}>
            <div>
                <b>{name}</b> | 
                <small> {amount}{dimension}</small>
            </div>
            {props.spinerIndex}
        </div>
    )
}

export default DndElement
