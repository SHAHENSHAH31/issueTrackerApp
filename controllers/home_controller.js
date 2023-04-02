//const User = require('../models/user');

module.exports.home=async function(req,res)
{

// const user = await User.find({});
return res.render('project_detail',{
    title:"Home",
   // all_users:user
});

}

