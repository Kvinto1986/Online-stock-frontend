import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    dndElement: {
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid gray',
        backgroundColor: 'white',
        padding: '10px 15px',
        marginRight: '1.5rem',
        marginBottom: '1.5rem',
        cursor: 'move'
    },
    dndArea: {
        height: '5rem',
        width: '100%',
        marginBottom: '1.5rem',
        color: 'black',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        textAlign: 'center',
        fontSize: '1rem',
        lineHeight: 'normal',
    }
}))

export default useStyles