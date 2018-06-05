// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();

/**
 * GET route template
 */
// router.get('/', (req, res) => {
//     if (req.isAuthenticated()) {
//         const queryText = 'SELECT * FROM "water_temp"';
//         pool.query(queryText)
//             .then((response) => {
//                 res.send(response.rows);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     } else {
//         res.sendStatus(403);
//     }
    
// });

/**
 * POST route template
 */
// router.post('/', (req, res) => {

// });

// module.exports = router;