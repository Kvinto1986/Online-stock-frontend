import React, { useState, useEffect } from 'react'
import { Typography, Box, Button } from '@material-ui/core'
import { ValidatorForm } from 'react-material-ui-form-validator'
import InputText from '../../../fields/textField'
import { useReset } from '../../../../hooks/hook'
import useStyles from '../../warehousingStyles'
const boxImg = require('../../../../resources/images/package-cube-box-for-delivery.png')

const initialDetailsFormState = {
    productQuantity: '',
    productArea: ''
}

const WarehousingDetailsForm = ({cargoDetails, areaData, changeActiveData, ttnNumber}) => {
    const [formState, setFormState] = useState(initialDetailsFormState)
    const [key, reset] = useReset()
    const classes = useStyles()

    useEffect(() => {
        // Subscribe on aditional validate flags
        if(cargoDetails !== null) {
            ValidatorForm.addValidationRule(
                'isValidCargoAmount',   (value) => !(Number(value) > Number(cargoDetails.amount))
            )
            ValidatorForm.addValidationRule(
                'isValidWarehouseArea', (value) => !(Number(value) > Number(areaData.freeArea))
            )
        }

        // Unsubscribe
        return () => {
            ValidatorForm.removeValidationRule('isValidCargoAmount')
            ValidatorForm.removeValidationRule('isValidWarehouseArea')
        }
    }, [areaData, cargoDetails])

    const handleSubmit = () => {
        const { productQuantity, productArea } = formState

        const newCargoState = {
            name: cargoDetails.name,
            amount: cargoDetails.amount - productQuantity,
            type: cargoDetails.type || cargoDetails.dimension,
            id: cargoDetails.id,
            ttnNumber: ttnNumber
        }    
        
        const newStoredCargo = {
            name: newCargoState.name,
            amount: Number(productQuantity),
            availableAmount: Number(productQuantity),
            package: newCargoState.type,
            size: Number(productArea),
            ttnNumber: ttnNumber,
            id: newCargoState.id
        }

        const newAreaState = {
            ...areaData,
            area: areaData.area,
            freeArea: areaData.freeArea - Number(productArea),
            products: newStoredCargo
        }
    
        changeActiveData(newCargoState, newAreaState)
        setFormState(initialDetailsFormState)
        reset()
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
                                    <Box mt={2}>
                                        <InputText
                                            min={0}
                                            max={10}
                                            pattern={/^[0-9]*$/}
                                            fullWidth
                                            label={`Warehoused products (${cargoDetails.dimension})`}
                                            required
                                            name="productQuantity"
                                            value={formState}
                                            handleChange={setFormState}
                                            helperClass={classes.inputError}
                                            error={{}}
                                            validators={['isValidCargoAmount']}
                                            errorMessages={['Invalid value']}
                                            key={key}
                                        />
                                    </Box>
                                    <Box>
                                        <InputText
                                            min={0}
                                            max={10}
                                            pattern={/^[0-9]*$/}
                                            fullWidth
                                            label="Warehoused area (m²)"
                                            required
                                            name="productArea"
                                            value={formState}
                                            handleChange={setFormState}
                                            helperClass={classes.inputError}
                                            error={{}}
                                            validators={['isValidWarehouseArea']}
                                            errorMessages={['Invalid value']}
                                            key={key}
                                        />
                                    </Box>
                                    <Box mt={1}>
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