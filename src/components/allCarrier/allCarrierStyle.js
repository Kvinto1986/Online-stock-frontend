import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
    position: 'relative',

  },
  add_carrier: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  add_btn: {
    marginRight: '20px'
  },
  nav: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
  },

}))

export default useStyles
