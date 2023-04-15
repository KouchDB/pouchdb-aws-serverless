const levelup = require('levelup');
const { DynamoDB } = require('aws-sdk');

// WIP (not working):
//  copied from https://www.npmjs.com/package/dynamodb-leveldown
//  getting error: TypeError: DynamoDbDown is not a function
const { DynamoDbDown } = require('dynamodbdown');

const factory = DynamoDbDown(new DynamoDB({}));
const db = levelup(factory('pouchdb'));

const PouchDB = require('pouchdb');
var CustomPouchDB = PouchDB.defaults({db: db});

const express = require('express');
const app = express();
app.use('/', require('express-pouchdb')(CustomPouchDB));

app.listen(8080);