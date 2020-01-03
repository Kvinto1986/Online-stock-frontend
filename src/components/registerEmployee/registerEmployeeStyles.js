import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: 'WhiteSmoke',
        },
    },
    formName: {
        marginBottom: theme.spacing(3),
        marginTop:theme.spacing(3)
    },

        helperText:{

        color:'red'

        },

    paper: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    formControl: {
        width: '100%'
    },
    form: {
        width:'90%',
        marginBottom: theme.spacing(5),
    },
    submit: {
        width: '100%',
        margin: theme.spacing(4, 0, 0),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },

}));

export default useStyles
