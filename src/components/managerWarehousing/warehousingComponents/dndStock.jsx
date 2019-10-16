import React, { useState, useEffect } from 'react'
import { Box, Typography, InputLabel, Select, MenuItem, Input, Container } from '@material-ui/core'
import arow from '../../../resources/images/play-button.png'
import WarehousingDetailsForm from './warehousingDetails/warehousingDetailsForm'
import DndElementsList from './dndStuff/dndElementsList'
import DndDestenationAreasList from './dndStuff/dndDestenationAreasList'

const DndStock = ({sendChangedStock, ttn, warehouses, showSaveButton, setSelectedStockState}) => {

    const initialState = {
        activeDnDCargoUnit: '',
        movedCargoUnits: [],
        cargoIndex: null,
        cargoDetails: null,
        activeArea: null,
        movedData: {},
        cargoElements: ttn.products,
        chosenWarehouse: '',
        chosenWarehouseInitialState: null
    }
    
    const [state, setState] = useState(initialState)
    
    useEffect(() => {
        const isWarehouseStateInitialized = state.chosenWarehouse && state.chosenWarehouseInitialState

        if (isWarehouseStateInitialized) {
            const { areas, id } = state.chosenWarehouse
            setSelectedStockState({areas, id})
        }
    }, [state.chosenWarehouse.id])

    useEffect(() => {
        const unWarehousedCargo = state.cargoElements.filter(unit => unit.amount > 0)
        if (unWarehousedCargo.length === 0) {
            showSaveButton()
        }
    }, [state.cargoElements])

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
            cargoIndex: details.size, 
            cargoDetails: details,
            activeArea: areaData
        })
    }

    const changeActiveData = (newCargoState, newAreaState) => { 
        let newCargoElementsState = [];
        [...state.cargoElements].forEach(element => {
            if(element.id === newCargoState.size) {
                
                newCargoElementsState.push({...newCargoState, dimension: element.type})
            } 
            else {
                newCargoElementsState.push({...element, dimension: element.type})
            }
        })
        
        let newWarehouseAreasState = [];
        [...state.chosenWarehouse.areas].forEach((unit, i) => {
            if((i + 1) === newAreaState.index) {
                const { area, freeArea, type, index, products} = newAreaState
                
                newWarehouseAreasState.push({area, freeArea, type, index, products: [...unit.products, products]})
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

    useEffect(() => {
        sendChangedStock(state.chosenWarehouse.areas)
    }, [state.chosenWarehouse.areas])
    
    
    return (
        <Container fixed>
            <Box my={15} display="flex">
                <div style={{width: '100%'}}>
                    <Box mb={7.5}>
                        <Typography compoment="h1" variant="h5">
                            Cargo 
                            {state.chosenWarehouse && (
                                <span>
                                    <img style={{margin: '0px 8px'}} src={arow} alt="-->" /> 
                                    {state.chosenWarehouse.name}
                                </span>
                            )}
                        </Typography>
                    </Box>
                    <DndElementsList 
                        elementData={state.cargoElements}
                        movedCargoUnits={state.movedCargoUnits}
                        cargoIndex={state.cargoIndex}
                        ttnId={ttn.id}
                        setCurrentHendleCargoUnit={setCurrentHendleCargoUnit}
                    />
                </div>
                <div style={{width: '100%'}}>
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
                            {
                                warehouses 
                                ? (
                                    Object.values(warehouses).map((stock) => {
                                        return (
                                            <MenuItem key={stock.name + stock.totalArea} value={stock}>
                                                {stock.name} (available: {stock.freeArea} m. at {stock.areas.length} areas)
                                            </MenuItem>
                                        )
                                    })
                                )
                                : (
                                    <MenuItem>
                                        No any available warehouses
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </Box>
                    <DndDestenationAreasList 
                        chosenWarehouse={state.chosenWarehouse}
                        activeArea={state.activeArea}
                        activeDnDCargoUnit={state.activeDnDCargoUnit}
                        addCargoUnitToRemove={addCargoUnitToRemove}
                        initActiveCargoAndArea={initActiveCargoAndArea}
                    />
                </div>
                <div style={{width: '100%'}}>
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

export default DndStock