import { put, call } from "redux-saga/effects";
import { getDoctorListFailure, getDoctorListSuccess } from "../../../Slices/DoctorListSlice";
import { callUsers } from "../../services/request";

export function* getDoctorListHandler(actions){
    try {
        let response = yield call(callUsers, actions?.payload);
        yield put(getDoctorListSuccess(response));
    }catch (err){
        const errResponse = err?.response?.data?.message;
        yield put(getDoctorListFailure(errResponse))
    }
}