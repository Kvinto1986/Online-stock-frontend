import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import useStyles from './operatorPageStyles'

export default function ({formVisibility, Form, onSubmit, error, id, value}) {
  const classes = useStyles()

  return (
    <div className={classes.rootExpansion}>
      <ExpansionPanel>
        <div className={formVisibility ?  classes.wrap : null }>
          {
            formVisibility
              ? <Form
                onSubmit={onSubmit}
                error={error}
                id={id}
              />
              : null
          }
        </div>
      </ExpansionPanel>
    </div>
  )
}
