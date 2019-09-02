import React from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'

const DndDestenationArea = ({ index, area, type, dropHendler }) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: () => ({ name: `Type: ${type}` }),
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    const isActive = canDrop && isOver
    let backgroundColor = 'white'

    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }
    return (
        <div ref={drop} style={{ ...style, backgroundColor }} onDrop={dropHendler}>
            {isActive ? 'Release to drop' : (
                <div>
                    <span>Warehouse area <em>№ {index}</em></span><br/>
                    <span>Type: <small>{type}</small></span><br/>
                    <span>Free area: {area}m (={area * 100}) kg</span>
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