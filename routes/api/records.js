const express = require("express");
const router = express.Router();
const passport = require('passport');

// for token signature
const keys = require('../../config/keys');

// auth required technologies
const jwt = require('jsonwebtoken');

// models
const Record = require('../../models/Record');

// validations
const validateRecordInput = require('../../validations/records');

// // ROUTES
// GETS
// test route, to be deleted
router.get("/test", (req, res) => {
    return res.json({ msg: "This is the Records route" })
});
// private
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.Record.id,
        handle: req.Record.handle,
        email: req.Record.email
    });
})

router.post('/s3_upload', (req, res) => {
    // aws s3 controller for form uploads
    var aws = require('aws-sdk'); 
    require('dotenv').config(); // Configure dotenv to load in the .env file
    // Configure aws with your accessKeyId and your secretAccessKey
    aws.config.update({
    region: 'us-east-1', // Put your aws region here
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretKey
    })

    const S3_BUCKET = process.env.bucket
    // Now lets export this function so we can call it from somewhere else
    exports.sign_s3 = (req,res) => {
    const s3 = new aws.S3();  // Create a new instance of S3
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;
    // Set up the payload of what we are sending to the S3 api
    const s3Params = {
        Bucket: S3_BUCKET,
        Key: fileName,
        Expires: 500,
        ContentType: fileType,
        ACL: 'public-read'
    };
    // Make a request to the S3 API to get a signed URL which we can use to upload our file
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
        if(err){
        console.log(err);
        res.json({success: false, error: err})
        }
        // Data payload of what we are sending back, the url of the signedRequest and a URL where we can access the content after its saved. 
    const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
        };
        // Send it all back
        res.json({success:true, data:{returnData}});
    });
    }
});

module.exports = router;