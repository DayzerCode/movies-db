import FilmDetailResponse from "../../api/kinopoisk/Responses/FilmDetailResponse";
import {FilmDetailType, FilmDetailTypes} from "../../types/kinopoisk/FilmDetailType";
import StaffResponse from "../../api/kinopoisk/Responses/StaffResponse";

interface IFilm {
    result: FilmDetailResponse|null,
    error: null | string,
    isLoading: boolean
}

interface IStaffList {
    result: StaffResponse[]|null,
    error: null | string,
    isLoading: boolean
}

interface FilmDetailState {
    film: IFilm,
    staffList: IStaffList,
}

const FilmDetailInitialState : FilmDetailState = {
    film: {
        error: null,
        result: null,
        isLoading: false
    },
    staffList: {
        error: null,
        result: null,
        isLoading: false
    },
};

export const filmDetailReducer = (state = FilmDetailInitialState, action: FilmDetailType): FilmDetailState => {
    switch (action.type) {
        case FilmDetailTypes.FETCH_FILM:
            return {
                ...state,
                film: {
                    error: null,
                    result: null,
                    isLoading: true
                }
            }
        case FilmDetailTypes.SUCCESS_FILM:
            return {
                ...state,
                film: {
                    error: null,
                    result: action.payload,
                    isLoading: false
                }
            }
        case FilmDetailTypes.FILM_ERROR:
            return {
                ...state,
                film: {
                    result: null,
                    error: action.payload,
                    isLoading: false
                }
            }
        case FilmDetailTypes.FETCH_STAFF_LIST:
            return {
                ...state,
                staffList: {
                    error: null,
                    result: null,
                    isLoading: true
                }
            }
        case FilmDetailTypes.SUCCESS_STAFF_LIST:
            return {
                ...state,
                staffList: {
                    error: null,
                    result: action.payload,
                    isLoading: false
                }
            }
        case FilmDetailTypes.ERROR_STAFF_LIST:
            return {
                ...state,
                staffList: {
                    result: null,
                    error: action.payload,
                    isLoading: false
                }
            }
        default:
            return state
    }
}

