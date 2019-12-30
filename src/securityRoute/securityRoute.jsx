import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Box from '@material-ui/core/Box'
import AdminRegister from '../components/registerCompanyAdmin/registerCompanyAdmin'
import Warehouse from '../components/warehousesPage'
import UserForm from '../components/registerEmployee/registerEmployeePage'
import Home from '../components/homePage/homePage'
import Login from '../components/loginPage/loginPage'
import Report from '../components/mainAdminReport/reportPage'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Companies from '../components/companiesListPage/companiesList'
import Landing from '../components/landingPage/landing'

import AllCarrier from '../components/allCarrier'
import TTNregister from '../components/operatorPage/index'
import SendCargo from '../components/sendCargo'

import Warehousing from '../components/managerWarehousing'
import Employees from '../components/employeesPage'
import Employee from '../components/employeePage'
import TaskHome from '../components/homePage/taskerHome'
import ControllerPage from '../components/controllerPage'
import CheckTtn from '../components/checkTtn'
import EmployeeEditPage from '../components/employeeEditPage'
import ServicesManager from '../components/servicesManager'
import WarehouseInfo from '../components/warehouseInfo'
import ServiceNow from '../components/serviceNow'


const SecurityRoute = (props) => {
    if (props.auth.isAuthenticated) {
        let roleRoutes = []

        if(props.auth.user.role === 'employee') {
            if(props.auth.user.position.includes('manager')) {
                roleRoutes = [
                    <Route exact path="/warehousing" component={Warehousing}/>,
                    <Route exact path="/outTtnRegister" component={SendCargo}/>,
                    <Route exact path="/warehausesInfo" component={WarehouseInfo}/>
                ]
            } 
            else if(props.auth.user.position.includes('operator')) {
                roleRoutes = [
                    <Route exact path="/ttnRegister" component={TTNregister}/>,
                    <Route exact path="/allCarrier" component={AllCarrier}/>,
                    <Route exact path="/checkTtn" component={CheckTtn}/>
                ]
            } 
            else if(props.auth.user.position.includes('controller')) {
                roleRoutes = [
                    <Route component={TaskHome} />,
                    <Route exact path="/controlTTN" component={ControllerPage}/>
                ]
            } 
        }

        switch (props.auth.user.role) {
            case 'employee':
                return (
                    <div className="wrapper">
                        <Header/>
                        <Box className="content">
                            <Switch>
                                <Route exact path="/me" component={EmployeeEditPage}/>
                                {roleRoutes.map(route => route)}
                                <Route component={Home}/>
                            </Switch>
                        </Box>
                        <Footer/>
                    </div>
                )
            case 'mainAdmin':
                return (
                    <div className="wrapper">
                        <Header/>
                        <Box className="content">
                            <Switch>
                                <Route exact path="/me" component={EmployeeEditPage}/>
                                <Route exact path="/serviceManager" component={ServicesManager}/>
                                <Route exact path="/newCompanyAdmin" component={AdminRegister}/>
                                <Route exact path="/reports" component={Report}/>
                                <Route exact path="/companiesList" component={Companies}/>
                                <Route component={Home}/>
                            </Switch>
                        </Box>
                        <Footer/>
                    </div>
                )
            case 'companyAdmin':
                return (
                    <div className="wrapper">
                        <Header/>
                        <Box className="content">
                            <Switch>
                                <Route exact path="/me" component={EmployeeEditPage}/>
                                <Route exact path="/myWarehouses" component={Warehouse}/>
                                <Route exact path="/createUser" component={UserForm}/>
                                <Route exact path="/employees" component={Employees}/>
                                <Route exact path="/serviceNow" component={ServiceNow}/>
                                <Route exact path="/employees/:id" component={Employee}/>
                                <Route component={Home}/>
                            </Switch>
                        </Box>
                        <Footer/>
                    </div>
                )
            default:
                return <Redirect to={{pathname: '/'}}/>
        }
    } else {
        return (
            <div className="wrapper">
                <Box className="content">
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route component={Landing}/>
                    </Switch>  
                </Box>
                <Footer/>
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(SecurityRoute)
