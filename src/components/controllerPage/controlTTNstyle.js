import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: 'whiteSmoke',
        },
    },
    cargoTable: {
        backgroundColor: 'white',
        borderRadius: '10px',
        border:'1px solid #e0e0e0'
    },
    mainTable:{
        marginTop:'3%',
    },
    spanTable: {
        fontWeight: '600'
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
    listContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        padding: '15px',
        width: '700px'
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
        width: '100%',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    submit: {
        width: '100%',
        margin: theme.spacing(4, 0, 0),
    },
    report: {
        marginLeft: '5%',
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
    lostList: {
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'flex-end',
        marginLeft: '25px',
        padding: '0 25px'
    },
    ul: {
        paddingTop: '0',
        paddingBottom: '0',
    },
    listItem: {
        paddingTop: '0',
        paddingBottom: '0',
    },
    modal: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
        boxShadow: theme.shadows[5],
        padding: '25px',
        borderRadius: '10px',
        width: '400px !important',
        height: '550px !important',
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    },
    modalForm: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    reportList: {
        textAlign: 'center',
        width: '100%',
        marginBottom: '20px'
    },
    mainPaper: {
        marginLeft: '3%',
        marginTop: '3%',
        height: '95%',
        marginRight: '3%',
    }
}))

export default useStyles
