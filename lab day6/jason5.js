var students ='[ {"id":1, "username":"waleed" , "adress":"aswan" , "skills":["css","html","js"]} , {"id":2, "username":"moahemd" , "adress":"cairo" , "skills":["css","html","js"]}  ]  '
var stu = JSON.parse(students)
document.getElementById("stu1").innerHTML=`${stu[0].id}`+`   ${stu[0].username}`+`   ${stu[0].adress}`+`   ${stu[0].skills[0]}`+`   ${stu[0].skills[1]}`+`   ${stu[0].skills[2]}`

document.getElementById("stu2").innerHTML=`${stu[1].id}`+`   ${stu[1].username}`+`   ${stu[1].adress}`+`   ${stu[1].skills[0]}`+`   ${stu[1].skills[1]}`+`   ${stu[1].skills[2]}`


