import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import {setCurrentUser} from './store/actions/authenticationAction'
import './App.css'
import RouterView from "./views/RouterView";

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken)
    const decoded = jwt_decode(localStorage.jwtToken)
    store.dispatch(setCurrentUser(decoded))
}

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                 <RouterView/>
            </Router>
        </Provider>
    )
};
export default App
