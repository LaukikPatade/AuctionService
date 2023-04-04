const AWS = require('aws-sdk');

const dynamodb=new AWS.DynamoDB.DocumentClient();
module.exports.handler = async (event,context) => {
//   let updatedAuction
//   console.log(event.pathParameters)
  const {id}=event.pathParameters;
  const amount=event.body;
//   console.log(amount)
//   const params={
//     TableName:'AuctionsTable',
//     Key:{id},
//     UpdateExpression:'set highestBid.amount= :amount',
//     ExpressionAttributeValues:{
//         ':amount':amount,
//     },
//     ReturnValues:'ALL_NEW'
// }


//   try {
//     const result=await dynamodb.update(params).promise()
//     updatedAuction=result.Attributes
//   } catch (error) {
//     console.log(error);
//   }

 



  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        id,amount
      }
    ),
  };
};