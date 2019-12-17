import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Link from '../header/Link'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import useStyles from './landingStyles'

import image from '../../resources/images/our-product.jpg'
import slide1 from '../../resources/images/slide1.jpg'
import slide2 from '../../resources/images/slide2.jpg'
import slide3 from '../../resources/images/slide3.jpg'
import slide4 from '../../resources/images/slide4.jpg'
import slide5 from '../../resources/images/slide5.jpg'

export default function Landing() {
    const classes = useStyles()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        • Warehousing •
                    </Typography>
                        <Link variant="button" color="primary" to="/login" className={classes.link}>
                            <Button  color="primary" variant="outlined" className={classes.link}>
                                Login
                            </Button>
                        </Link>
                </Toolbar>
            </AppBar>
            <Box maxWidth="xl">
                <img src={image} style={{width: '100%'}}/>
            </Box>
            <Container component="main" className={classes.heroContent}>
                <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                    Industrial and Commercial Warehousing
                </Typography>
                <Box mt={4}>
                    <Typography align="center" color="textSecondary" component="p" className={classes.descriptionText}>
                        We provide the simple UI for your warehouse company employees. <br/>
                        Easy to manage, to youse
                    </Typography>
                </Box>
            </Container>
            <Container maxWidth="md" component="main" className={classes.heroContent}>
                <Box>
                    <Slider {...settings}>
                        <div>
                            <img src={slide1} style={{width: '100%'}}/>
                        </div>
                        <div>
                            <img src={slide2} style={{width: '100%'}}/>
                        </div>
                        <div>
                            <img src={slide3} style={{width: '100%'}}/>
                        </div>
                        <div>
                            <img src={slide4} style={{width: '100%'}}/>
                        </div>
                        <div>
                            <img src={slide5} style={{width: '100%'}}/>
                        </div>
                    </Slider>
                </Box>
            </Container>
        </React.Fragment>
    )
}