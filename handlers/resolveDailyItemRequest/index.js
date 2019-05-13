'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: 'ap-northeast-1'});
const documentClient = new AWS.DynamoDB.DocumentClient()
const db = require('./lib/tableName')
const util = require('./lib/util');
const constants = require('./lib/constants.json');
const messages = constants.messages;
const _ = require('lodash');

const deleteDailyItemRequestParams = requestId => {
  return {
    TableName: db.dailyItemRequest,
    Key: {
      'request_id': requestId,
    }
  }
}

const deleteDailyItemRequest = async requestId => {
  console.log(messages.functionExecution, 'deleteDailyItemRequest')
  return new Promise((resolve,reject)=>{
    const params = deleteDailyItemRequestParams(requestId);
    documentClient.delete(params, (error, data) => {
      if(error){
        console.error(messages.error.update, JSON.stringify(error, null, 2));
        reject(false);
        return;
      }else{
        console.log(messages.success, JSON.stringify(data, null, 2));
        resolve(true);
      }
    })
  })
}

const getResponse = (statusCode = 500, message = 'Internal server error', body = {}) => {
  return {
    status_code: statusCode,
    message: message,
    headers: {
      'Content-Type':'application/json; charset=utf-8',
      'Access-Control-Allow-Origin':'*',
    },
    body: body,
  };
};

exports.handler = async (event, context) => {
    event = event.body || event;
    const requestIdsToDelete = event.delete_ids
    try{
      const results = requestIdsToDelete.reduce( async (accumulatedRecords, requestId) => {
        const result = await deleteDailyItemRequest(requestId);
        accumulatedRecords.push(result);
        return accumulatedRecords;
      },[]);
      const result  = _.uniq(results);
      if (result.length >= 2) {
        return getResponse(500, 'Intenal Server Error', { error_message: 'One or more record did not successfully updated'})
      }
      return getResponse(201, 'SUCCEED', {})
    }catch(error){
      console.log(error)
      return getResponse(500, 'Internal Server Error', {error: error})
    }
};