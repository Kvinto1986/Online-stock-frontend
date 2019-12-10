import React from 'react';
import EmployeeEditPage from "../components/employeeEditPage/";

import SendCargo from '../components/sendCargo'
import WarehouseInfo from '../components/warehouseInfo'
import Warehousing from '../components/managerWarehousing'

import AllCarrier from '../components/allCarrier'
import TTNRegister from '../components/operatorPage/index'
import CheckTtn from '../components/checkTtn'

import ControllerPage from '../components/controllerPage'
import Home from "../components/homePage/homePage";
import ProtectedRoute from "../components/ProtectedRoute";
import {CONTROLLER_POSITION, MANAGER_POSITION, OPERATOR_POSITION} from "../constants/role.constants";
import {Route, Switch} from "react-router-dom";

const EmployeeView = () => {
    return (
        <Switch>
            <Route exact path="/me" component={EmployeeEditPage}/>

            <ProtectedRoute exact path="/warehousing" component={Warehousing} positions={[MANAGER_POSITION]}/>
            <ProtectedRoute exact path="/outTtnRegister" component={SendCargo} positions={[MANAGER_POSITION]}/>
            <ProtectedRoute exact path="/warehousesInfo" component={WarehouseInfo} positions={[MANAGER_POSITION]}/>

            <ProtectedRoute exact path="/ttns" component={ControllerPage} positions={[CONTROLLER_POSITION]}/>

            <ProtectedRoute exact path="/ttns/add" component={TTNRegister} positions={[OPERATOR_POSITION]}/>
            <ProtectedRoute exact path="/ttns/check" component={CheckTtn} positions={[OPERATOR_POSITION]}/>
            <ProtectedRoute exact path="/carriers" component={AllCarrier} positions={[OPERATOR_POSITION]}/>

            {/*<ProtectedRoute exact path="/ttns/:id" component={ControllerPage} positions={[CONTROLLER_POSITION]}/>*/}
            <Route component={Home}/>
        </Switch>
    );
};

export default EmployeeView;
//todo: create ttns list page and ttn info page
