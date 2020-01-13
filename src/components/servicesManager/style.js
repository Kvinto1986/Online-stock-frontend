import {makeStyles} from '@material-ui/core/styles'


export default makeStyles(theme => ({
    center: {
        width:'100%',
        padding: theme.spacing(3,3,3,3),
    },
    error: {
        color: 'red'
    },
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    table: {
        minWidth: 700,
    },
    tableContainer: {
        padding: theme.spacing(3,3,3,3),
    },
}))
