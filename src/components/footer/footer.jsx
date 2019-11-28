import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import React from "react";
import {SocialIcon} from "react-social-icons";
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
    },
    social: {
        display: "flex",
        alignItems: "center"
    }
}));

const Footer = () => {

    const classes = useStyles();

    return (

        <Paper className={classes.footer}>
            <Box className={classes.social}>
                <Typography variant="h6" component="span" color="textPrimary" gutterBottom>
                    SOCIAL LINKS
                </Typography>
                <Box ml={2}>
                    <SocialIcon url="http://facebook.com" target='_blank' style={{width: 24, height: 24, marginRight: 8}}/>
                    <SocialIcon url="http://twitter.com" target='_blank' style={{width: 24, height: 24, marginRight: 8}}/>
                    <SocialIcon url="https://www.instagram.com" target='_blank' style={{width: 24, height: 24, marginRight: 8}}/>
                </Box>
            </Box>
            <Box>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://github.com/Kvinto1986/Online-stock-frontend/">
                        Dream Team
                    </Link>{' '}
                    {new Date().getFullYear()}
                </Typography>
            </Box>
        </Paper>
    )
};

export default Footer
