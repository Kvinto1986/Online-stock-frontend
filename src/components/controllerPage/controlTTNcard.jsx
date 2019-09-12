import React from 'react'
import useStyles from './controlTTNstyle'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import moment from 'moment'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import Table from '@material-ui/core/Table'

export default ({ttn}) => {
    const classes = useStyles()


    return (
        <Paper className={classes.cardPaper}>
            <Typography component="h1" variant="h5" align="center" color="textPrimary" style={{marginTop:'2%'}}>
                TTN #{ttn.number}
            </Typography>
            <Card className={classes.card}>
                <CardContent>
                    <Typography>
                        Sender: {ttn.sender}
                    </Typography>
                    <Typography>
                        Carrier: {ttn.carrier}
                    </Typography>
                    <Typography>
                        Driver name: {ttn.driver}
                    </Typography>
                    <Typography>
                        Car number: {ttn.carNumber}
                    </Typography>
                    <Typography>
                        Operator name: {ttn.registrar}
                    </Typography>
                    <Typography>
                        Registration data: {moment(ttn.dataOfRegistration).format('MMMM Do YYYY, h:mm:ss a  ')}
                    </Typography>

                </CardContent>
            </Card>
            <Card className={classes.card}>
                <CardContent>
                    <Typography component="h1" variant="h6" align="center" color="textPrimary">
                        Cargo
                    </Typography>
                    <Table className={classes.table} size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Amount</TableCell>
                                <TableCell align="center">Packing material</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ttn.products.map((elem) => {
                                return (
                                    <TableRow key={elem.id + 'tableRow'}>
                                        <TableCell key={elem.id} align="center">{elem.id}</TableCell>
                                        <TableCell key={elem.id + elem.name} align="center">{elem.name}</TableCell>
                                        <TableCell key={elem.id + elem.amount} align="center">{elem.amount}</TableCell>
                                        <TableCell key={elem.id + elem.type} align="center">{elem.type}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </Paper>

    )
}