var xhr2=new XMLHttpRequest()
xhr2.open("Get","https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products")
xhr2.onreadystatechange=function(){

    
    document.body.style.display="flex"
    document.body.style.justifyContent="center"
    document.body.style.justifyContent="space-around"
    document.body.style.flexWrap="wrap"
    


   
    if(xhr2.readyState==4&&xhr2.status==200){
        var product = JSON.parse(xhr2.responseText)
        
      for(var i=0;i<product.length;i++){
          var NewDiv=document.createElement("div");
          
          NewDiv.style.backgroundColor="red"
          NewDiv.style.borderRadius="20px"
          NewDiv.style.display="flex"
          NewDiv.style.justifyContent="space-around"
          NewDiv.style.width="40%"
          NewDiv.style.height="150px"
          NewDiv.style.marginBottom="12px"
          NewDiv.style.borderStyle="solid"
          NewDiv.style.color="black"


          
          var p = document.createElement("h2");
          var t=document.createTextNode(product[i].price)
          p.appendChild(t)
          var imag = document.createElement("img")
          imag.setAttribute("src",product[i].image)
          
          imag.style.borderRadius="20px"
          imag.style.marginTop="20px"
          imag.style.width="180px"
          imag.style.height="100px"

          NewDiv.appendChild(p)
          NewDiv.appendChild(imag)
          document.body.appendChild(NewDiv)
      }
    }
}
xhr2.send()


 