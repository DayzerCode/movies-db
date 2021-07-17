import {TopOfTypeParameters, TopType, TopTypes} from "../../types/kinopoisk/TopType";
import {Dispatch} from "redux";
import TopResponse from "../../api/kinopoisk/Responses/TopResponse";
import getFilmsApi from "../../api/kinopoisk/getFilmsApi";

export const fetchTop = (page: number = 1, type: TopOfTypeParameters = TopOfTypeParameters.TOP_250_BEST_FILMS) => {
    return async (dispatch: Dispatch<TopType>) => {
        dispatch({
            type: TopTypes.FETCH,
        });
        const api = getFilmsApi();
        const response = api.getTop(page, type);
        response.then((response: TopResponse) => {
            dispatch({
                type: TopTypes.SUCCESS,
                payload: response
            });
        }).catch((error: Error) => {
            dispatch({
                type: TopTypes.ERROR,
                payload: error.message
            });
        });
    }
}