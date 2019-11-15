import React, {useState} from 'react'
import {Modal, Box, Typography, Backdrop, Button} from '@material-ui/core'
import useStyles from '../controlTTNstyle'
import InputText from '../../fields/textField'
import { ValidatorForm } from 'react-material-ui-form-validator'

export default ({isModalOpen, handleClose, dmgDescription, setDmgDescription, rowName, actualDescription, getEditData}) => {
    const classes = useStyles()
    const [localDmgDescription, setLocalDmgDescription] = useState('')

    const updateDiscription = () => {
        setDmgDescription({...dmgDescription, [rowName]: localDmgDescription.data})
        getEditData({...dmgDescription, [rowName]: localDmgDescription.data})
        setLocalDmgDescription('')
        handleClose()
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isModalOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Box className={classes.modal}>
                <Box>
                    <Typography component="h5" variant="h5">
                        Damage discription
                    </Typography>
                </Box>
                <ValidatorForm onSubmit={updateDiscription} className={classes.modalForm}>
                    <Box mt={2} fullWidth>
                        <InputText
                            min={10}
                            max={100}
                            pattern={/.*/}
                            fullWidth
                            label="Cargo damage description"
                            required
                            name="data"
                            defaultValue={actualDescription}
                            value={localDmgDescription}
                            handleChange={setLocalDmgDescription}
                            helperClass={classes.inputError}
                            error={{}}
                            rows={5}
                        />
                    </Box>
                    <Box display="flex" justifyContent="center" mt={10}>
                        <Button 
                            type="submit" 
                            variant="outlined" 
                            size="medium"
                            color="primary"
                        >
                            Save
                        </Button>
                    </Box>
                </ValidatorForm>
            </Box>
        </Modal>
    )
}