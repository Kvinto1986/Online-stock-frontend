import React, { useState, useEffect } from "react"
import DndDestenationArea from "./dndStuff/dndDestenationArea"
import DndElement from "./dndStuff/dndElement"
import { Box, Typography, InputLabel, Select, MenuItem, Input, Container, CircularProgress } from "@material-ui/core"
import { connect } from "react-redux"
import arow from "../../../resources/images/play-button.png"
import { setActiveWarehousingStockData } from "../../../actions/warehousingActions"
import WarehousingDetailsForm from "./warehousingDetails/warehousingDetailsForm"

const DndStock = props => {

    // *** State ***

    const initialState = {
        activeDnDCargoUnit: "",
        movedCargoUnits: [],
        cargoIndex: null,
        cargoDetails: null,
        activeArea: null,
        movedData: {},
        cargoElements: props.ttnProductsData,
        chosenWarehouse: "",
        chosenWarehouseInitialState: null
    }
    
    const [state, setState] = useState(initialState)
    
    // *** Functions ***
    
    useEffect(() => {
        if(state.chosenWarehouse.id !== props.warehousingActiveStock.id) {
            const { areas, id } = state.chosenWarehouse
            props.setActiveWarehousingStockData({areas, id})
        }
    }, [state.chosenWarehouse.id])

    const handleSelectChange = e => {
        setState({
            ...state, 
            [e.target.name]: e.target.value, 
            chosenWarehouseInitialState: e.target.value
        })
    }
    
    const setCurrentHendleCargoUnit = (name, amount, dimension, size, id, ttnId) => {
        const personalCargoUnitData = {
            name,
            amount,
            dimension,
            size,
            id,
            ttnId
        }
        
        setState({...state, activeDnDCargoUnit: personalCargoUnitData})
    }

    const addCargoUnitToRemove = cargoUnitData => {
        setState({
            ...state, 
            movedCargoUnits: [...state.movedCargoUnits, cargoUnitData.id]
        })
    }

    const initActiveCargoAndArea = (details, areaData) => {
        setState({
            ...state, 
            cargoIndex: details.id, 
            cargoDetails: details,
            activeArea: areaData
        })
    }

    const changeActiveData = (newCargoState, newAreaState) => {
        
        let newCargoElementsState = [];
        [...state.cargoElements].forEach(element => {
            if(element.id === newCargoState.id) {
                newCargoElementsState.push({...newCargoState, dimension: element.type})
            } 
            else {
                newCargoElementsState.push({...element, dimension: element.type})
            }
        })

        let newWarehouseAreasState = [];
        [...state.chosenWarehouse.areas].forEach((unit, i) => {
            if((i + 1) === newAreaState.index) {
                const { area, type, index, storedCargo, id, ttnId } = newAreaState
                newWarehouseAreasState.push({area, type, index, id, ttnId, storedCargo: [...unit.storedCargo, storedCargo]})
            } else {
                newWarehouseAreasState.push(unit)
            }
        }) 

        setState({
            ...state,
            activeArea: null,
            cargoIndex: null,
            cargoDetails: null,
            cargoElements: newCargoElementsState,
            chosenWarehouse: {...state.chosenWarehouse, areas: newWarehouseAreasState}
        })
    }

    // *** Constants ***

    const options = props.warehouses.map((stock) => {
        return (
            <MenuItem key={stock.name + stock.totalArea} value={stock}>
                {stock.name} (available: {stock.totalArea} m. at {stock.areas.length} areas)
            </MenuItem>
        )
    })

    const noOption = (
        <MenuItem>
            No any available warehouses
        </MenuItem>
    )

    const cargoUnits = state.cargoElements.map((product, index) => {
        if(!state.movedCargoUnits.includes(product.id)) {
            const spinerIndex = ((state.cargoIndex !== null) && (state.cargoIndex === product.id)) 
            ? <CircularProgress size={20}/>
            : null
            const dimension = (product.type) ? product.type : product.dimension
            
            if(product.amount > 0) {
                return (
                    <DndElement 
                        key={product.id + index} 
                        name={product.name} 
                        amount={product.amount} 
                        size={product.size}
                        setCurrentHendleCargoUnit={setCurrentHendleCargoUnit}
                        dimension={dimension} 
                        id={product.id}
                        ttnId={props.ttnData.id}
                        spinerIndex={spinerIndex}
                    />
                )
            }
        }
    })

    useEffect(() => {
        var unWarehousedCargo = state.cargoElements.filter(unit => unit.amount > 0)
        if (unWarehousedCargo.length === 0) {
            props.showSaveButton()
        }
    }, [state.cargoElements])
    
    const dndDestenationAreas = state.chosenWarehouse && state.chosenWarehouse.areas.map((stockUnit, index) => {
        const isActive = (state.activeArea && (state.activeArea.index === (index + 1))) ? true : false
        
        if(stockUnit.area > 0) {
            return (
                <DndDestenationArea 
                    index={index + 1}
                    area={stockUnit.area}
                    type={stockUnit.type}
                    storedCargo = {stockUnit.storedCargo}
                    activeCargoUnit={state.activeDnDCargoUnit}
                    addCargoUnitToRemove={addCargoUnitToRemove}
                    getEachAreaState={props.getEachAreaState}
                    key={stockUnit.area + stockUnit.type + index} 
                    initActiveCargoAndArea={initActiveCargoAndArea}
                    isActiveArea={isActive}
                /> 
            )
        }
    })    
    
    return (
        <Container fixed>
            <Box my={15} display="flex">
                <div style={{width: "100%"}}>
                    <Box mb={7.5}>
                        <Typography compoment="h1" variant="h5">
                            Cargo 
                            {state.chosenWarehouse && (
                                <span>
                                    <img style={{margin: "0px 8px"}} src={arow} alt="-->" /> 
                                    {state.chosenWarehouse.name}
                                </span>
                            )}
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        {cargoUnits}
                    </Box>
                </div>
                <div style={{width: "100%"}}>
                    <Box mb={5}>
                        <InputLabel htmlFor="age-helper">Select stock here*</InputLabel>
                        <Select
                            required    
                            fullWidth
                            onChange={handleSelectChange}
                            value={state.chosenWarehouse}
                            input={<Input name="chosenWarehouse" id="age-helper" />}
                            name="chosenWarehouse"
                        >
                            {props.warehouses ? options : noOption}
                        </Select>
                        {props.errors.stocks && (
                            <p style={{color: "red"}}>{props.errors.stocks}</p>
                        )}
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="flex-end">
                        {dndDestenationAreas}
                    </Box>
                </div>
                <div style={{width: "100%"}}>
                    <WarehousingDetailsForm 
                        cargoDetails={state.cargoDetails} 
                        areaData={state.activeArea} 
                        changeActiveData={changeActiveData}
                    />
                </div>
            </Box>
        </Container> 
    )
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    ttnProductsData: state.TTN.products,
    warehousingActiveStock: state.warehousingActiveStock,
    ttnData: state.TTN,
})
export default connect(mapStateToProps, {
    setActiveWarehousingStockData
})(DndStock)