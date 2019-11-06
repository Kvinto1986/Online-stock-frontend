import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './operatorPageStyles'
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'
import Button from '@material-ui/core/Button'

export default ({search, searchText, error, value, setValue, setFormVisibility, formVisibility}) => {
  const classes = useStyles()
  const handleReset = () => {
    setValue('')
    setFormVisibility(false)
  }
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
            validators={['required']}
            errorMessages={['this field is required']}
          />
          <Divider className={classes.divider} orientation="vertical"/>
          <IconButton className={classes.iconButton} aria-label="search" type="submit">
            <SearchIcon/>
          </IconButton>
        </div>
      </ValidatorForm>
      <div className={classes.error}>{error}</div>
      {error
        ? <React.Fragment>
          <Button color='primary' className={classes.validBtn} onClick={() => setFormVisibility(true)}>Yes, I
            want</Button>
          <Button color='secondary' className={classes.validBtn} onClick={handleReset}>Yes, it was mistake</Button>
        </React.Fragment>
        : null
      }
    </Container>
  )
}
