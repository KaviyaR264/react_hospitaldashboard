import { put, call } from "redux-saga/effects";
import { getReportsFailure, getReportsSuccess } from "../../../Slices/ReportsSlice";
import { callReports } from "../../services/reports.js";

export function* getReportsHandler(actions){
    try {
        let response = yield call(callReports, actions?.payload);
        yield put(getReportsSuccess(response));
    }catch (err){
        const errResponse = err?.response?.data?.message;
        yield put(getReportsFailure(errResponse))
    }
}