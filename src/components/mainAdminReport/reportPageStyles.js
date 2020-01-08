import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: 'whiteSmoke',
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
        marginTop:theme.spacing(3),
        padding: theme.spacing(3, 3, 3,3)
    },
    char: {
        marginTop:theme.spacing(5),
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
        marginTop: theme.spacing(3),
    },
    buttonPdf: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(3),
    },
}))

export default useStyles
