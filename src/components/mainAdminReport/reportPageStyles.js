import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
        ul: {
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: 'none',
        },
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6)
    },
    time:{
        padding: theme.spacing(3, 0, 6),
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    error:{
        marginTop: 15,
        color:'red'
    },

    input: {
        marginLeft: 8,
        flex: 1,
    },

    iconButton: {
        padding: 10,
    },

    button: {
        margin: theme.spacing(3),
    },
}));

export default useStyles