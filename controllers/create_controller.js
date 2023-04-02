const User=require('../models/user');
module.exports.create = async function(req, res){
    try{
        console.log(req.body);
        await User.create({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description
        });
        console.log('hello');
        
        return res.redirect('back');

    }catch(err){
        console.log(err);
        return res.redirect('back');
    }
}


