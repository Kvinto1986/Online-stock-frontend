import axios from 'axios';
import server from "../serverConfig";
import {SET_ERRORS} from "../actions/types";

export const addCarrier = (carrier) => {

    const{email, tel, company, unp, country} = carrier.carrier;

    return axios.post(`${server}api/carriers/`, {
        email: email,
        tel: tel,
        company: company,
        unp: unp,
        countryCode: country
    })
};



export const deleteCarriers = (unp, cb, rows) => {
    const newArr = rows.filter((item) => item.id != unp)
    axios.delete(`${server}api/carriers/${unp}`)
        .then((res) => {
            console.log(newArr)
            cb(newArr)
        })
        .catch((err) => {
            console.error(err)
        })
}

export const updateCarrier = (rows, inputValue, _id, cb) => {
    console.log(rows, inputValue, _id, cb)
    let indx;
    let found = rows.find((elem, index) => {
        if(elem.id === _id) {
            indx = index;
            return elem
        }
    });
    const{carrier, email, tel} = inputValue;
    if (!!carrier) {
        found.company = carrier
    }

    if(!!email) {
        found.email = email
    }

    if(!!tel) {
        found.tel = tel
    }

    found.isDisabled = false;
    const{company, countryCode, unp, id} = found
    let newArr = []
    for(let i = 0; i < rows.length; i++) {
        if(i === indx) {
            newArr.push(found)
        } else {
            newArr.push(rows[i])
        }
    }
    cb(newArr)

    axios.post(`${server}api/carriers/update`, {
     id:id,
     company: company,
     countryCode:countryCode,
     email: email,
     unp: unp,
     tel: tel
 })
     .then((res) => {console.log(res)})
     .catch((err) => console.log(err))
}
