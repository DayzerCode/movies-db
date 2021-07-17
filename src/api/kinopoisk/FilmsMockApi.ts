import BaseKinopoiskApi from "./BaseKinopoiskApi";
import {TopOfTypeParameters} from "../../types/kinopoisk/TopType";
import IFilmsApi from "./IFilmsApi";
import TopResponse from "./Responses/TopResponse";
import FilmResponse from "./Responses/FilmResponse";
import CountryResponse from "./Responses/CountryResponse";
import GenreResponse from "./Responses/GenreResponse";
import FilmDetailResponse from "./Responses/FilmDetailResponse";

export default class FilmsMockApi extends BaseKinopoiskApi implements IFilmsApi {
    public async getTop(page: number = 1, type: TopOfTypeParameters = TopOfTypeParameters.TOP_250_BEST_FILMS): Promise<TopResponse> {
        return new Promise((resolve, reject) => {
            const response : TopResponse = {
                pagesCount: 3,
                films: this.getFilms(3)
            }
            resolve(response);
        });
    }

    protected getFilms(count = 1) {
        const films: FilmResponse[] = [];
        const countries: CountryResponse[] = [{country: 'Russia'}];
        const genres: GenreResponse[] = [{genre: 'Comedy'}];
        for (let i = 1; i < count + 1; i++) {
            let film : FilmResponse = {
                filmId: i,
                nameRu: 'Тестовый фильм',
                nameEn: 'Test Film',
                year: 2020,
                filmLength: 120,
                countries: countries,
                genres: genres,
                rating: 2.4,
                ratingVoteCount: 145,
                posterUrl: 'https://images.kinorium.com/movie/shot/472809/w1500_646411.jpg',
                posterUrlPreview: 'https://glancejournal.ru/wp-content/uploads/2016/05/kinopoisk.ru-Inception-1518023-265x198.jpg',
            }
            films.push(film);
        }
        return films;
    }

    getDetail(id: number): Promise<FilmDetailResponse> {
        return new Promise((resolve, reject) => {
            const response : FilmDetailResponse = this.getFilmDetail(id)
            resolve(response);
        });
    }

    protected getFilmDetail(id: number): FilmDetailResponse {
        const countries: CountryResponse[] = [{country: 'Russia'}];
        const genres: GenreResponse[] = [{genre: 'Comedy'}];
        return {
            description: "",
            distributorRelease: "",
            distributors: "",
            facts: [],
            premiereBluRay: undefined,
            premiereDigital: undefined,
            premiereDvd: undefined,
            premiereRu: undefined,
            premiereWorld: undefined,
            premiereWorldCountry: "",
            ratingAgeLimits: "",
            ratingMpaa: "",
            slogan: "",
            type: "",
            filmId: id,
            nameRu: 'Тестовый фильм',
            nameEn: 'Test Film',
            year: 2020,
            filmLength: 120,
            countries: countries,
            genres: genres,
            rating: 2.4,
            ratingVoteCount: 145,
            posterUrl: 'https://images.kinorium.com/movie/shot/472809/w1500_646411.jpg',
            posterUrlPreview: 'https://glancejournal.ru/wp-content/uploads/2016/05/kinopoisk.ru-Inception-1518023-265x198.jpg'
        };
    }
}