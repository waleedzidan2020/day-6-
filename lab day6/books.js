var xm=new XMLHttpRequest()
xm.open("GET","https://www.googleapis.com/books/v1/volumes?q=${bookName}")

xm.onreadystatechange=function(){

    
    if(xm.status==200&&xm.readyState==4){
        var books= JSON.parse(xm.responseText)
    var newdiv=document.createElement("div")
        for(var i=0;i<books.length;i++){
       
       var item=document.createTextNode(books.items[i].id)
       newdiv.appendChild(item)
       document.body.appendChild(newdiv)
       
        }
       

    }
}
xm.send()