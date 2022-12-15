import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const {REACT_APP_API_URL} = getEnvVariables();

export const contactApi = axios.create({
    baseURL: REACT_APP_API_URL
})

contactApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config
})


