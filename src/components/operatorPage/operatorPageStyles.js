import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
        },
        rootPaper: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            marginBottom:'2%'
        },
        form:{
            width:'100%',
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
            marginBottom:'3%',
            marginTop:'3%',
            width:'80%',
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
            color: 'red',
        },

    }
))

export default useStyles