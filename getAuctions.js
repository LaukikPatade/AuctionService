const AWS = require('aws-sdk');

const dynamodb=new AWS.DynamoDB.DocumentClient();
module.exports.handler = async (event,context) => {
  let auctions;


  try {
    const result=await dynamodb.scan({TableName:'AuctionsTable'}).promise()
    auctions=result.Items
  } catch (error) {
    console.log(error);
  }

 



  return {
    statusCode: 200,
    body: JSON.stringify(
      auctions
    ),
  };
};