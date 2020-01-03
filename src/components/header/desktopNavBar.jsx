import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import navigationBar from './navigationBar'
import Button from '@material-ui/core/Button'
import React from 'react'
import useStyles from './headerStyles'
import Link from './Link'
import Box from '@material-ui/core/Box'

export default ({user, logout}) => {
    const classes = useStyles()

    const linksArray = navigationBar(user)

    const Navigation = ({linksArray}) => {
        const navList = linksArray.map((elem) => {
            return (
                <Link key={elem.name} variant="button" to={elem.link} className={classes.link}>
                    {elem.name}
                </Link>)
        })
        return <nav>{navList}</nav>
    }

    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Box className={classes.toolbarTitle}>
                    <Link to='/Home' variant="h6" style={{textDecoration: 'none'}}>
                        • Warehousing •
                    </Link>
                </Box>
                <Navigation
                    linksArray={linksArray}/>
                <Box component={Link} href={'/me'} display="flex" alignItems="center">
                    <img src={user.avatar} className={classes.icon}/>
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
