import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    padding: '25px'
  },
  nav: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
  },

}))

export default useStyles
