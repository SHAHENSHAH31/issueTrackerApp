module.exports.addIssuePage=async function(req,res)
{

// const user = await User.find({});
return res.render('addIssue',{
    title:"AddIssue",
   // all_users:user
});

}