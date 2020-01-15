import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    ttnTitle: {
        width: '100%',
        textAlign: 'center',
        paddingTop: '25px',
    },
    formControl: {
        width: '100%',
        marginBottom: '10%',
    },
    table: {
        marginTop: theme.spacing(3),
        minWidth: 700,
    },
    rootExpansion: {
        marginTop: '2%',
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        marginLeft: '30%',
    },
    rootPaper: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginBottom: '2%'
    },
    form: {
        width: '100%',
    },
    main: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(5),
    },
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor: 'white',
    },
    card: {
        marginTop: theme.spacing(5)
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
    input: {
        marginBottom: '3%',
        marginTop: '3%',
        width: '80%',
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    button: {
        width: '100%',
        marginTop: '5%'
    },
    error: {
        marginTop: '2%',
        marginLeft: '1.5%',
        color: 'red',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    tel: {
        width: '100% !important',
        background: 'none !important',
    },
    drop: {
        background: 'none !important',
        border: '1px solid #D4CDCD !important',
    },
    paperTTN: {
        marginTop: '2%',
    },
    TTNformHeader: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: '2%',
    },
    TTNform: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'center',
        verticalAlign: 'center',
        marginBottom: '3%',
        marginTop: '3%'
    },
    TTNhead: {
        paddingTop: '12%'
    },
    gridItem: {
        marginLeft: '3%'
    },
    formContainer: {
        marginTop: '-5%'
    },
    TTNheadEnd: {
        paddingTop: '6%',
        marginLeft: '13%'
    }
    ,
    SuccessPaper: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'center',
        verticalAlign: 'center',
        marginTop: '15%'
    },
    validBtn: {
        border: '1px solid black',
        margin: theme.spacing(1),
    },
    wrap: {
        padding: '5%',
        boxSizing: 'border-box'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column'
    },
    carNumber: {
        display: 'flex',
        alignItems: 'center;'
    },
    carSelect: {
        width: '200px',
        marginRight: '10px'
    },
    formH1:{
        marginBottom: theme.spacing(3),
        textAlign: 'center',
        marginTop:theme.spacing(3)
    },
    formCarrier:{
        backgroundColor:'white',
        marginTop:theme.spacing(3),
        padding: theme.spacing(3,5,5,5),
    },
}))

export default useStyles
