import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useStyles from './operatorPageStyles'


export default function ({formVisibility, setFormVisibility, Form, onSubmit, error, setValue}) {
    const classes = useStyles()

    return (
        <div className={classes.rootExpansion}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    onClick={() => setFormVisibility(!formVisibility)}
                >
                    <Typography
                        className={classes.heading}>{!formVisibility ? ('Open form') : 'Close form'}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Form
                        onSubmit={onSubmit}
                        error={error}
                        setValue={setValue}
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}