import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
        marginBottom: '5%'
    },
    tableCell: {
        borderRight: '1px solid RGB(224, 224, 224)'
    },
    spanTable: {
        fontWeight: '600'
    },
    button: {
        marginLeft: '5%',
        marginTop: '7%',
        marginBottom: '7%',
    },
    mainPaper:{
        marginLeft: '15%',
        marginTop: '15%',
        marginBottom: '15%',
        marginRight: '15%',
        backgroundColor:'red'
    }
})

export default useStyles
