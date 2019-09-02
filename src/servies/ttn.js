import axios from 'axios';
import server from "../serverConfig";

export const addTtn = (info) => {
    const{
        date,
        TTNNumber,
        carrier,
        sender,
        carNumber,
        driver,
        registrar,
        nameAmount,
        productAmount,
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
        nameAmount: nameAmount,
        productAmount: productAmount,
        description: description
    })
};

