const express = require('express');
const fs = require('fs'); // eslint-disable-line global-require

const creds = JSON.parse(fs.readFileSync('./creds.json'));
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: creds.host,
    user: creds.user,
    password: creds.password,
    database: creds.database,
  },
});

// uncomment this to debug query responses
// knex.on('query-response', function(result, obj, builder) {
//   console.log('query:    ', obj.sql);
//   console.log('vars:     ', obj.bindings);
//   console.log('response: ', result[0]);
//   console.log("--------------------------");
// });

const router = express.Router(); // eslint-disable-line new-cap

// import user routes
const user = require('./controllers/user');

router.get('/users', (req, res) => user.getUser(req, res, knex));

module.exports = router;
