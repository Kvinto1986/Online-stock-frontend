import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  tableWrapper: {
    flex: 1,
  },
  nav: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5),
  },
}));

export default useStyles
