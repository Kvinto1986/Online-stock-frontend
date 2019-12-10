import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Account from '../../resources/images/user.png'
import Button from '@material-ui/core/Button'
import React from 'react'
import useStyles from './headerStyles'
import Link from './Link'
import Box from '@material-ui/core/Box'


export default ({user, logout}) => {
    const classes = useStyles()

    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="primary" noWrap className={classes.toolbarTitle}>
                    • Warehousing •
                </Typography>
                <Box component={Link} href={'/me'} display="flex" alignItems="center">
                    <img src={Account} className={classes.icon}/>
                    <Typography variant="h6" color="inherit" noWrap>
                        {user.email}
                    </Typography>
                </Box>
                <Box ml={3}>
                    <Button color="default" variant="outlined" size="small" className={classes.link} onClick={logout}>
                        Logout
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
