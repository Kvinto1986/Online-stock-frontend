import React from "react"
import { useDrag } from "react-dnd"
import ItemTypes from "./ItemTypes"

const DndElement = ({ name, amount, dimension, size, setCurrentHendleCargoUnit, id, ...props }) => {
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
            <div>
                <b>{name}</b> | 
                <small> {amount}{dimension}</small>
            </div>
            {props.spinerIndex}
        </div>
    )
}

export default DndElement

const style = {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid gray",
    backgroundColor: "white",
    padding: "10px 15px",
    marginRight: "1.5rem",
    marginBottom: "1.5rem",
    cursor: "move"
}
