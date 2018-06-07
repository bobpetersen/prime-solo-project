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

// const cron = require('node-cron');

// cron.schedule('* * * * *', function () {
//     console.log('running a task every minute');
//     axios.get('https://api.particle.io/v1/devices/events?access_token=8d59b21b080cc86e261d7eb2875536a882f9d277').then((response) => {
//         console.log(response.data);
//         const queryText = `INSERT INTO "water_temp" ("temp","tstz")
//                             VALUES ($1, now());`;
//         pool.query(queryText, [response.data[0].data])
//             .then((results) => {
//                 res.send(results.rows);
//             })
//             .catch((error) => {
//                 res.sendStatus(500)
//                 console.log(`ERROR on router.get: ${error}`);
//             }
//             )
//     })

// });