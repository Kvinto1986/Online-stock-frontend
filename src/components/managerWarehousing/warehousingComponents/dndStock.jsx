import React, { useState, useEffect } from 'react'
import { Box, Typography, InputLabel, Select, MenuItem, Input, Container } from '@material-ui/core'
import arow from '../../../resources/images/play-button.png'
import WarehousingDetailsForm from './warehousingDetails/warehousingDetailsForm'
import DndElementsList from './dndStuff/dndElementsList'
import DndDestenationAreasList from './dndStuff/dndDestenationAreasList'

const DndStock = ({ttn, warehouses, showSaveButton, setSelectedStockState, sendChangedStockData}) => {

    const initialState = {
        activeDnDCargoUnit: '',
        cargoId: null,
        cargoDetails: null,
        activeArea: null,
        movedData: {},
        cargoElements: ttn.products,
        ttnNumber: ttn.id,
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
    }, [setSelectedStockState, state.chosenWarehouse, state.chosenWarehouse.id, state.chosenWarehouseInitialState])

    const handleSelectChange = e => {
        setState({
            ...state, 
            [e.target.name]: e.target.value, 
            chosenWarehouseInitialState: e.target.value
        })
    }
    
    const setCurrentHendleCargoUnit = (name, amount, dimension, id, ttnNumber) => {
        const personalCargoUnitData = {
            name,
            amount,
            dimension,
            id,
            ttnNumber
        }
        
        setState({...state, activeDnDCargoUnit: personalCargoUnitData})
    }

    const initActiveCargoAndArea = (details, areaData) => {
        setState({
            ...state, 
            cargoId: details.id, 
            cargoDetails: details,
            activeArea: areaData
        })
    }

    const checkToSubmit = cargo => {
        const unWarehousedCargo = cargo.filter(unit => unit.amount > 0)

        if (unWarehousedCargo.length === 0) {
            showSaveButton()
        }
    }

    const calculateNewCargoState = newCargoState => {
        let newCargoElementsState = [];
        [...state.cargoElements].forEach(element => {
            if(element.id === newCargoState.id) {
                newCargoElementsState.push({...newCargoState, dimension: element.type, id: element.id})
            } 
            else {
                newCargoElementsState.push({...element, dimension: element.type, id: element.id})
            }
        })

        return newCargoElementsState
    }

    const calculateNewWarehouseState = newAreaState => {
        let newWarehouseAreasState = [];
        [...state.chosenWarehouse.areas].forEach((unit, i) => {
            if((i + 1) === newAreaState.index) {
                const { area, freeArea, type, index, products} = newAreaState
                newWarehouseAreasState.push({area, freeArea, type, index, products: [...unit.products, products]})
            } else {
                newWarehouseAreasState.push(unit)
            }
        }) 
        
        return newWarehouseAreasState
    }

    const setWarehousingState = (cargo, warehouse) => {
        setState({
            ...state,
            cargoId: null,
            activeArea: null,
            cargoIndex: null,
            cargoDetails: null,
            cargoElements: cargo,
            chosenWarehouse: {...state.chosenWarehouse, areas: warehouse}
        })
    }

    const changeActiveData = (newCargoState, newAreaState) => {
        const updatedCargo = calculateNewCargoState(newCargoState)
        const updatedWarehouse = calculateNewWarehouseState(newAreaState)
        
        setWarehousingState(updatedCargo, updatedWarehouse)
        sendChangedStockData(updatedWarehouse)
        checkToSubmit(updatedCargo)
    }
    
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
                        cargoId={state.cargoId}
                        ttnNumber={state.ttnNumber}
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
                            value={state.chosenWarehouseInitialState || ''}
                            input={<Input name="chosenWarehouse" id="age-helper" />}
                            name="chosenWarehouse"
                        >
                            {
                                warehouses 
                                ? (
                                    Object.values(warehouses).map((stock) => {
                                        return (
                                            <MenuItem key={stock.name + stock.totalArea + stock.index} value={stock}>
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
                        activeCargoUnit={state.activeDnDCargoUnit}
                        initActiveCargoAndArea={initActiveCargoAndArea}
                    />
                </div>
                <div style={{width: '100%'}}>
                    <WarehousingDetailsForm 
                        cargoDetails={state.cargoDetails} 
                        areaData={state.activeArea} 
                        changeActiveData={changeActiveData}
                        ttnNumber={state.ttnNumber}
                    />
                </div>
            </Box>
        </Container> 
    )
}

export default DndStock