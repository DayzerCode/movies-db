import TopResponse from "../../api/kinopoisk/Responses/TopResponse";
import {TopType, TopTypes} from "../../types/kinopoisk/TopType";

interface TopState {
    result: TopResponse|null,
    error: null | string,
    isLoading: boolean
}

const TopInitialState : TopState = {
    result: null,
    error: null,
    isLoading: false
};

export const topReducer = (state = TopInitialState, action: TopType): TopState => {
    switch (action.type) {
        case TopTypes.FETCH:
            return {
                error: null,
                result: null,
                isLoading: true
            }
        case TopTypes.SUCCESS:
            return {
                error: null,
                result: action.payload,
                isLoading: false
            }
        case TopTypes.ERROR:
            return {
                result: null,
                error: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}

