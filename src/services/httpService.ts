import axios from 'axios';

export class HttpService {

    public get(url: string) {
        return axios.get(url);
    }

    public post(url: string, body: any) {
        return axios.post(`${url}/transactions`, body);
    }
}