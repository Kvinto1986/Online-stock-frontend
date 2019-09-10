import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import AdminRegister from "../components/registerCompanyAdmin/registerCompanyAdmin";
import Warehouse from "../components/warehousesPage/warehouse";
import UserForm from "../components/registerEmployee/registerEmployeePage";
import DriverRegistrer from '../components/registerDrive';
import Home from '../components/homePage/homePage';
import Login from '../components/loginPage/loginPage';
import Report from '../components/mainAdminReport/reportPage'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Companies from '../components/companiesListPage/companiesList'
import Carrier from '../components/searchCarrier';
import Landing from '../components/landingPage/landing'
import AllCarrier from '../components/allCarrier';
import TtnForm from '../components/ttnForm';
import AddCarrier from "../components/carrierForm";
import DeliveryFromStockForm from '../components/deliveryFromStock/deliveryFromStock'
import Warehousing from '../components/managerWarehousing/warehousing'
import Employees from '../components/employeePage/employee'
import {CheckTtnPage} from "../components/checkTtn/checkTtnPage";


const SecurityRoute = (props) => {
    if (props.auth.isAuthenticated) {
        switch (props.auth.user.role) {
            case 'employee':

                return (
                    <div>
                        <Header/>
                        <Switch>
                            {props.auth.user.position === 'manager' && (
                                <Fragment>
                                    <Route exact path="/stockDelivery" component={DeliveryFromStockForm}/>
                                    <Route exact path="/warehousing" component={Warehousing}/>
                                    <Route component={Home}/>
                                </Fragment>
                            )}
                            {props.auth.user.position === 'operator' && (
                                <Fragment>
                                    <Route exact path="/searchCarrier" component={Carrier}/>
                                    <Route exact path="/driveRegistration" component={DriverRegistrer}/>
                                    <Route exact path="/allCarrier" component={AllCarrier}/>
                                    <Route exact path="/addCarrier" component={AddCarrier}/>
                                    <Route exact path="/addTtn" component={TtnForm}/>
                                    <Route exact path="/checkTtn" component={CheckTtnPage}/>
                                    <Route component={Home}/>
                                </Fragment>
                            )}
                            {props.auth.user.position === 'controller' && (
                                <Fragment>
                                    <Route component={Home}/>
                                </Fragment>
                            )}
                        </Switch>
                        <Footer/>
                    </div>
                );

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
                );
            case 'companyAdmin':
                return (
                    <div>
                        <Header/>
                        <Switch>
                            <Route exact path="/myWarehouses" component={Warehouse}/>
                            <Route exact path="/createUser" component={UserForm}/>
                            <Route exact path="/employees" component={Employees}/>
                            <Route component={Home}/>
                        </Switch>
                        <Footer/>
                    </div>
                );
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
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(SecurityRoute)
