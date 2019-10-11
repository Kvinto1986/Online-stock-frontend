import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'

export const TabPanel = (props) => {
    const {children, value, index, ...other} = props

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    )
}

export const applyProps = (index) => {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    }
}

export const LinkTab = (props) => {
    return (
        <Tab
            component="a"
            onClick={e => {
                e.preventDefault()
            }}
            {...props}
        />
    )
}