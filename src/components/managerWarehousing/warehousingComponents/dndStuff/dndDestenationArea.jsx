import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'

const DndDestenationArea = ({ index, area, type, dropHendler, addCargoUnitToRemove }) => {
    const initialState = {
        index: 'Loading ...',
        area: 'Loading ...',
        type: 'Loading ...'
    }

    const [state, setState] = useState(initialState)
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: () => ({ name: `Type: ${type}` }),
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    useEffect(() => {
        setState({index, area, type})
    }, [])

    // Change area data
    const dropOnArea = () => {
        const dropedAreaUnitData = dropHendler()
        // TODO: Yury type fix
        setState({...state, area: Number(state.area) - Number(dropedAreaUnitData.size)})
        addCargoUnitToRemove(dropedAreaUnitData)
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
            <div>
                <span>Area <em>№ {state.index}</em></span><br/>
                <span>Type: <b style={{textDecoration: "underline"}}>{state.type}</b></span><br/>
                <span>Free area: {state.area}m</span>
                <p><b>- Drag a cargo here -</b></p>
            </div>
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