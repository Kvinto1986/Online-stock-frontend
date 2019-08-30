import axios from 'axios';
import server from "../serverConfig";

export const addTtn = (info) => {
    console.log(info)
    const{
        date,
        TTNNumber,
        carrier,
        sender,
        carNumber,
        driver,
        registrar,
        products,
        description
    } = info;
    return axios.post(`${server}api/ttn/addTtn`, {
        number: TTNNumber,
        date: date,
        carrier: carrier,
        driver: driver,
        registrar: registrar,
        carNumber: carNumber,
        sender: sender,
        products: products,
        description: description
    })
};

export const findTTNbyNumber = number => {
    return axios.post(`${server}api/ttn/findTTNbyNumber`, number)
}

