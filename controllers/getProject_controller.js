const User=require('../models/user');
module.exports.getProject= async function(req,res){
 const user = await User.find({});
    return res.status(200).json(user);
}