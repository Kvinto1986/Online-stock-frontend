import React from 'react'
import useStyles from './controlTTNstyle'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import moment from 'moment'
import Table from './controlTTNcargoTable'

export default ({ttn}) => {
    const classes = useStyles()

    return (
        <Paper className={classes.cardPaper}>
            <Typography component="h1" variant="h5" align="center" color="textPrimary" style={{marginTop: '2%'}}>
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
                    <Table
                        cargo={ttn.products}
                    />
                    {ttn.description.length > 0 && (
                        <Paper className={classes.description}>
                        <Typography color="textPrimary">
                            {ttn.description}
                        </Typography>
                        </Paper>)}


                </CardContent>
            </Card>
        </Paper>

    )
}