

var aws = require('aws-sdk'); 
require('dotenv').config(); // Configure dotenv to load in the .env file
// Configure aws with your accessKeyId and your secretAccessKey
aws.config.update({
    region: 'us-east-1', // Put your aws region here
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey,
    signature: 's4',
})

exports.retrieve_s3 = (req, res) => {
    var s3 = new aws.S3();
    s3.getObject(
    { Bucket: process.env.Bucket, Key: req.body.key },
    function (error, data) {
        if (error != null) {
        console.log("Failed to retrieve an object: " + error);
        } else {
        console.log("Loaded " + data.ContentLength + " bytes");
        console.log(data.Body);
        // do something with data.Body
        }
    }
    );
}