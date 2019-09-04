import React from 'react'
import { useDrag, useState } from 'react-dnd'
import ItemTypes from './ItemTypes'

const DndElement = ({ name, amount, dimension, setCurrentHendleCargoUnit }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { name, type: ItemTypes.BOX },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                alert(`You dropped ${item.name} into ${dropResult.name}!`)
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const dragStartHendler = () => {
        setCurrentHendleCargoUnit(name, amount, dimension)
    }

    const opacity = isDragging ? 0.4 : 1

    return (
        <div ref={drag} style={{ ...style, opacity }} onDragStart={dragStartHendler}>
            {name} | <small>{amount}{dimension}</small>
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
