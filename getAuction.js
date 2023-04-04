const AWS = require('aws-sdk');

const dynamodb=new AWS.DynamoDB.DocumentClient();
module.exports.handler = async (event,context) => {
  let auction;
const {id}=event.pathParameters;

  try {
    const result=await dynamodb.get({TableName:'AuctionsTable',Key:{id}}).promise()
    auction=result.Item
  } catch (error) {
    console.log(error);
  }

 



  return {
    statusCode: 200,
    body: JSON.stringify(
      auction
    ),
  };
};