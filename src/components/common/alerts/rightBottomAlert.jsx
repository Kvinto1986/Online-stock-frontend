import React from 'react'
import useStyles from './alertStyles'
import succes from '../../../resources/images/checked.png'

const RightBottomAlert = ({message, status}) => {

    const classes = useStyles()
    
    return (
        <div className={classes.rightBottomAlertStyle}>
            {status && (
                <img src={succes} />
            )}
            <span className={classes.textStyle}>{message}</span>
        </div>
    )
}
export default RightBottomAlert