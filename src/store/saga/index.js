import { takeEvery } from "redux-saga/effects";

import { getStartDoctorList } from "../Slices/DoctorListSlice";
import { getDoctorListHandler } from "./handler/DoctorListSaga";

import { getStartReports } from "../Slices/ReportsSlice";
import { getReportsHandler } from "./handler/ReportsSaga";
import { getStartAppointments } from "../Slices/AppointmentSlice";
import { getAppointmentsHandler } from "./handler/AppointmentsSaga";


export function* watcherSaga() {
    yield takeEvery(getStartDoctorList, getDoctorListHandler)
    yield takeEvery(getStartReports, getReportsHandler)
    yield takeEvery(getStartAppointments, getAppointmentsHandler)
}