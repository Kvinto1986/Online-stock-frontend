import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './operatorPageStyles'
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'

export default ({search, searchText, error, value, setValue, length}) => {
  const classes = useStyles()

  return (
    <Container component="main" className={classes.main} maxWidth="sm">
      <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.main}>
        {searchText}
      </Typography>

      <ValidatorForm className={classes.form} noValidate onSubmit={() => search(value)}>
        <div className={classes.rootPaper}>
          <TextValidator
            value={value}
            className={classes.input}
            placeholder='Search...'
            onChange={(e) => setValue(e.target.value)}
            validators={['required', `matchRegexp:[0-9]{${length}}` ]}
            errorMessages={['this field is required']}
            inputProps={{maxLength: length}}
          />
          <Divider className={classes.divider} orientation="vertical"/>
          <IconButton className={classes.iconButton} aria-label="search" type="submit">
            <SearchIcon/>
          </IconButton>
        </div>
      </ValidatorForm>
      <div className={classes.error}>{error}</div>
    </Container>
  )
}
