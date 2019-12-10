import React, {} from 'react';
import Home from "../components/homePage/homePage";
import {Route, Switch} from "react-router-dom";
import ServicesManager from "../components/servicesManager";
import AdminRegister from "../components/registerCompanyAdmin/registerCompanyAdmin";
import Report from "../components/mainAdminReport/reportPage";
import Companies from "../components/companiesListPage/companiesList";

const MainAdminView = () => {
    return (
        <Switch>
            <Route exact path="/serviceManager" component={ServicesManager}/>
            <Route exact path="/newCompanyAdmin" component={AdminRegister}/>
            <Route exact path="/reports" component={Report}/>
            <Route exact path="/companies" component={Companies}/>
            <Route component={Home}/>
        </Switch>
    );
};

export default MainAdminView;
