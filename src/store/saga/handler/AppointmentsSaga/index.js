import { put, call } from "redux-saga/effects";
import { getAppointmentsFailure, getAppointmentsSuccess } from "../../../Slices/AppointmentSlice";
import { callAppointments } from "../../services/appointments.js";

export function* getAppointmentsHandler(actions){
    try {
        let response = yield call(callAppointments, actions?.payload);
        yield put(getAppointmentsSuccess(response));
    }catch (err){
        const errResponse = err?.response?.data?.message;
        yield put(getAppointmentsFailure(errResponse))
    }
}