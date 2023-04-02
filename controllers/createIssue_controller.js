const Issue=require('../models/issue');
const User=require('../models/user');
module.exports.createIssue=async function(req,res){
    try{
    console.log(req.body);
     var issue =await Issue.create({
        title:req.body.title,
        author:req.body.author,
        severity:req.body.severity,
        description:req.body.description
     })
     var project=await User.findById(req.body.id);
     project.issue.push(issue.id);
     project.save();
     console.log('hello');
    }
    catch(err){
        console.log(err);
    }
     return res.redirect('back');
}