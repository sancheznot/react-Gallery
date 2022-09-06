const {config} = require('dotenv')

config();

// ------------- .ENV
module.exports = {
    bucketName: process.env.BUCKET_NAME || '', 
    endPoint: process.env.ENDPOINT || ''
 }