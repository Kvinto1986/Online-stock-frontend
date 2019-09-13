import React, {Fragment} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import useStyles from './controlTTNstyle'
import Typography from '@material-ui/core/Typography'

import TTNsearch from './controlTTNsearch'
import TTNcard from './controlTTNcard'
import SubmitButton from './controlTTNsubmit'
import TTNdialog from './controlTTNdescription'


export default ({ttnsList, selectedTtn, findTTN, confirm, setConfirm, open, setOpen}) => {
    const classes = useStyles()

    return (
        <Container component="main" maxWidth="xl" className={classes.mainContainer}>
            <CssBaseline/>
            <Typography component="h2" variant="h4" align="center" color="textPrimary" style={{marginTop: '3%'}}
                        gutterBottom>
                Search by TTN number
            </Typography>
            <TTNsearch
                ttnsList={ttnsList}
                findTTN={findTTN}
            />
            {Object.keys(selectedTtn).length !== 0 && (
                <Fragment>
                    <TTNcard
                        ttn={selectedTtn}
                    />
                    <SubmitButton
                        confirm={confirm}
                        setConfirm={setConfirm}
                        open={open}
                        setOpen={setOpen}
                    />
                    <TTNdialog
                        ttn={selectedTtn}
                        open={open}
                        setOpen={setOpen}
                    />
                </Fragment>)}

        </Container>

    )
}