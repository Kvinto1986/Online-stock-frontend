import {makeStyles} from "@material-ui/core";
import { letterSpacing, fontSize } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
        ul: {
            margin: 0,
            padding: 0,
        },
        li: {
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap'
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        borderColor: '#EBF1F9',
        color: '#EBF1F9',
        letterSpacing: '1.5px',
        fontSize: 12
    },
    heroContent: {
        padding: '45px 15px',
    },
    descriptionText: {
        fontSize: '1.5em'
    },
    cardHeader: {
        backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        position:'bottom',
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(10),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    }
}))

export default useStyles