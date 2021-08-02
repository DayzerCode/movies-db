import BaseKinopoiskApi from "./BaseKinopoiskApi";
import IStaffApi from "./IStaffApi";
import StaffResponse from "./Responses/StaffResponse";
import StaffDetailResponse from "./Responses/StaffDetailResponse";

export default class StaffApi extends BaseKinopoiskApi implements IStaffApi {
    public async getListByFilmId(filmId: number): Promise<StaffResponse[]> {
        return this.request('v1/staff/', {filmId});
    }

    public async getStaffDetail(staffId: number): Promise<StaffDetailResponse> {
        return this.request('v1/staff/' + staffId);
    }
}