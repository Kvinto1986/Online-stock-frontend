import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import helloImg from '../../resources/images/IT.png'
import Box from '@material-ui/core/Box'
const logo = require('../../resources/logo/appLogo2.png')

export default function Home() {
    const classes = useStyles()
    return (
        <Container maxWidth="xl">
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="xl">
                        {/* <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom className={classes.welcomeTitle}>
                            WAREHOUSING
                        </Typography> */}
                        
                        {window.innerWidth > 1330 
                        ? (
                            <>
                                <Typography align="center" color="primary" component="p" className={classes.welcomeText2}>
                                    Welcome to the system!
                                </Typography>
                                <Typography align="center" color="primary" component="p" className={classes.welcomeText}>
                                    Welcome to the system!
                                </Typography>
                            </>
                        )
                        : (
                            <Typography align="center" color="primary" component="p" className={classes.welcomeText3}>
                                Welcome to the system!
                            </Typography>
                        )}
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Box mt={window.innerWidth > 2500 ? 50 : 10} display="flex" justifyContent="center">
                        <img 
                            src={logo} 
                            alt={helloImg} 
                            style={{
                                width: window.innerWidth > 1800
                                    ? '35vw'
                                    : window.innerWidth > 1200
                                        ? '550px' 
                                        : window.innerWidth > 900
                                            ? '45vw' 
                                            : '60vw'
                            }} 
                        />
                    </Box>
                </Container>
            </main>
        </Container>
    )
}

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: 'WhiteSmoke',
        },
    },
    heroContent: {
        padding: theme.spacing(5, 0, 3),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    welcomeTitle: {
        fontSize: '2.5em'
    },
    welcomeText: {
        position: 'absolute',
        top: '50%',
        right: '2%',
        transform: 'rotate(90deg)',
        fontSize: '3em',
        fontWeight: '900'
    },
    welcomeText2: {
        position: 'absolute',
        top: '50%',
        left: '2%',
        transform: 'rotate(-90deg)',
        fontSize: '3em',
        fontWeight: '900'
    },
    welcomeText3: {
        fontSize: '1.8em',
        fontWeight: '900'
    }
}))
