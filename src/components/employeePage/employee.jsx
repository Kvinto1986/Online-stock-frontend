import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../api/users";


const Employee = () => {

    const auth = useSelector(state => state.auth);
    const errors = useSelector(state => state.errors);

    const dispatch = useDispatch();

    // useEffect(getUsers(dispatch), [])


    return (
        <div>
            <h1>{auth.user.company}</h1>
            {/*<button onChange={() => dispatch({type: getEmpoyeesList})}>Click me</button>*/}
        </div>
    )
}


export default Employee;