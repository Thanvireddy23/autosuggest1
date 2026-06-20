var users =[
    {
        "name" :"Pranav Reddy",
        "gender" : "Male",
        "image" : "../images/john.png"
    },
    {
         "name" :"Thanvi Reddy",
        "gender" : "Female",
        "image" : "../images/jane.png"
        

    }


]
var curId = 0;
function toggle(){
    //toggle curId from o to 1
    curId = (curId + 1) % 2;
    //image
    var user = users[curId];
    document.getElementById("user-img").src=user.image;
    //update name and gender
    document.getElementById("user-name").innerText=user.name;
    document.getElementById("user-gender").innerText=user.gender;



}