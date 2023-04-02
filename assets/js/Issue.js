

var Url=window.location.href;
var index=Url.lastIndexOf('/');
var id=Url.substring(index+1,Url.length);
var form= document.getElementById('issue');
form.addEventListener('submit',async function(e){
   e.preventDefault();
   var title=document.getElementById('title');
   var author=document.getElementById('author');
   var severity=document.getElementById('severity');
   var description=document.getElementById('description');
   await fetch('/users/createIssue',{
    method:'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      title:title.value,
       author:author.value,
       severity:severity.value,
       description:description.value,
       id 
    })
   });
   console.log('hello');
   title.value = '';
   author.value = '';
   severity.value = '';
   description.value = '';

});

