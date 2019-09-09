import { makeStyles } from '@material-ui/core/styles';

export const checkTtnStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    ttn: {
        marginTop: "20px",
        width: "100%",
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));
