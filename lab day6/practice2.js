/*var arr = [20,40,50,60,70,80,60,50,5,4,100]
/*var t=arr.sort(function(a,b){

    return b-a;
});

var s=arr.splice(2,4)
console.log(s)
console.log(arr)
*/

/*var arr = [50,100,20,function(){

    console.log("love you")
},200]
arr[3]()
*/

/*var r =setInterval(function display(){
    var time = new Date()
    

    document.write(time.toLocaleTimeString()+"<br>")
   
},1000)

function cleardis(){

    clearInterval(r)
}

setTimeout(cleardis,7000)
var win = window.open("https://www.youtube.com/watch?v=V-wiQO56Es4","hi","_blank")


location.replace("https://www.youtube.com/watch?v=V-wiQO56Es4")
*/

function setI(){
var d = new Date()
var u =document.getElementById("n").value
localStorage.setItem("Name",JSON.stringify(u))
//document.cookie="usename="+u+";"+(d.toDateString()+10)+";"

var P =document.getElementById("p").value
localStorage.setItem("password",JSON.stringify(P))
//document.cookie="usename="+P+";"+(P.toDateString()+17)+";"


}








