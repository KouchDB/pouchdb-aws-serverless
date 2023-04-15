const process = require('process');
process.chdir('/mnt/data');

const PouchDB = require('pouchdb');
const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.use('/', require('express-pouchdb')(PouchDB, {}));

exports.pouchdbServerlessHandler = serverless(app);

// Use something like this for debugging:
// exports.pouchdbServerlessHandler = serverless(app, {
//     request(request, event, context) {
//         console.log(request, event, context);
//     },
//     async response(response, event, context) {
//         console.log(response, event, context);
//     }
// });