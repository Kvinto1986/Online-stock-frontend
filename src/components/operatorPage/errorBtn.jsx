import React from 'react'
import Button from '@material-ui/core/Button'
import useStyles from './operatorPageStyles'

const ErrorBtn = ({setFormVisibility, handleReset}) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Button color='primary' className={classes.validBtn} onClick={() => setFormVisibility(true)}>Add new</Button>
      <Button color='secondary' className={classes.validBtn} onClick={handleReset}>Reset form</Button>
    </React.Fragment>
    )

}

export default ErrorBtn
