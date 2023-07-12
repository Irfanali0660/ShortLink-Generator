const mongoose= require('mongoose')

const UrlSchema=new mongoose.Schema({
    orginalUrl:{
        type:String
    },
    shortUrl:{
        type:String
    }
})

module.exports = urlModel = mongoose.model('urlData',UrlSchema);