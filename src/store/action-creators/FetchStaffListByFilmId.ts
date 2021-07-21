import {Dispatch} from "redux";
import getStaffApi from "../../api/kinopoisk/getStaffApi";
import {FilmDetailType, FilmDetailTypes} from "../../types/kinopoisk/FilmDetailType";

export const fetchStaffListByFilmId = (filmId: number) => {
    return async (dispatch: Dispatch<FilmDetailType>) => {
        dispatch({
            type: FilmDetailTypes.FETCH_STAFF_LIST,
        });
        const api = getStaffApi();
        const response = api.getListByFilmId(filmId);
        response.then((response) => {
            dispatch({
                type: FilmDetailTypes.SUCCESS_STAFF_LIST,
                payload: response
            });
        }).catch((error: Error) => {
            dispatch({
                type: FilmDetailTypes.ERROR_STAFF_LIST,
                payload: error.message
            });
        });
    }
}