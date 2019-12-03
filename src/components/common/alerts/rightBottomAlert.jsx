import React from 'react'
import succes from '../../../resources/images/checked.png'
import useStyles from "./alertStyles";

const RightBottomAlert = ({message, status}) => {
    const classes = useStyles();

    return (
        <div className={classes.rightBottomAlertStyle}>
            {status && (
                <img src={succes} />
            )}
            <span className={classes.textStyle}>{message}</span>
        </div>
    )
};

export default RightBottomAlert;
