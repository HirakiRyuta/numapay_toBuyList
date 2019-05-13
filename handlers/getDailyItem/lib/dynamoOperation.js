'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: 'ap-northeast-1'});
const documentClient = new AWS.DynamoDB.DocumentClient();
const util = require('./util');
const constants = require('./constants');
const messages = constants.messages;
const db = require('./tableName')

const dynamoOperation = {};
module.exports = dynamoOperation;

const getDailyItemParams = (id) => {
  return {
    TableName: db.dailyItem,
  };
};

dynamoOperation.getDailyItems = async () => {
  console.log(messages.functionExecution, 'getDailyItems');
  return new Promise((resolve, reject) => {
    const params = getDailyItemParams();
    documentClient.scan(params, (error, data) => {
      if(error){
        console.error(messages.error.read, error)
        reject(error)
        return;
      }else{
        console.log(messages.success.read, data)
        resolve(data)
      }
    })
  });
};