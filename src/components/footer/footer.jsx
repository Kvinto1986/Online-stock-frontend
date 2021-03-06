import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    const classes = useStyles()

    return (
        <footer>
            <Box className={classes.footerWrapper} display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                    <Typography variant="body2" align="center">
                        {'Copyright © '}
                        <Link color="inherit" href="https://github.com/Kvinto1986/Online-stock-frontend/">
                            React Team {new Date().getFullYear()}
                        </Link>
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <Box ml={3} display="flex" alignItems="center">
                        <Box ml={2}>
                            <Link color="inherit" href="https://github.com/Kvinto1986/Online-stock-frontend/">
                               <FacebookIcon/>
                            </Link>
                        </Box>
                        <Box ml={2}>
                            <Link color="inherit" href="https://github.com/Kvinto1986/Online-stock-frontend/">
                               <TwitterIcon/>
                            </Link>
                        </Box>
                        <Box ml={2}>
                            <Link color="inherit" href="https://github.com/Kvinto1986/Online-stock-frontend/">
                                <GithubIcon/>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </footer>
    )
}

export default Footer

const useStyles = makeStyles(() => ({
    footerWrapper: {
        padding: '15px',
        background: '#3e43a1',
        color:'white',
    },
    social__text: {
        margin: 0,
    },
}))
