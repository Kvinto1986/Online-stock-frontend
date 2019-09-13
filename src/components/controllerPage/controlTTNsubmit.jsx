import React, {useState} from 'react'
import useStyles from './controlTTNstyle'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'


export default ({confirm, setConfirm, open, setOpen}) => {
    const classes = useStyles()

    return (
        <div className={classes.select}>
            <FormControlLabel
                control={<Checkbox value={confirm} color="primary" checked={confirm}
                                   onChange={() => setConfirm(!confirm)}/>}
                label="I confirm the availability of goods"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={() => setOpen(!open)}
                disabled={confirm}
            >
                Сreate a report
            </Button>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={!confirm}
            >
                Finish control
            </Button>
        </div>
    )
}
