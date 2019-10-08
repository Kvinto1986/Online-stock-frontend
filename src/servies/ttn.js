import axios from "axios"
import server from "../serverConfig"
// import { FETCH_TTN_BY_NUMBER } from "../actions/types"

export const addTtn = info => {

    const {
        TTNNumber,
        carrier,
        sender,
        carNumber,
        driver,
        registrar,
        products,
        company,
        description
    } = info;

    return axios.post(`${server}api/ttns/`, {
        number: TTNNumber,
        carrier: carrier,
        driver: driver,
        registrar: registrar,
        carNumber: carNumber,
        sender: sender,
        products: products,
        description: description,
        company:company
    })
};

export const findTtn = async (number) => {
    const ttn = await axios.get(`${server}api/ttns/${number}`)
    return ttn.data
}

