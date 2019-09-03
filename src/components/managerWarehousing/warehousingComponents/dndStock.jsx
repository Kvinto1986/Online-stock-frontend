import React, { useState, useEffect } from 'react'
import DndDestenationArea from './dndStuff/dndDestenationArea'
import DndElement from './dndStuff/dndElement'
import { Box, Grid, Typography, FormControl, InputLabel, Select, MenuItem, Input, Container } from '@material-ui/core'
import { connect } from 'react-redux'
import arow from '../../../resources/images/play-button.png'

const arrowStyle = {
    margin: "0px 8px"
}

const DndStock = props => {

    // *** State ***

    const initialState = {
        chosenWarehouse: '',
        activeDnDCargoUnit: ''
    }

    const [state, setState] = useState(initialState)

    // useEffect(() => {
    //     console.log('!!');
        
    //     props.fetchAvailableStocks()
    // }, [])

    // *** Functions ***
    const handleChange = e => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const dropHendler = () => {
        return state.activeDnDCargoUnit
    }
    
    const setCurrentHendleCargoUnit = (name, amount, dimension) => {
        const personalCargoUnitData = {
            name,
            amount,
            dimension
        }
        
        setState({...state, activeDnDCargoUnit: personalCargoUnitData})
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

    const dndDestenationAreas = state.chosenWarehouse && state.chosenWarehouse.areas.map((stockUnit, index) => {
        return (
            <DndDestenationArea 
                index={index + 1}
                area={stockUnit.area}
                type={stockUnit.type}
                key={stockUnit.area + stockUnit.type} 
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
                                    <img style={arrowStyle} src={arow}/> 
                                    {state.chosenWarehouse.name}
                                </span>
                            )}
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        {props.ttnProductsData && props.ttnProductsData.map(product => {
                            return (
                                <DndElement 
                                    key={product.name + product.type} 
                                    name={product.name} 
                                    amount={product.amount} 
                                    setCurrentHendleCargoUnit={setCurrentHendleCargoUnit}
                                    dimension={product.type} 
                                />
                            )
                        })}
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
export default connect(mapStateToProps)(DndStock)