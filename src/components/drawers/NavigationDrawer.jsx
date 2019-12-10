import React, {useState} from 'react';
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {connect, useSelector} from "react-redux";
import {changeStatus, getCompaniesList, getCompany} from "../../store/actions/companyAdminAction";
import {getNavigationRoutes, getRoutes} from "../../store/filters";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    list: {
        padding: 0,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        top: "auto",
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(8),
        },
        top: "auto",
    },
}));
const drawerWidth = 240;

/**
 * Компонент левого дравера. Есть бажок на разрешении телефонном.
 * Здесь отрисовываются роуты, которые доступны для текущего юзера (getNavigationRoutes - селектор)
 * */
const NavigationDrawer = () => {

    const [open, setOpen] = useState(false);
    const routes = useSelector(getNavigationRoutes);
    const classes = useStyles();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
            open={open}>
            <List className={classes.list}>
                <ListItem button onClick={toggleDrawer}>
                    <ListItemIcon>
                        {!open ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </ListItemIcon>
                </ListItem>
                <Divider/>
                {routes.map(({name, route}, index) => (
                    <Link to={route} key={route} variant="button">
                        <ListItem button>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={name}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Drawer>
    );
};

export default NavigationDrawer;
