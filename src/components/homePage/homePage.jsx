import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import helloImg from '../../resources/images/IT.png'
import Box from '@material-ui/core/Box'

export default function Home() {
    const classes = useStyles()
    return (
        <Box className={classes.homeWrapp}>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="xl">
                        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom className={classes.welcomeTitle}>
                            • WAREHOUSING •
                        </Typography>
                        <Typography align="center" color="textSecondary" component="p" className={classes.welcomeText}>
                            Welcome to the system!
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Box mt={5} display="flex" justifyContent="center">
                        <img src={helloImg} alt={helloImg} width="75%" />
                    </Box>
                </Container>
            </main>
        </Box>
    )
}

const useStyles = makeStyles(theme => ({
    homeWrapp: {
        padding: '45px 15px',
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
        fontSize: '1.5em'
    },
}))