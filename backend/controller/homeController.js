const ShortUniqueId = require('short-unique-id');
const urlModel = require('../model/urlModel');


module.exports={
    shorturl:(req,res,next)=>{
        try {
            const linkRegex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g;
            if(linkRegex.test(req.body.shortUrl)){
                const uid = new ShortUniqueId();

            const uuid = uid.stamp(12);
            console.log(uuid);

            const newurl=urlModel({
                orginalUrl:req.body.shortUrl,
                shortUrl:uuid
            })
            newurl.save().then((data)=>{
                console.log(data,'data');
                res.json(data)
            })
            }else{
                console.log("invaid link");
            }
        } catch (error) {
            next(error)
        }
    },

    shorturlcheck:async(req,res,next)=>{
       try {
        console.log(req.body,"shorturlcheck");

       let details=await urlModel.find({shortUrl:req.body.urlid})
       if(details.length){
        res.json(details)
       }else{
        res.json("Invaild Url")
       }
       } catch (error) {
        next(error)
       }
       
    }
}