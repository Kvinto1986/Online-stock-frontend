import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import {setCurrentUser} from './actions/authenticationAction';

import SecurityRoute from './components/securityRoute/securityRoute';



if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
}

const App = () => {

    return (
        <Provider store={store}>
            <Router>
                 <SecurityRoute/>
            </Router>
        </Provider>
    );

}

export default App;