import React from 'react'
import useStyles from './operatorPageStyles'
import ErrorBtn from './errorBtn'

export default function ({formVisibility, setFormVisibility, Form, onSubmit, error, id}) {
    const classes = useStyles()

    return (
        <div className={classes.rootExpansion}>
            <ErrorBtn setFormVisibility={setFormVisibility} formVisibility={formVisibility}/>
            {formVisibility && (
                <Form
                    onSubmit={onSubmit}
                    error={error}
                    id={id}
                />
            )}
        </div>
    )
}
