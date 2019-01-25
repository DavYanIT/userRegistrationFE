import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

export function login(data) {
    const url = `${ROOT_URL}/login`;
    const request = axios.post(url, data);

    return {
        type: 'LOGIN',
        payload: request
    }
}

export function register(user) {
    const url = `${ROOT_URL}/register`;
    const request = axios.post(url, {user: user});

    return {
        type: 'REGISTER',
        payload: request
    }
}