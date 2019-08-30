import {makeStyles} from '@material-ui/core/styles';
import {bool} from "prop-types";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
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
    tel: {
        width: "100% !important",
        padding: "26px 50px",
        borderColor: "rgba(0, 0, 0, 0.87)",
        background: "none !important" ,
        border: "1px solid dimgrey !important"
    },
    drop: {
        background: "none !important",
        border: "1px solid dimgrey !important",
    }

}));

export default useStyles