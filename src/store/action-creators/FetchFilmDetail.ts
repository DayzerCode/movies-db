import {Dispatch} from "redux";
import getFilmsApi from "../../api/kinopoisk/getFilmsApi";
import {FilmDetailType, FilmDetailTypes} from "../../types/kinopoisk/FilmDetailType";

export const fetchFilmDetail = (id: number) => {
    return async (dispatch: Dispatch<FilmDetailType>) => {
        dispatch({
            type: FilmDetailTypes.FETCH_FILM,
        });
        const api = getFilmsApi();
        const response = api.getDetail(id);
        response.then((response: any) => {
            dispatch({
                type: FilmDetailTypes.SUCCESS_FILM,
                payload: response.data
            });
        }).catch((error: Error) => {
            dispatch({
                type: FilmDetailTypes.FILM_ERROR,
                payload: error.message
            });
        });
    }
}