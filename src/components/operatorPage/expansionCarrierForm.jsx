import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CarrierForm from './carrierForm'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop:'10%',
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function ({formVisibility, setFormVisibility}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    onClick={()=>setFormVisibility(!formVisibility)}
                >
                    <Typography className={classes.heading}>{!formVisibility?('Open form'):'Close form'}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                   <CarrierForm
                   />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}