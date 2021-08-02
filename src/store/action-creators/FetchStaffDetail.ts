import {Dispatch} from "redux";
import getStaffApi from "../../api/kinopoisk/getStaffApi";
import {StaffDetailType, StaffDetailTypes} from "../../types/kinopoisk/StaffDetailType";

export const fetchStaffDetail = (staffId: number) => {
    return async (dispatch: Dispatch<StaffDetailType>) => {
        dispatch({
            type: StaffDetailTypes.FETCH,
        });
        const api = getStaffApi();
        const response = api.getStaffDetail(staffId);
        response.then((response) => {
            dispatch({
                type: StaffDetailTypes.SUCCESS,
                payload: response
            });
        }).catch((error: Error) => {
            dispatch({
                type: StaffDetailTypes.ERROR,
                payload: error.message
            });
        });
    }
}