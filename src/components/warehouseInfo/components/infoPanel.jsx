import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from './list'
import MapContainer from '../../warehousesPage/warehouseFormComponents/mapContainer'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 600,
        width: 500,
        padding: 20
    },
    control: {
        padding: theme.spacing(2),
    },
    warehouseImg: {
        margin: '0 auto',
        display: 'block'
    },
    info: {
        textAlign: 'center'
    }

}))
const InfoPanel = ({data}) => {
    const classes = useStyles()
    const {company, totalArea, address} = data
    return (
      <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                  <Grid item>
                      <Paper className={classes.paper}>
                          <img src="https://www.barnaul-altai.ru/business/sklad/img/sklad28.jpg" alt="" width={150}
                               height={150} className={classes.warehouseImg}/>
                          <div className={classes.info}>
                              <h1><b>Company:</b> {company} </h1>
                              <p><b>Address:</b> {address}</p>
                              <p><b>Total Area:</b> {totalArea}</p>
                          </div>
                              <MapContainer
                                    google={''}
                                    GPS={data.GPS}
                                    mapVisibility={true}
                                    theme={'dark'}
                                    zoom={15}
                                    mapHeight={200}
                                    withTitle={false}
                              />
                      </Paper>
                  </Grid>
                  <Grid item>
                      <Paper className={classes.paper}>
                          <List data={data}/>
                      </Paper>
                  </Grid>
              </Grid>
          </Grid>
      </Grid>
    )
}
export default InfoPanel
