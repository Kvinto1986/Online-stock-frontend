import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import List from './list'
import MapContainer from '../../warehousesPage/warehouseFormComponents/mapContainer'
import ProductsModal from '../../modalUI/productsModal'
import useStateWithCallback from 'use-state-with-callback';
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
    const {company, totalArea, address, buildImg} = data
    const [productsData, setProductsData] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const handleData = (d) => {
        console.log("data")
        setProductsData(Object.entries(d).filter((i) => i[0] !== "id" ))
        setOpenModal(true)
    }
    const close = (e) => {
        console.log('asdsad')
        setOpenModal(false)
    }

    return (
      <Grid container className={classes.root} spacing={2}>

          <ProductsModal open={openModal} data={productsData} close={close} />

          <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                  <Grid item>
                      <Paper className={classes.paper}>
                          <img src={buildImg ? data.buildImg : `https://image.shutterstock.com/image-photo/warehouse-interior-600w-549735178.jpg`} alt="buildImg" width={150}
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
                          <List data={data} handleData={handleData}/>
                      </Paper>
                  </Grid>
              </Grid>
          </Grid>
      </Grid>
    )
}
export default InfoPanel
