import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    stepNumber: {
        fontWeight: '600 !important',
        padding: '25px 0',
        textAlign: 'center',
        opacity: '0.5'
    },
    formName: {
        marginBottom: theme.spacing(3),
    },

    helperText: {
        color: 'red'
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    paper: {
        padding: '25px'
    },
    dialogPaper: {
        width: '50%',
        marginTop: '2%',
        marginLeft: '25%',
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
        margin: theme.spacing(5, 5, 5, 5),
    },
    select: {
        width: '40%',
        marginTop: theme.spacing(5),
    },
    submit: {
        width: '100%',
        margin: theme.spacing(4, 0, 0),
    },

    report: {
        marginLeft:'5%',
        width: '70%',
        marginBottom: '5%'
    },
    table: {
        marginTop: theme.spacing(5),
        width: '100%'
    },
    description: {
        marginTop: theme.spacing(5),
        padding: theme.spacing(5, 5, 5, 5),
    },
    ul: {
        paddingTop: '0',
        paddingBottom: '0',
    },
    listItem: {
        paddingTop: '0',
        paddingBottom: '0',
    }
}))

export default useStyles