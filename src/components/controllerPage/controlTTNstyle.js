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
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    mainContainer: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    cardPaper: {
        width: '50%',
        marginTop: theme.spacing(5),
    },
    card: {
        margin: theme.spacing(5,5,5,5),
    },
    select: {
        width: '40%',
        marginTop: theme.spacing(5),
    },
    submit: {
        width: '100%',
        margin: theme.spacing(4, 0, 0),
    },
    table:{
        marginTop: theme.spacing(5),
    },
    description:{
        marginTop: theme.spacing(5),
        padding: theme.spacing(5,5,5,5),
    }

}));

export default useStyles