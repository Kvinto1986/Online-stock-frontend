import React, {useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './operatorPageStyles'
import {TextValidator, ValidatorForm} from 'react-material-ui-form-validator'

export default ({error, search, searchText, formVisibility, setFormVisibility,Form}) => {
    const classes = useStyles()

    const [value, setValue] = useState('')

    return (
        <Container component="main" className={classes.main} maxWidth="sm">
            <Typography variant="h5" align="center" color="textSecondary" component="p" className={classes.main}>
                {searchText}
            </Typography>
            <ValidatorForm className={classes.form} noValidate onSubmit={() => search(value)}>
                <Paper className={classes.rootPaper}>

                    <TextValidator
                        value={value}
                        className={classes.input}
                        placeholder='Search...'
                        onChange={(e) => setValue(e.target.value)}
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <Divider className={classes.divider} orientation="vertical"/>
                    <Button type="submit">
                        <IconButton className={classes.iconButton} aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                    </Button>

                </Paper>
            </ValidatorForm>
            <span className={classes.error}>{error}</span>
            {error && (
                <Form
                    formVisibility={formVisibility}
                    setFormVisibility={setFormVisibility}
                />)}
        </Container>
    )
}