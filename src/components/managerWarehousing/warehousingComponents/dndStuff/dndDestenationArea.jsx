import React, { useEffect, useState } from "react"
import { useDrop } from "react-dnd"
import ItemTypes from "./ItemTypes"
import { connect } from "react-redux"

const DndDestenationArea = ({ index, area, type, addCargoUnitToRemove, getEachAreaState, isActiveArea, ...props}) => {
    const initialState = {
        index: "",
        area: "",
        type: ""
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

    const dropOnArea = () => {
        const {activeCargoUnit, initActiveCargoAndArea} = props
        
        const dropedAreaUnitData = activeCargoUnit
        initActiveCargoAndArea(dropedAreaUnitData, state)
        

        // TODO: Yury type fix
        // setState({...state, area: Number(state.area) - Number(dropedAreaUnitData.size)})
        // addCargoUnitToRemove(dropedAreaUnitData)
    } 

    let outline = "1px dashed black"
    let backgroundColor = "white"
    const isActive = canDrop && isOver

    if (isActive) {
        backgroundColor = "#f7f8fc"
        outline = "1px solid black"
    } 
    else if (canDrop) {
        outline = "1px dashed #0014a6"
    } 
    else if (isActiveArea) {
        outline = "2px solid black"
    }
    
    return (
        <div ref={drop} style={{ ...style, backgroundColor, outline }} onDrop={dropOnArea}>
            <div>
                <span><b>Area <em>№ {state.index}</em></b></span><br/>
                <span>Type: <b style={{textDecoration: "underline"}}>{state.type}</b></span><br/>
                <span>Free area: {state.area}m</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    warehousingFlag: state.warehousingFlag,
});

export default connect(mapStateToProps)(DndDestenationArea)

const style = {
    height: "5rem",
    width: "100%",
    marginBottom: "1.5rem",
    color: "black",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: "normal",
}