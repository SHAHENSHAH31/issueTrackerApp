var div=document.getElementById('all_project');
window.addEventListener('load',async function(){
    var res=await fetch('/users/getproject');
    var data=await res.json();
    for(var i=0;i<data.length;i++){
        var obj=data[i];
        var childDiv=document.createElement('div');
        childDiv.setAttribute('class','row my-3 pt-3 rounded-3');


        var divCol1=document.createElement('div');
        divCol1.setAttribute('class','col-3');
        var div_1=document.createElement('div');
        var authorImage=document.createElement('img');
        authorImage.setAttribute('src','https://cdn-icons-png.flaticon.com/512/5948/5948820.png');
        authorImage.setAttribute('class','img');
        div_1.appendChild(authorImage);


        var div_2=document.createElement('div');
        var titleImage=document.createElement('img');
        titleImage.setAttribute('src','https://cdn-icons-png.flaticon.com/512/2799/2799954.png');
        titleImage.setAttribute('class','img');
        div_2.appendChild(titleImage);



        var div_3=document.createElement('div');
        var descriptionImage=document.createElement('img');
        descriptionImage.setAttribute('src','https://cdn-icons-png.flaticon.com/512/7032/7032457.png');
        descriptionImage.setAttribute('class','img');
        div_3.appendChild(descriptionImage);



        var title=document.createElement('span');
        var author=document.createElement('span');
        var description=document.createElement('span');

        title.innerHTML=obj.title;
        div_2.appendChild(title);


        author.innerHTML=obj.author;
        div_1.appendChild(author);


        description.innerHTML=obj.description;
        div_3.appendChild(description);
       // var classlist=childDiv.classList;
        //classlist.add('childdiv');

        divCol1.appendChild(div_2);
        divCol1.appendChild(div_1);
        divCol1.appendChild(div_3);
        childDiv.appendChild(divCol1);



        var divCol2=document.createElement('div');
        divCol2.setAttribute('class','col-3');
        var addIssue=document.createElement('button');
        addIssue.setAttribute('class','btn btn-success mt-5');
        addIssue.setAttribute('id',`${obj._id}`);
        addIssue.innerHTML='addIssue';
        addIssue.addEventListener('click',function(e){
          var id=e.target.getAttribute('id');
          window.location.href=`/users/addIssue/${id}`;
        })
        divCol2.appendChild(addIssue);
        childDiv.appendChild(divCol2);
        childDiv.style.backgroundColor='white';


        var divcol3=document.createElement('div');
        divcol3.setAttribute('class','col-3');
        var viewIssue=document.createElement('button');
        viewIssue.setAttribute('class','btn btn-primary mt-5');
        viewIssue.setAttribute('id',`${obj._id}`);
        viewIssue.innerHTML='viewIssue';
        viewIssue.addEventListener('click',function(e){
          var id=e.target.getAttribute('id');
          window.location.href=`/users/viewIssue/${id}`;
        })
        divcol3.appendChild(viewIssue);
        childDiv.appendChild(divcol3);


        var divcol4=document.createElement('div');
        divcol4.setAttribute('class','col-3');
        var deleteIssue=document.createElement('button');
        deleteIssue.setAttribute('class','btn btn-danger mt-5');
        deleteIssue.innerHTML='deleteIssue';
        divcol4.appendChild(deleteIssue);
        childDiv.appendChild(divcol4);
        div.appendChild(childDiv);
        
    }
    console.log(data);
})

