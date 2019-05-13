'use strict';

const dynamoOperation = require('./lib/dynamoOperation');
const util = require('./lib/util');
const constants = require('./lib/constants.json');
const messages = constants.messages;
const _ = require('lodash');
const AWS = require('aws-sdk');
AWS.config.update({region: 'ap-northeast-1'});

const getDailyItems = async () => {
  const dailyItems = await dynamoOperation.getDailyItems();
  return _.mapKeys(dailyItems.Items, 'item_id')
}

const getResponse = (statusCode = 500, message = 'Internal server error', body = []) => {
  return {
    status_code: statusCode,
    message: message,
    body: body,
  };
};

exports.handler = async (event, context) => {
    event = event.body || event;
    try{
      const response = await getDailyItems();
      console.log(response);
      return getResponse(200, 'Success', response);
    }catch(error){
      console.log(error)
      return getResponse(500, 'Internal Server Error', error)
    }
};