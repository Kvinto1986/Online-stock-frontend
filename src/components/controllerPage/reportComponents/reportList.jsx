import React, {useEffect} from 'react'
import {Box, Typography, Paper, List, ListItem, ListItemText, Container} from '@material-ui/core'
import useStyles from '../controlTTNstyle'

const ReportList = ({initialCargo, cargo, cargoReportType='', reportReason, currentTTN, markCargoAsUnfound}) => {
    const classes = useStyles()
    const reportedCargo   = cargo.filter(unit => unit.checked === true)
    const unReportedCargo = cargo.filter(unit => unit.checked !== true)
    const {name, license} = currentTTN.driver

    let lostSumm = 0 
    reportedCargo.forEach((elem, index) => {
        lostSumm += initialCargo[index].amount-elem.amount
    })

    useEffect(() => {
        switch (reportReason) {
            case 1: {
                markCargoAsUnfound(reportedCargo)
                break
            }
            case 2: {
                markCargoAsUnfound(cargo)
                break
            }
            case 3: {
                markCargoAsUnfound(unReportedCargo)
                break
            }
            default:
                break
        }
    }, [])

    return (
        <Box mt={15} mb={10}>
            <Box id="yak1" mb={5}>
                <Typography component="h1" variant="h3" className={classes.stepNumber}>
                    Final list
                </Typography>
            </Box>
            <Container maxWidth="xl" className={classes.listContainer}>
                <Paper className={classes.paper}>
                    <Box mb={5}>
                        <Typography 
                            component="h2"
                            variant="h6"
                            align="center"
                            color="textPrimary"
                            style={{marginTop: '3%'}}
                            gutterBottom
                        >
                            {cargoReportType} report
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Box display="flex" flexDirection="column">
                            <Box>
                                <Typography>
                                    <b>Controler: </b> {currentTTN.controller.initials}
                                </Typography>
                            </Box>
                            <Box mt={2}>
                                <Typography>
                                    {
                                        reportReason !== 3
                                        ? `${cargoReportType} cargo in ${reportedCargo.length} of ${cargo.length} different product units`
                                        : `${cargoReportType} ${reportedCargo.length} of ${cargo.length} cargo units`
                                    }
                                </Typography>
                            </Box>
                            <Box mt={2}>
                                <Typography>
                                    <b>Driver: </b>{name} 
                                    <small>(license: {license})</small>
                                </Typography>
                            </Box>
                            {/* Lost */}
                            {
                                reportReason === 1 && (
                                    <Box mt={7} alignSelf="self-end" style={{width: '100%'}}>
                                        <hr/>
                                        <Typography>
                                            <b>Total lost: {lostSumm}</b>
                                        </Typography>
                                    </Box>
                                )
                            }
                        </Box>
                        {/* Lost */}
                        {reportReason === 1 && (
                            <Box className={classes.lostList}>
                                <List className={classes.ul}>
                                    {reportedCargo.map((elem, i) => (
                                        elem.amount !== initialCargo[i].amount && (
                                            <ListItem key={elem.id} className={classes.listItem}>
                                                <ListItemText 
                                                    primary={`${elem.name} (-${initialCargo[i].amount-elem.amount} units)`} 
                                                    secondary={`Final amount: ${elem.amount} / ${initialCargo[i].amount}`} 
                                                />
                                            </ListItem>
                                        )
                                    ))}
                                </List>
                            </Box>
                        )}
                    </Box>
                </Paper>
            </Container>
        </Box>
    )
}

export default ReportList