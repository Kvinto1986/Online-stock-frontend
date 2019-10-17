import axios from 'axios';
import server from "../serverConfig";
import {SET_ERRORS} from '../actions/types'

export const addDriver = (driver) => {
    const{email, name, surnName, driverLicense} = driver;

    axios.post(`${server}api/drivers/`,  {
        email:email,
        name: name,
        surname:  surnName,
        driverLicense: driverLicense
    })
};

export const findDriver = (license, history) => dispatch => {
      axios.get(`${server}api/drivers/${license}`)
          .then((res) => {
             dispatch({
                  type: SET_ERRORS,
                  payload: {}
              })
              if(!res.data._id ) {
                  history.push('/driveRegistration')
              } else {
                 history.push('/addTtn')
              }
          })
          .catch((err) => {
             dispatch({
                  type:SET_ERRORS,
                  payload: {driver:"This field musn't be empty"}
              })

          })
}