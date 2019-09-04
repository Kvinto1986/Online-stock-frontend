import axios from "axios";
import server from "../serverConfig";

export const getAllSender = async () => {
    const allSender = await axios.get(`${server}api/sender/`)
    return allSender.data;
}