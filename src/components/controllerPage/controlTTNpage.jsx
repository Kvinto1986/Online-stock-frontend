import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import useStyles from './controlTTNstyle'
import Typography from '@material-ui/core/Typography'

import TTNsearch from './controlTTNsearch'
import TTNcard from './controlTTNcard'


export default ({ttnsList, selectedTtn, findTTN}) => {
    const classes = useStyles()
    console.log(Object.keys(selectedTtn).length)

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
            {Object.keys(selectedTtn).length!==0 && (<TTNcard
                ttn={selectedTtn}
            />)}
        </Container>

    )
}