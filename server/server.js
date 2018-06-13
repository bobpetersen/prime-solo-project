
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
const currentTempRouter = require('./routes/currentTemp.router');
const currentLevelRouter = require('./routes/currentLevel.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cron = require('node-cron');

function requestDataFromCore() {
  console.log('running a task every minute');
  axios.get(`https://api.particle.io/v1/devices/${process.env.DEVICE_ID}/szInfo?access_token=${process.env.AUTH_TOKEN}`).then((response) => {
      
    const myData = JSON.parse(response.data.result); // turns your string into an Object
    console.log('HELLO LOOK AT ME', myData);
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
      console.log(myData.temp);
      
    const queryText = `INSERT INTO "temp_level" ("temp", "level", "tstz")
                         VALUES ($1, $2, now());`;
    const minValue = 40; // Min value should be ~40
    const actualReading = parseFloat(myData.level); // between -0.4 and -0.6 or higher
    // Math.abs always returns a positive number
    const waterReading = Math.abs(Math.floor(actualReading * 100)) - minValue; // Taking a small decimal and converting to 0 - 20
    pool.query(queryText, [parseFloat(myData.temp), waterReading]) 
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
app.use('/api/currentTemp', currentTempRouter);
app.use('/api/currentLevel', currentLevelRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
