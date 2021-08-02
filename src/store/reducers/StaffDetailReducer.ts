import StaffDetailResponse from "../../api/kinopoisk/Responses/StaffDetailResponse";
import {StaffDetailType, StaffDetailTypes} from "../../types/kinopoisk/StaffDetailType";

interface StaffDetailState {
    result: StaffDetailResponse|null,
    error: null | string,
    isLoading: boolean
}

const StaffDetailInitialState : StaffDetailState = {
    result: null,
    error: null,
    isLoading: false
};

export const staffDetailReducer = (state = StaffDetailInitialState, action: StaffDetailType): StaffDetailState => {
    switch (action.type) {
        case StaffDetailTypes.FETCH:
            return {
                error: null,
                result: null,
                isLoading: true
            }
        case StaffDetailTypes.SUCCESS:
            return {
                error: null,
                result: action.payload,
                isLoading: false
            }
        case StaffDetailTypes.ERROR:
            return {
                result: null,
                error: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}

