const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Get got got');
    const queryText = `SELECT * FROM "water_level";`;
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