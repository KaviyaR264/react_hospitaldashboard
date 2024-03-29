import axios from "axios";

export const callReports = () => {
    return axios.get('http://localhost:3501/reports');
}