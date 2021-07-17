import {TopType, TopTypes} from "../../types/kinopoisk/TopType";
import FilmDetailResponse from "../../api/kinopoisk/Responses/FilmDetailResponse";
import {FilmDetailType, FilmDetailTypes} from "../../types/kinopoisk/FilmDetailType";

interface FilmDetailState {
    result: FilmDetailResponse|null,
    error: null | string,
    isLoading: boolean
}

const FilmDetailInitialState : FilmDetailState = {
    result: null,
    error: null,
    isLoading: false
};

export const topReducer = (state = FilmDetailInitialState, action: FilmDetailType): FilmDetailState => {
    switch (action.type) {
        case FilmDetailTypes.FETCH:
            return {
                error: null,
                result: null,
                isLoading: true
            }
        case FilmDetailTypes.SUCCESS:
            return {
                error: null,
                result: action.payload,
                isLoading: false
            }
        case FilmDetailTypes.ERROR:
            return {
                result: null,
                error: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}

