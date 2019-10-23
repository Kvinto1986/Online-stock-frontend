import React from 'react'
import useStyles from './operatorPageStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
// import image from '../../resources/images/like.png'
import Typography from '@material-ui/core/Typography'

export default ({setActiveStep}) => {

    const classes = useStyles()

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.SuccessPaper}>
                {/* Yan's image is not exists... */}
                {/* TODO: Fund yan's image (lol) */}
                {/* <img src={image} style={{width:'70%',marginLeft:'10%',marginBottom:'15%'}}/> */}
                <Typography component="h1" variant="h5" style={{textAlign: 'center', marginBottom: '5%'}}>
                    Congratulations, TTN registration was successful!
                </Typography>
                <Button variant="contained" color="primary" onClick={()=>setActiveStep(0)}>Create a new TTN</Button>
            </div>
        </Container>
    )
}