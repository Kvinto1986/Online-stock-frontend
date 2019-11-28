import React, {Fragment, useState} from 'react'
import Container from '@material-ui/core/Container'
import Autocomplete from '../fields/autocomplete'
import ReportsTable from './ReportsTable'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

export default ({services, setReports, getBy, reports}) => {

    const [spinner, setSpinner] = useState(false)
    const handleSearchReport = async (service) => {
        setSpinner(true)
        const res = await getBy(service)
        setSpinner(false)
        setReports(res.data.result)
    }
    const list = Object.keys(services)
    list.unshift('Main')

    return (
        <Container component="main" maxWidth="md" style={{marginTop:'3%'}}>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
               Search all reports by service name
            </Typography>
            <Autocomplete
                list={list}
                searchItem="services"
                setValue={handleSearchReport}
            />
            {spinner && (
                <Fragment><CircularProgress style={{marginTop: '5%', marginLeft: '50%'}} color="primary"/></Fragment>)}
            {reports.length > 0 && !spinner && (<ReportsTable reports={reports}/>)}
        </Container>)
}