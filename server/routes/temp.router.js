const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const axios = require('axios');
const router = express.Router();


// Every minute, request data from the photon core
// TODO: Move access token to .env file


router.get('/', (req, res) => {
    console.log('Get got got');
    const queryText = `SELECT "temp", "tstz" FROM "water_temp"
                       ORDER BY "tstz" DESC
                       LIMIT 10;`;
    pool.query(queryText)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            res.sendStatus(500)
            console.log(`ERROR on router.get: ${error}`);
        }
        )
});




module.exports = router;