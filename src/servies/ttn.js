import axios from "axios"
import server from "../serverConfig"
// import { FETCH_TTN_BY_NUMBER } from "../actions/types"

export const addTtn = info => {

    const {
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

export const findTtn = async (number) => {
    const{ttnNumber} = number
    const ttn = await axios.get(`${server}api/ttn/getbyNumber/${ttnNumber}`)
    return ttn.data
}

