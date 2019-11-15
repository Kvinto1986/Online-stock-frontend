import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import useStyles from './operatorPageStyles'
import ErrorBtn from './errorBtn'

export default function ({formVisibility, Form, onSubmit, error, id, value, setFormVisibility, setValue}) {
  const classes = useStyles()

  const handleReset = () => {
    setValue('')
    setFormVisibility(false)
  }
  return (
    <div className={classes.rootExpansion}>
      <ErrorBtn error={error} handleReset={handleReset} setFormVisibility={setFormVisibility} />
      <ExpansionPanel>
        <div className={formVisibility ?  classes.wrap : null }>
          {
            formVisibility && (
              <Form
                onSubmit={onSubmit}
                error={error}
                id={id}
              />
            )
          }
        </div>
      </ExpansionPanel>
    </div>
  )
}
