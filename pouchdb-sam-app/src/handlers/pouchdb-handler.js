const process = require('process');
process.chdir('/mnt/data');

const PouchDB = require('pouchdb');
const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.use('/', require('express-pouchdb')(PouchDB, {}));

exports.pouchdbServerlessHandler = serverless(app);