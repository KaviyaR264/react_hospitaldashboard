import axios from "axios";

export const callUsers = () => {
    return axios.get('http://localhost:3500/doctorlist/');
}