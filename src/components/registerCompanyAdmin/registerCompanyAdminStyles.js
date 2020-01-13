import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    paper: {
        padding: theme.spacing(3,5,5,5),
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default useStyles
