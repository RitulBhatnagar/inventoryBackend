const mongoose = require("mongoose");
const tokenModel = mongoose.Schema({
     userId : {
      type : mongoose.Schema.Types.ObjectId,
      require : "true",
      ref : "user"
     },
     token : {
      type : String,
      require: true,
     },
     createdAt : {
      type : Date,
      require : true,
     },
     expiresAt : {
      type : Date,
      require : true,
     }
});

const Token = mongoose.model("Token", tokenModel);
module.exports = Token;