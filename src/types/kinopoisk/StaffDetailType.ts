import StaffDetailResponse from "../../api/kinopoisk/Responses/StaffDetailResponse";

export enum StaffDetailTypes {
    FETCH = 'FETCH',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}

export interface FetchStaffDetailAction {
    type: StaffDetailTypes.FETCH
}

export interface SuccessStaffDetailAction {
    type: StaffDetailTypes.SUCCESS,
    payload: StaffDetailResponse
}

export interface ErrorStaffDetailAction {
    type: StaffDetailTypes.ERROR,
    payload: string
}

export type StaffDetailType = FetchStaffDetailAction|SuccessStaffDetailAction|ErrorStaffDetailAction;