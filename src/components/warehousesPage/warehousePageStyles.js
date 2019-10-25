import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    main: {
        width: '100%',
        display: 'flex',
    },
    paper: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
    },
    paperList: {
        width: '50%',
        display: 'flex',
        justifyContent: 'start',
        // justifyItems: 'start',
        // alignContent: 'center',
        // alignItems: 'center',
        flexDirection: 'column',
    },
    formControl: {
        width: '100%'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    icon: {
        width: '20%'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    cardArea: {
        margin: theme.spacing(3, 3, 3, 3),
        width: '100%'
    },
    card: {
        marginTop: theme.spacing(7),
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    tab: {
        backgroundColor:'#4d6cc9'
    },
    error: {
        marginTop: '3%',
        marginBottom: '5%',
        color: 'red',
    },
}))

export default useStyles