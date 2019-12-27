import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid/index'
import Button from '@material-ui/core/Button/index'
import DateFnsUtils from '@date-io/date-fns'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import FormControl from '@material-ui/core/FormControl'
import {Input} from '@material-ui/core'
import useStyles from './registerEmployeeStyles'
import {storage} from '../../fireBaseConfig'
import useStateWithCallback from 'use-state-with-callback'
import LoadAvatar from '../common/loadAvatar/loadAvatar'
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from '@material-ui/icons/AccountBox';

const initialForm = {
    firstName: '',
    lastName: '',
    patronymic: '',
    email: '',
    city: '',
    street: '',
    house: '',
    apartment: '',
    position: []
}

export default ({onSubmit, errors, initial = initialForm}) => {

    const [form, setForm] = useState(initial)
    const [avatar, setAvatar] = useStateWithCallback(false, avatar => {
        if (avatar) {
            handleUpl()
            setAvatar(false)
        }
    })
    const [avatarUrl, setAvatarUrl] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState({
        date: '1970-01-01',
        changed: false
    })
    const classes = useStyles()

    const handleInputChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        setForm(initial)
    }, [initial])

    const handleChangedDate = (e) => {

        setDateOfBirth({
            date: e,
            changed: true
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const employee = {
            firstName: form.firstName,
            lastName: form.lastName,
            patronymic: form.patronymic,
            email: form.email,
            city: form.city,
            street: form.street,
            house: form.house,
            apartment: form.apartment,
            position: form.position,
            dateOfBirth: dateOfBirth.date,
            avatar: avatarUrl
        }


        onSubmit(employee)
    }

    const handleUpl = () => {
        const uploadTask = storage.ref(`employes/${avatar.name}`).put(avatar)
        uploadTask.on(
          'state_changed',
          snapshot => {
          },
          err => {
              console.error(err)
          },
          () => {
              storage
                .ref(`employes`)
                .child(avatar.name)
                .getDownloadURL()
                .then(url => {
                    setAvatarUrl(url)
                })
          }
        )
    }

    return (
      <ValidatorForm noValidate onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                  <TextValidator
                    required
                    fullWidth
                    name="lastName"
                    label="Last name"
                    type="text"
                    value={form.lastName}
                    onChange={handleInputChange}
                    validators={['required', 'matchRegexp:[a-zA-Z]$', 'minStringLength:2', 'maxStringLength:30']}
                    errorMessages={['this field is required', 'the value must contain only letters', 'the value must be at least 2 characters', 'the value must be no more than 30 characters']}
                  />
              </Grid>
              <Grid item xs={12} sm={4}>
                  <TextValidator
                    required
                    fullWidth
                    label="First name"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleInputChange}
                    validators={['required', 'matchRegexp:[a-zA-Z]$', 'minStringLength:2', 'maxStringLength:30']}
                    errorMessages={['this field is required', 'the value must contain only letters', 'the value must be at least 2 characters', 'the value must be no more than 30 characters']}
                  />
              </Grid>
              <Grid item xs={12} sm={4}>
                  <TextValidator
                    required
                    fullWidth
                    label="Patronymic"
                    name="patronymic"
                    type="text"
                    value={form.patronymic}
                    onChange={handleInputChange}
                    validators={['required', 'matchRegexp:[a-zA-Z]$', 'minStringLength:2', 'maxStringLength:30']}
                    errorMessages={['this field is required', 'the value must contain only letters', 'the value must be at least 2 characters', 'the value must be no more than 30 characters']}
                  />
              </Grid>
          </Grid>

          <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <DatePicker
                        required
                        className={classes.formControl}
                        disableFuture
                        value={dateOfBirth.date}
                        onChange={handleChangedDate}
                        name="dateOfBirth"
                        openTo="year"
                        format="dd/MM/yyyy"
                        label="Date of Birth"
                        views={['year', 'month', 'date']}
                        minDate={new Date('1960-01-01')}
                        maxDate={new Date('2001-01-01')}
                      />
                  </MuiPickersUtilsProvider>
                  {(errors && !dateOfBirth.changed) && (
                    <FormHelperText className={classes.helperText}>{errors.date}</FormHelperText>)}
              </Grid>
              <Grid item xs={12} sm={4}>
                  <FormControl className={classes.formControl} required>
                      <InputLabel>Role</InputLabel>
                      <Select
                        multiple
                        name="position"
                        value={form.position}
                        onChange={handleInputChange}
                        input={<Input id="select-multiple"/>}

                      >
                          <MenuItem value="manager">Manager</MenuItem>
                          <MenuItem value="operator">Operator</MenuItem>
                          <MenuItem value="controller">Controller</MenuItem>


                      </Select>

                  </FormControl>
                  {(errors && !form.position.length) && (
                    <FormHelperText className={classes.helperText}>{errors.role}</FormHelperText>)}

              </Grid>

              <Grid item xs={12} sm={4}>
                  <TextValidator
                    required
                    fullWidth
                    name="email"
                    label="Email"
                    type="text"
                    value={form.email}
                    onChange={handleInputChange}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                  />
                  {errors && (
                    <FormHelperText className={classes.helperText}>{errors.email}</FormHelperText>)}
              </Grid>
          </Grid>

          <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                  <TextValidator
                    required
                    fullWidth
                    name="city"
                    label="City"
                    type="text"
                    value={form.city}
                    onChange={handleInputChange}
                    validators={['required', 'matchRegexp:[a-zA-Z]$', 'minStringLength:2', 'maxStringLength:30']}
                    errorMessages={['this field is required', 'the value must contain only letters', 'the value must be at least 2 characters', 'the value must be no more than 30 characters']}
                  />
                  {errors && (
                    <FormHelperText className={classes.helperText}>{errors.city}</FormHelperText>)}
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextValidator
                    required
                    fullWidth
                    name="street"
                    label="Street"
                    type="text"
                    value={form.street}
                    onChange={handleInputChange}
                    validators={['required', 'minStringLength:2', 'maxStringLength:30']}
                    errorMessages={['this field is required', 'the value must be at least 2 characters', 'the value must be no more than 30 characters']}
                  />
                  {errors && (
                    <FormHelperText className={classes.helperText}>{errors.street}</FormHelperText>)}
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextValidator
                    validators={['required']}
                    errorMessages={['this field is required']}
                    fullWidth
                    name="house"
                    value={form.house}
                    label="House number"
                    onChange={handleInputChange}
                  />
                  {errors && (
                    <FormHelperText className={classes.helperText}>{errors.house}</FormHelperText>)}
              </Grid>
              <Grid item xs={12} sm={6}>
                  <TextValidator
                    fullWidth
                    name="apartment"
                    value={form.apartment}
                    label="Apartment number"
                    onChange={handleInputChange}
                    validators={['required']}
                    errorMessages={['this field is required']}
                  />
                  {errors && (
                    <FormHelperText className={classes.helperText}>{errors.apartment}</FormHelperText>)}
              </Grid>
          </Grid>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6} style={{marginTop:'3%'}}>
              <LoadAvatar avatarUrl={avatarUrl} setAvatar={setAvatar}/>
          </Grid>
          <Grid item xs={12} sm={6} style={{marginTop:'2%'}}>
              <Avatar color='secondary' variant="square" src={avatarUrl} className={classes.large}>
                  <FolderIcon />
              </Avatar>
          </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                  Submit
              </Button>
          </Grid>
      </ValidatorForm>
    )
}
