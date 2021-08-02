export default class StaffHelper {
    public static getDetailLink(personId: number): string {
        return '/staff/' + personId;
    }
}