import React from 'react'
import { useDrop } from 'react-dnd-cjs'
import ItemTypes from './ItemTypes'
import useStyles from '../../warehousingStyles'

const DndDestenationArea = ({index, area, freeArea, products, type, isActiveArea, activeCargoUnit, initActiveCargoAndArea}) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: () => ({name: `Type: ${type}`}),
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })
    
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

    const classes = useStyles({backgroundColor, outline})
    
    return (
        <div 
            ref={drop} 
            className={classes.dndArea}
            onDrop={() => initActiveCargoAndArea(activeCargoUnit, {index, area, freeArea, type, products})}>
            <div>
                <span><b>Area <em>№ {index}</em></b></span><br/>
                <span>Type: <b style={{textDecoration: 'underline'}}>{type}</b></span><br/>
                <span>Free area: {freeArea}m</span>
            </div>
        </div>
    )
}

export default DndDestenationArea