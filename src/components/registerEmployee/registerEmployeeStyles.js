import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    formName: {
        marginBottom: theme.spacing(3),
    },

        helperText:{

        color:'red'

        },

    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formControl: {
        width: '100%'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(4),
    },
    submit: {
        width: '100%',
        margin: theme.spacing(4, 0, 0),
    },
}));

export default useStyles