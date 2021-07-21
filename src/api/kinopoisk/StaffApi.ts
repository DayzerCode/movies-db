import BaseKinopoiskApi from "./BaseKinopoiskApi";
import IStaffApi from "./IStaffApi";
import StaffResponse from "./Responses/StaffResponse";

export default class StaffApi extends BaseKinopoiskApi implements IStaffApi {
    public async getListByFilmId(filmId: number): Promise<StaffResponse[]> {
        return this.request('v1/staff/', {filmId});
    }
}