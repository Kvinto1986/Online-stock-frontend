import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
        },
        formControl: {
            width: '100%',
            marginBottom: '10%',
        },
        rootExpansion: {
            marginTop: '2%',
            display: 'flex',
            flexDirection: 'column',
            width: '40%',
            marginLeft: '30%'
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
            marginBottom: theme.spacing(3),
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
            marginTop: '3%',
            marginBottom: '5%',
            color: 'red',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        tel: {
            width: '100% !important',
            padding: '7% 10%',
            background: 'none !important',
            border: '1px solid #D4CDCD !important',
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
            verticalAlign: 'center',
            marginBottom: '15%'
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
    }
))

export default useStyles