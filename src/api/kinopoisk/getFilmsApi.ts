
import FilmsMockApi from "./FilmsMockApi";
import FilmsApi from "./FilmsApi";
import IFilmsApi from "./IFilmsApi";
import config from "../../config";

export default function getFilmsApi(): IFilmsApi {
    if (config.mockKinopoiskApi) {
        return new FilmsMockApi();
    }
    return new FilmsApi();
}