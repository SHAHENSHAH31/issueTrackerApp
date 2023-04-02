const User=require('../models/user');
const Issue=require('../models/issue');

module.exports.viewIssue1=async function(req,res)
{
    try{
  //  var user_id = req.params.id;
   // console.log(user_id);
    var project=await User.findById(req.params.id);
    var issue=project.issue;
   // console.log(issue);
    var obj={};
    for (var i of issue) {
      //  console.log(i);
        var issue_data = await Issue.findById(i);
       // console.log(issue_data);
        obj[i] = {};
        obj[i].title=issue_data.title;
        obj[i].author = issue_data.author;
        obj[i].severity = issue_data.severity;
        obj[i].description = issue_data.description;
    }
  

   // return res.status(200).json(obj);
   return res.render('view_issue',{Issues : obj,title:'issue'});
    }
    catch(err){
        console.log(err);
    }
}
// const user = await User.find({});


    