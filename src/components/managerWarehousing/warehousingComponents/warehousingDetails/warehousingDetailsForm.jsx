import React, { useState, useEffect } from "react"
import { Typography, Box, Button } from "@material-ui/core"
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator"

const WarehousingDetailsForm = ({ cargoDetails, areaData, ...props}) => {
    
    const initialDetailsFormState = {
        productQuantity: "",
        productArea: ""
    }

    const [formState, setFormState] = useState(initialDetailsFormState)

    useEffect(() => {
        if(cargoDetails !== null) {
            ValidatorForm.addValidationRule(
                "isValidCargoAmount", (value) => (value > cargoDetails.amount) ? false : true
            )
            ValidatorForm.addValidationRule(
                "isValidWarehouseArea", (value) => (value > areaData.area) ? false : true
            )
        }
    }, [cargoDetails])

    useEffect(() => {
        return () => {
            ValidatorForm.removeValidationRule("isValidCargoAmount")
            ValidatorForm.removeValidationRule("isValidWarehouseArea")
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

        const newStoredCargo = {
            name: newCargoState.name,
            amount: productQuantity,
            dimension: newCargoState.dimension,
            size: productArea
        }

        const newAreaState = {
            ...areaData,
            area: areaData.area - productArea,
            storedCargo: newStoredCargo
        }

        changeActiveData(newCargoState, newAreaState)
        setFormState(initialDetailsFormState)
    }

    const boxImg = require("../../../../resources/images/package-cube-box-for-delivery.png")

    return (
        <Box ml={5}>
            {/* Cargo unit description */}
            <Box mb={4}>
                <Typography compoment="h1" variant="h5">Cargo unit warehousing details</Typography>
            </Box>
            {
                ((cargoDetails !== null) && (areaData !== null)) 
                ? (
                    <>
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
                        {/* Details form */}
                        <Box display="flex" alignItems="center">
                            <div style={{width: "100%"}}>
                                <ValidatorForm onSubmit={handleSubmit}>
                                    <Box mt={4}>
                                        <TextValidator
                                            placeholder={`How much product will be warehoused (${cargoDetails.dimension})`}
                                            fullWidth
                                            value={formState.productQuantity}
                                            name="productQuantity"
                                            onChange={handleChange}
                                            validators={["required", "matchRegexp:[0-9]$", "isValidCargoAmount"]}
                                            errorMessages={["This field is required", "The value must contain only numbers", "Invalid value"]}
                                        />
                                    </Box>
                                    <Box mt={2}>
                                        <TextValidator
                                            placeholder="How much area will be warehoused (m²)"
                                            fullWidth
                                            value={formState.productArea}
                                            name="productArea"
                                            onChange={handleChange}
                                            validators={["required", "matchRegexp:[0-9]$", "isValidWarehouseArea"]}
                                            errorMessages={["This field is required", "The value must contain only numbers", "Invalid value"]}
                                        />
                                    </Box>
                                    <Box mt={3}>
                                        <Button type="submit" variant="outlined">Move</Button>
                                    </Box>
                                </ValidatorForm>
                            </div>
                        </Box>
                    </>
                )
                : (
                    <Box mt={5} display="flex" flexDirection="column" alignItems="center">
                        <img src={boxImg} style={{opacity: "0.3"}}/>
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