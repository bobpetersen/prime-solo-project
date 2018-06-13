import axios from 'axios';

export function getCurrentLevels() {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    // return axios.get('api/level', config)
    //     .then(response => response.data)
    //     .catch((error) => { throw error; });

}