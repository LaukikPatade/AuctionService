const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const dynamodb=new AWS.DynamoDB.DocumentClient();
module.exports.handler = async (event,context) => {
  
  const now=new Date();
  const auction={
    id:uuidv4(),
    title:event.body,
    status:'OPEN',
    createdAt:now.toISOString(),
    highestBid:{
      amount:0
    }
  };

  await dynamodb.put({
    TableName:'AuctionsTable',
    Item:auction,
  }).promise()

  return {
    statusCode: 201,
    body: JSON.stringify(
      auction
    ),
  };
};