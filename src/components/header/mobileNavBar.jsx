import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import navigationBar from "./navigationBar";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from './Link'
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
    userInfo: {
        marginTop: '10%',
        borderTop: '2px solid #E8E9E9',
    },
}));

export default ({user, logout}) => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const linksArray = navigationBar(user)

    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const Navigation = ({linksArray}) => {
        const navList = linksArray.map((elem) => {
            return (
                <MenuItem key={elem.name}><Link variant="button" to={elem.link} onClick={handleClose}>
                    {elem.name}
                </Link></MenuItem>)
        })

        navList.push(<MenuItem key={user.email} className={classes.userInfo}><Link to="/me"
                                                                                   onClick={handleClose}>{user.email}</Link></MenuItem>)
        navList.push(<MenuItem key='login'><Button style={{width: '100%'}} color="primary" variant="outlined"
                                                   size="small" onClick={logout}>
            Logout
        </Button></MenuItem>)

        return <>{navList}</>
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <Link to='/Home' style={{textDecoration: 'none'}}>
                        • Warehousing •
                    </Link>
                </Typography>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
                    <MenuIcon/>
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    id="menu-appbar"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <Navigation
                        linksArray={linksArray}/>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}
