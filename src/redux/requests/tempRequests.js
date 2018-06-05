import axios from 'axios';

export function getPondTemps() {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };

    return axios.get('api/temps', config)
        .then(response => response.data)
        .catch((error) => { throw error; });
}

