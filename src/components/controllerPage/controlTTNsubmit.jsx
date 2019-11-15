import React from 'react'
import useStyles from './controlTTNstyle'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

export default ({saveTTN, confirm, setConfirm, open, setOpen}) => {
    const classes = useStyles()

    return (
        <div className={classes.select}>
            <FormControlLabel
                data-testid={'checkbox'}
                control={<Checkbox
                    value={confirm}
                    color="primary"
                    checked={confirm}
                    onChange={() => setConfirm(!confirm)}
                />}
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
                data-testid={'reportButton'}
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
                onClick={() => saveTTN(false)}
                data-testid={'submitButton'}
            >
                Finish control
            </Button>
        </div>
    )
}
