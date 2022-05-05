var xhr=new XMLHttpRequest()
xhr.open("GET","https://jsonplaceholder.typicode.com/todos")
xhr.onreadystatechange=function(){

   if(xhr.status==200&&xhr.readyState==4){
       var placeholder = JSON.parse(xhr.response)
    var newdiv=document.createElement("div")
    for(var i=0;i<placeholder.length;i++){
         if(placeholder[i].completed==true){

            
            var txt=document.createTextNode(placeholder[i].title)
            newdiv.appendChild(txt);
            document.body.appendChild(newdiv)


         }
        
    }
         


   }


}
xhr.send()