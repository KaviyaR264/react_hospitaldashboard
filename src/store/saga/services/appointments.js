import axios from "axios";

export const callAppointments = () => {
    return axios.get('http://localhost:3502/appointments');
}