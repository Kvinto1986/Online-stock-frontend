import React from 'react';
import LoginView from "./LoginView";
import MainView from "./MainView";
import {useSelector} from "react-redux";
import {authenticatedFilter} from "../store/filters";

const RouterView = () => {
    const isAuthenticated = useSelector(authenticatedFilter);

    return isAuthenticated ? <MainView/> : <LoginView/>
};

export default RouterView;
