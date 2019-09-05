import React, {useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {logoutUser} from '../../actions/authenticationAction';
import NavigationBar from './headerPage'

export default () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const logout = useCallback(logoutUser(dispatch),[dispatch]);

    return (
        <NavigationBar
            user={user}
            logout={logout}
        />

    );
};
