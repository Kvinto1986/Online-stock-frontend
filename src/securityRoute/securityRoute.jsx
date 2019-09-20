import React, {Fragment} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import AdminRegister from '../components/registerCompanyAdmin/registerCompanyAdmin'
import Warehouse from '../components/warehousesPage/warehouse'
import UserForm from '../components/registerEmployee/registerEmployeePage'
import DriverRegistrer from '../components/registerDrive'
import Home from '../components/homePage/homePage'
import Login from '../components/loginPage/loginPage'
import Report from '../components/mainAdminReport/reportPage'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Companies from '../components/companiesListPage/companiesList'
import Carrier from '../components/searchCarrier'
import Landing from '../components/landingPage/landing'
import AllCarrier from '../components/allCarrier';
import TtnForm from '../components/ttnForm';
import AddCarrier from "../components/carrierForm";
import DeliveryGoodsFromStock from '../components/deliveryFromStock/deliveryFromStockPage'

import Warehousing from '../components/managerWarehousing/warehousing'
import Employees from '../components/employeesPage'
import Employee from '../components/employeePage'
import ControllerPage from '../components/controllerPage/controlTTN'
import {CheckTtnPage} from '../components/checkTtn/checkTtnPage'

const SecurityRoute = (props) => {
    if (props.auth.isAuthenticated) {

        switch (props.auth.user.role) {

            case 'employee':

                return (
                    <div>
                        <Header/>
                        <Switch>
                            {props.auth.user.position.includes('manager') && (
                                <Fragment>
                                    <Route exact path="/stockDelivery" component={DeliveryGoodsFromStock}/>
                                    <Route exact path="/warehousing" component={Warehousing}/>
                                </Fragment>
                            )}
                            {props.auth.user.position.includes('operator') && (
                                <Fragment>
                                    <Route exact path="/searchCarrier" component={Carrier}/>
                                    <Route exact path="/driveRegistration" component={DriverRegistrer}/>
                                    <Route exact path="/allCarrier" component={AllCarrier}/>
                                    <Route exact path="/addCarrier" component={AddCarrier}/>
                                    <Route exact path="/addTtn" component={TtnForm}/>
                                    <Route exact path="/checkTtn" component={CheckTtnPage}/>
                                </Fragment>
                            )}
                            {props.auth.user.position.includes('controller') && (
                                <Fragment>
                                    <Route exact path="/controlTTN" component={ControllerPage}/>
                                </Fragment>
                            )}
                            <Route component={Home}/>
                        </Switch>
                        <Footer/>
                    </div>
                )

            case 'mainAdmin':
                return (
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path="/newCompanyAdmin" component={AdminRegister}/>
                            <Route exact path="/reports" component={Report}/>
                            <Route exact path="/companiesList" component={Companies}/>
                            <Route component={Home}/>
                        </Switch>
                        <Footer/>
                    </div>
                )
            case 'companyAdmin':
                return (
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path="/myWarehouses" component={Warehouse}/>
                            <Route exact path="/createUser" component={UserForm}/>
                            <Route exact path="/employees" component={Employees}/>
                            <Route exact path="/employees/:id" component={Employee}/>
                            <Route component={Home}/>
                        </Switch>
                        <Footer/>
                    </div>
                )
            default:

                return <Redirect to={{pathname: '/'}}/>
        }

    } else {
        return (
            <div>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route component={Landing}/>
                </Switch>
                <Footer/>
            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(SecurityRoute)
