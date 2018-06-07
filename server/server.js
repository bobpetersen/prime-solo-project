
const express = require('express');
require('dotenv').config();
const pool = require('./modules/pool');

const axios = require('axios');

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const tempRouter = require('./routes/temp.router');
const levelRouter = require('./routes/level.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cron = require('node-cron');

function requestDataFromCore() {
  console.log('running a task every minute');
  axios.get(`https://api.particle.io/v1/devices/${process.env.DEVICE_ID}/szInfo?access_token=${process.env.AUTH_TOKEN}`).then((response) => {
      console.log(response.data);
      // SAMPLE RESPONSE
      // {
      //   "cmd": "VarReturn",
      //   "name": "szInfo",
      //   "result": "71.82",
      //   "coreInfo": {
      //     "last_app": "",
      //     "last_heard": "2018-06-07T16:35:37.949Z",
      //     "connected": true,
      //     "last_handshake_at": "2018-06-07T16:35:12.381Z",
      //     "deviceID": "280030001147343438323536",
      //     "product_id": 6
      //   }
      // }
      const queryText = `INSERT INTO "water_temp" ("temp","tstz")
                            VALUES ($1, now());`;
      pool.query(queryText, [parseFloat(response.data.result)])
        .then((results) => {
          
          console.log(results);
        })
        .catch((error) => {
          console.log(`ERROR on router.get: ${error}`);
        }
        )
    }).catch((error) => {
      console.log(error);
    })
}

cron.schedule('* * * * *', requestDataFromCore);

requestDataFromCore(); // Call it right now

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/temps', tempRouter);
app.use('/api/level', levelRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
