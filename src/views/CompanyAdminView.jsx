import React from 'react';
import Home from "../components/homePage/homePage";
import {Route, Switch} from "react-router-dom";
import Warehouse from "../components/warehousesPage";
import UserForm from "../components/registerEmployee/registerEmployeeForm";
import Employees from "../components/employeesPage";
import Employee from "../components/employeePage";

const CompanyAdminView = () => {
    return (
        <Switch>
            <Route exact path="/myWarehouses" component={Warehouse}/>
            <Route exact path="/employees" component={Employees}/>
            <Route exact path="/employees/add" component={UserForm}/>
            <Route exact path="/employees/:id" component={Employee}/>
            <Route component={Home}/>
        </Switch>
    );
};

export default CompanyAdminView;
