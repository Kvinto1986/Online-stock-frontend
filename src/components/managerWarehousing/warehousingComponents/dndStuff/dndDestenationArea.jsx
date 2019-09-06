import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { connect } from 'react-redux'

const DndDestenationArea = ({ index, area, type, dropHendler, addCargoUnitToRemove, getEachAreaState, ...props}) => {
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

    useEffect(() => {
        if(props.warehousingFlag) {
            setTimeout(() => {getEachAreaState(state)}, 0)
        }
    }, [props.warehousingFlag]);

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

const mapStateToProps = (state) => ({
    warehousingFlag: state.warehousingFlag,
});

export default connect(mapStateToProps)(DndDestenationArea)

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