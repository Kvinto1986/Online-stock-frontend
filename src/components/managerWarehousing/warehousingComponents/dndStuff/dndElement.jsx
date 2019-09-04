import React from 'react'
import { useDrag, useState } from 'react-dnd'
import ItemTypes from './ItemTypes'

const DndElement = ({ name, amount, dimension, size, setCurrentHendleCargoUnit, id }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { name, type: ItemTypes.BOX },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const dragStartHendler = () => {
        setCurrentHendleCargoUnit(name, amount, dimension, size, id)
    }

    const opacity = isDragging ? 0.4 : 1

    return (
        <div ref={drag} style={{ ...style, opacity }} onDragStart={dragStartHendler}>
            <b>{name}</b> | <small>{amount}{dimension} <b>({size}m)</b></small>
        </div>
    )
}

export default DndElement

const style = {
    border: '1px solid gray',
    backgroundColor: 'white',
    padding: '10px 15px',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
}
