
import axios from "axios";
import config from "../../config";

export default class BaseKinopoiskApi {
    protected token;
    protected baseUrl = 'https://kinopoiskapiunofficial.tech/api';

    constructor() {
        this.token = config.kinopoiskToken;
    }

    public async request(path: string, data?: object) {
        const response = await axios.get(this.baseUrl + '/' + path, {
            headers: {
                'X-API-KEY': this.token
            },
            params: {
                ...data,
            }
        });
        return response.data;
    }
}