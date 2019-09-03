import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'

const DndDestenationArea = ({ index, area, type, dropHendler }) => {

    const [areaState, setAreaState] = useState()
    const [updatedAreaState , updateAreaState] = useState()
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: () => ({ name: `Type: ${type}` }),
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    useEffect(() => {
        setAreaState({index, area, type})
    }, [])

    const dropOnArea = () => {
        // setAreaState({index, area, type})
        updateAreaState({...areaState, updatedAreaState})
        dropHendler()
    } 

    const isActive = canDrop && isOver
    let backgroundColor = 'white'

    if (isActive) {
        backgroundColor = '#70e66e'
    } else if (canDrop) {
        backgroundColor = '#d7ddfa'
    }
    return (
        <div ref={drop} style={{ ...style, backgroundColor }} onDrop={dropOnArea}>
            {isActive 
            ? (
                <p><b>- Drop cargo here to place it to stock -</b></p>
            ) 
            : (
                <div>
                    <span>Area <em>№ {index}</em></span><br/>
                    <span>Type: <b style={{textDecoration: "underline"}}>{type}</b></span><br/>
                    <span>Free area: {area}m</span>
                    <p><b>- Drag a cargo here -</b></p>
                </div>
            )}
        </div>
    )
}

export default DndDestenationArea

const style = {
    height: '9.5rem',
    width: '17rem',
    marginBottom: '1.5rem',
    color: 'black',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    border: '1px gray dashed',
}