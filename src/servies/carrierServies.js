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

export const listCarriers = async () => {
    const allCarriers = await axios.get(`${server}api/carriers`)
   return allCarriers.data
};

export const allCarriers = async () => {
    const listCarrier = await axios.get(`${server}api/carriers/`)
    return listCarrier.data
};

export const deleteCarriers = (id, cb, rows) => {
    const newArr = rows.filter((item) => item._id != id);
    console.log(id)
    axios.delete(`${server}api/carriers/${id}`)
        .then((res) => {
            cb(newArr);
        })
        .catch((err) => {
            console.error(err)
        })
};

export const updateCarrier = (rows, inputValue, id, cb) => {
    let indx;
    let found = rows.find((elem, index) => {
        if(elem._id === id) {
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
    const{company, countryCode, unp, _id} = found;
    let newArr = [];
    for(let i = 0; i < rows.length; i++) {
        if(i === indx) {
            newArr.push(found)
        } else {
            newArr.push(rows[i])
        }
    }
    cb(newArr)

    axios.post(`${server}api/carriers/update`, {
     id:_id,
     company: company,
     countryCode:countryCode,
     email: email,
        unp: unp,
     tel: tel
 })
     .then((res) => {console.log(res)})
     .catch((err) => console.log(err))
}