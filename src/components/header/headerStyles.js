import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    appBar: {
        borderBottom: `5px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 2,
    },
    link: {
        margin: theme.spacing(3, 2),
        borderColor: '#EBF1F9',
        color: '#EBF1F9',
        letterSpacing: '1.5px',
        fontSize: 12
    },
    icon: {
        margin: theme.spacing(1),
    },
}))

export default useStyles