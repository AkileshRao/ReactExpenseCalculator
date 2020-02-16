import axios from 'axios';

export class axiosService {

    public get(url : string){
        return axios.get(url)
    }
}