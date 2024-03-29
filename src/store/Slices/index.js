import { combineReducers } from "@reduxjs/toolkit";
import DoctorListSlices from "./DoctorListSlice";
import ReportsSlices from "./ReportsSlice";
import AppointmentSlices from "./AppointmentSlice";

const rootReducer = combineReducers({
    doctorList: DoctorListSlices,
    reports: ReportsSlices,
    appointments: AppointmentSlices
})

export default rootReducer;