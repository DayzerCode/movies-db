import BaseKinopoiskApi from "./BaseKinopoiskApi";
import {TopOfTypeParameters} from "../../types/kinopoisk/TopType";
import IFilmsApi from "./IFilmsApi";

export default class FilmsApi extends BaseKinopoiskApi implements IFilmsApi {
    public async getTop(page: number = 1, type: TopOfTypeParameters = TopOfTypeParameters.TOP_250_BEST_FILMS) {
        return this.request('v2.2/films/top', {page, type});
    }

    public async getDetail(id: number) {
        return this.request('v2.1/films/' + id);
    }
}