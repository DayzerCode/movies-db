export default class FilmHelper {
    public static getDetailLink(filmId: number): string {
        return '/film/' + filmId;
    }
}