import {Dispatch} from "redux";
import getFilmsApi from "../../api/kinopoisk/getFilmsApi";
import {FilmDetailType, FilmDetailTypes} from "../../types/kinopoisk/FilmDetailType";

export const fetchFilmDetail = (id: number) => {
    return async (dispatch: Dispatch<FilmDetailType>) => {
        dispatch({
            type: FilmDetailTypes.FETCH,
        });
        const api = getFilmsApi();
        const response = api.getDetail(id);
        console.log(response);
        response.then((response: any) => {
            dispatch({
                type: FilmDetailTypes.SUCCESS,
                payload: response.data
            });
        }).catch((error: Error) => {
            dispatch({
                type: FilmDetailTypes.ERROR,
                payload: error.message
            });
        });
    }
}