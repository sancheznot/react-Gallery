const { Schema, model } = require('mongoose')

const Image = new Schema({
    title: String,
    key: String,
    url: {
        type: String, 
        required: true
    }
},{
    timestamp: true,
    versionKey: false
})

module.exports = model('Image', Image)