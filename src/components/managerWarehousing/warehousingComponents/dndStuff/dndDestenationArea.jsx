import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import useStyles from '../../warehousingStyles'

const initialState = {
    index: '',
    area: '',
    type: '',
    products: ''
}

const DndDestenationArea = ({ index, area, freeArea, products, type, isActiveArea, submitFlag, ...props}) => {
    const classes = useStyles()
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
        setState({index, area, freeArea, type, products})
    }, [])

    useEffect(() => {
        if(submitFlag) {
            setTimeout(() => {
                props.getEachAreaState(state)
            }, 0)
        }
    }, [submitFlag])

    const dropOnArea = () => {
        const {activeCargoUnit, initActiveCargoAndArea} = props
        initActiveCargoAndArea(activeCargoUnit, state)
    } 

    
    let outline = '1px dashed black'
    let backgroundColor = 'white'
    const isActive = canDrop && isOver

    if (isActive) {
        backgroundColor = '#f7f8fc'
        outline = '1px solid black'
    } 
    else if (canDrop) {
        outline = '1px dashed #0014a6'
    } 
    else if (isActiveArea) {
        outline = '2px solid black'
    }
    
    return (
        <div ref={drop} className={classes.dndArea} style={{backgroundColor, outline}} onDrop={dropOnArea}>
            <div>
                <span><b>Area <em>№ {state.index}</em></b></span><br/>
                <span>Type: <b style={{textDecoration: 'underline'}}>{state.type}</b></span><br/>
                <span>Free area: {state.freeArea}m</span>
            </div>
        </div>
    )
}

export default DndDestenationArea