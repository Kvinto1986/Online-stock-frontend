import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {authUserFilter} from "../store/filters";

/**
 * Компонент защищенного роута. Обертка для <Route .../>
 * Прокидываем все то же самое, что и в обычный + role и/или positions
 * */
const ProtectedRoute = ({positions = [], component: Component, role, ...props}) => {
    const user = useSelector(authUserFilter);

    const isPermitted = () => {
        if(role && role !== user.role) {
            return false;
        }

        //TODO: replace user.position to user.positions
        if(positions.length > 0) {
            return positions.reduce((result, pos) => result ? result : user.position.includes(pos), false);
        }

        return true;
    };

    return (
        <Route {...props} render={
            renderProps => isPermitted() ? <Component {...renderProps}/> : <Redirect to='/'/>
        }/>
    );
};
export default ProtectedRoute;
