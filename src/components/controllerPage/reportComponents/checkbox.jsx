import React, {useEffect} from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

export default ({checks, initChecks, unitName, handleCheckboxChange, id}) => {
    useEffect(() => {
        initChecks(unitName, id)
    }, [])
    
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checks[unitName] || false}
                    onChange={handleCheckboxChange(unitName)}
                    value={id}
                    color="primary"
                />
            }
        />
    )
}