import {TopOfTypeParameters} from "../../types/kinopoisk/TopType";
import TopResponse from "./Responses/TopResponse";
import FilmDetailResponse from "./Responses/FilmDetailResponse";

export default interface IFilmsApi {
    getTop: (page: number, type: TopOfTypeParameters) => Promise<TopResponse>;

    getDetail: (id: number) => Promise<FilmDetailResponse>;
}