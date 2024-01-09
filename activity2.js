function back(){
    windows.location="activity_1.htm";
}

function getScore(){
    score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="<h1>Score:" + score + "</h1>";
}