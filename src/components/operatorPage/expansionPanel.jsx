import React from 'react'
import useStyles from './operatorPageStyles'
import ErrorBtn from './errorBtn'
import Container from "@material-ui/core/Container";

export default function ({formVisibility, setFormVisibility, Form, onSubmit, error, id}) {
    const classes = useStyles()

    return (
        <Container component="main" maxWidth="sm" className={classes.main}>
            <ErrorBtn setFormVisibility={setFormVisibility} formVisibility={formVisibility}/>
            {formVisibility && (
                <Form
                    onSubmit={onSubmit}
                    error={error}
                    id={id}
                />
            )}
        </Container>
    )
}
