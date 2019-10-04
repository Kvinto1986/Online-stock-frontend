import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './operatorPageStyles'
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'

export default ({search, searchText, error}) => {
    const classes = useStyles()

    const [value, setValue] = useState('')

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
            <span className={classes.error}>{error}</span>
        </Container>
    )
}