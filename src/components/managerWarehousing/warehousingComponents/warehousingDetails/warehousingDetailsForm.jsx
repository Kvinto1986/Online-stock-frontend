import React, { useState, useEffect } from 'react'
import { Typography, Box, Button } from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
const boxImg = require('../../../../resources/images/package-cube-box-for-delivery.png')

const initialDetailsFormState = {
    productQuantity: '',
    productArea: ''
}

const WarehousingDetailsForm = ({ cargoDetails, areaData, ...props}) => {

    const [formState, setFormState] = useState(initialDetailsFormState)

    useEffect(() => {
        if(cargoDetails !== null) {
            ValidatorForm.addValidationRule(
                'isValidCargoAmount', (value) => (value > cargoDetails.amount) ? false : true
            )
            ValidatorForm.addValidationRule(
                'isValidWarehouseArea', (value) => (value > areaData.freeArea) ? false : true
            )
        }
    }, [cargoDetails])

    useEffect(() => {
        return () => {
            ValidatorForm.removeValidationRule('isValidCargoAmount')
            ValidatorForm.removeValidationRule('isValidWarehouseArea')
        }
    }, [])

    const handleChange = event => {
        setFormState({...formState, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
        const { changeActiveData } = props
        const { productQuantity, productArea } = formState
        
        const newCargoState = {
            ...cargoDetails,
            amount: cargoDetails.amount - productQuantity
        }
        
        // TODO: Remove Number type cast in this function
        const newStoredCargo = {
            name: newCargoState.name,
            amount: Number(cargoDetails.amount),
            dimension: newCargoState.dimension,
            size: Number(productArea),
            ttnNumber: cargoDetails.id
        }
        
        
        const newAreaState = {
            ...areaData,
            area: areaData.area,
            freeArea: areaData.freeArea - Number(productArea),
            products: newStoredCargo
        }

            
        changeActiveData(newCargoState, newAreaState)
        setFormState(initialDetailsFormState)
    }

    const isAreasAndWarehousesData = (cargoDetails !== null) && (areaData !== null)

    return (
        <Box ml={5}>
            <Box mb={4}>
                <Typography compoment="h1" variant="h5">Cargo unit warehousing details</Typography>
            </Box>
            {
                isAreasAndWarehousesData 
                ? (
                    <Box mt={7}>
                        <Box display="flex" alignItems="center">
                            <Typography variant="body1">• Name:</Typography>
                            <Box ml={0.5}>
                                <Typography variant="body2">{cargoDetails.name}</Typography>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Typography variant="body1">• Cargo amount:</Typography>
                            <Box ml={0.5}>
                                <Typography variant="body2">{cargoDetails.amount}{cargoDetails.dimension}</Typography>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <div style={{width: '100%'}}>
                                <ValidatorForm onSubmit={handleSubmit}>
                                    <Box mt={4}>
                                        <TextValidator
                                            placeholder={`How much product will be warehoused (${cargoDetails.dimension})`}
                                            fullWidth
                                            value={formState.productQuantity}
                                            name="productQuantity"
                                            onChange={handleChange}
                                            validators={['required', 'matchRegexp:[0-9]$', 'isValidCargoAmount']}
                                            errorMessages={['This field is required', 'The value must contain only numbers', 'Invalid value']}
                                        />
                                    </Box>
                                    <Box mt={2}>
                                        <TextValidator
                                            placeholder="How much area will be warehoused (m²)"
                                            fullWidth
                                            value={formState.productArea}
                                            name="productArea"
                                            onChange={handleChange}
                                            validators={['required', 'matchRegexp:[0-9]$', 'isValidWarehouseArea']}
                                            errorMessages={['This field is required', 'The value must contain only numbers', 'Invalid value']}
                                        />
                                    </Box>
                                    <Box mt={3}>
                                        <Button type="submit" variant="outlined">Move</Button>
                                    </Box>
                                </ValidatorForm>
                            </div>
                        </Box>
                    </Box>
                )
                : (
                    <Box mt={7} display="flex" flexDirection="column" alignItems="center">
                        <img src={boxImg} style={{opacity: '0.3'}} alt="boxImage" />
                        <Box mt={2.5}>
                            <Typography variant="h6" gutterBottom align="center">
                                Drag and drop cargo unit <br />into any area
                            </Typography>
                        </Box>
                    </Box>
                )
            }
        </Box>
    )
}

export default WarehousingDetailsForm