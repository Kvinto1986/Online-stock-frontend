import React, { useState, useEffect } from 'react'
import DndDestenationArea from './dndStuff/dndDestenationArea'
import DndElement from './dndStuff/dndElement'
import { Box, Grid, Typography, FormControl, InputLabel, Select, MenuItem, Input, Container } from '@material-ui/core'
import { connect } from 'react-redux'
import arow from '../../../resources/images/play-button.png'
import { setActiveWarehousingStockData } from '../../../actions/warehousingActions'

const arrowStyle = {
    margin: "0px 8px"
}

const DndStock = props => {

    // *** State ***

    const initialState = {
        chosenWarehouse: '',
        activeDnDCargoUnit: '',
        movedCargoUnits: []
    }

    const [state, setState] = useState(initialState)

    // *** Functions ***

    useEffect(() => {
        const { areas, _id } = state.chosenWarehouse
        props.setActiveWarehousingStockData({areas,_id})
    }, [state.chosenWarehouse])

    const handleChange = e => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const dropHendler = () => state.activeDnDCargoUnit
    
    const setCurrentHendleCargoUnit = (name, amount, dimension, size, id) => {
        const personalCargoUnitData = {
            name,
            amount,
            dimension,
            size,
            id
        }
        
        setState({...state, activeDnDCargoUnit: personalCargoUnitData})
    }

    const addCargoUnitToRemove = cargoUnitData => {
        setState({
            ...state, 
            movedCargoUnits: [...state.movedCargoUnits, cargoUnitData.id]
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

    const cargoUnits = props.ttnProductsData && props.ttnProductsData.map((product, index) => {
        if(state.movedCargoUnits.includes(product.id) === false) {
            return (
                <DndElement 
                    key={product.id + index} 
                    name={product.name} 
                    amount={product.amount} 
                    size={product.size}
                    setCurrentHendleCargoUnit={setCurrentHendleCargoUnit}
                    dimension={product.type} 
                    id={product.id}
                />
            )
        }
    })
    
    const dndDestenationAreas = state.chosenWarehouse && state.chosenWarehouse.areas.map((stockUnit, index) => {
        return (
            <DndDestenationArea 
                index={index + 1}
                area={stockUnit.area}
                type={stockUnit.type}
                dropHendler={dropHendler}
                addCargoUnitToRemove={addCargoUnitToRemove}
                getEachAreaState={props.getEachAreaState}
                key={stockUnit.area + stockUnit.type + index} 
            /> 
        )
    })    
    
    return (
        <Container maxWidth="sm">
            <Box my={10} display="flex">
                <div style={{width: '100%'}}>
                    <Box mb={7.5}>
                        <Typography compoment="h1" variant="h5">
                            Cargo 
                            {state.chosenWarehouse && (
                                <span>
                                    <img style={arrowStyle} src={arow} alt="-->" /> 
                                    {state.chosenWarehouse.name}
                                </span>
                            )}
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        {cargoUnits}
                    </Box>
                </div>
                <div style={{width: '100%'}}>
                    <Box mb={5}>
                        <InputLabel htmlFor="age-helper">Select stock here*</InputLabel>
                        <Select
                            value={state.chosenWarehouse.name || ''}
                            required    
                            fullWidth
                            onChange={handleChange}
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
            </Box>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    errors: state.errors,
    ttnProductsData: state.ttnData.products
});
export default connect(mapStateToProps, {
    setActiveWarehousingStockData
})(DndStock)