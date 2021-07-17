import TopResponse from "../../api/kinopoisk/Responses/TopResponse";

export enum TopTypes {
    FETCH = 'FETCH',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export enum TopOfTypeParameters {
    TOP_250_BEST_FILMS = 'TOP_250_BEST_FILMS',
    TOP_100_POPULAR_FILMS = 'TOP_100_POPULAR_FILMS',
    TOP_AWAIT_FILMS = 'TOP_AWAIT_FILMS',
}

export enum TopOfTypeNames {
    TOP_250_BEST_FILMS = '250 лучших фильмов',
    TOP_100_POPULAR_FILMS = '100 самых популярных фильмов',
    TOP_AWAIT_FILMS = 'Топ ожидаемых фильмов',
}

export interface FetchTopAction {
    type: TopTypes.FETCH
}

export interface SuccessTopAction {
    type: TopTypes.SUCCESS,
    payload: TopResponse
}

export interface ErrorTopAction {
    type: TopTypes.ERROR,
    payload: string
}

export type TopType = FetchTopAction|SuccessTopAction|ErrorTopAction;