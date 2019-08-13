import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import jwt_decode from 'jwt-decode'
import setAuthToken from './setAuthToken'
import {setCurrentUser} from './actions/authenticationAction'

import Home from './components/homePage/home'

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken)
    const decoded = jwt_decode(localStorage.jwtToken)
    store.dispatch(setCurrentUser(decoded))
}

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path='/' component={Home}/>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App