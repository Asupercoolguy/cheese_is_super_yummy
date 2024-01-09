var player_1=localStorage.getItem("player1_name");
var player_2=localStorage.getItem("player2_name");
var player1_score=0;
var player2_score=0;

document.getElementById("player1_name").innerHTML=player_1 + ":";
document.getElementById("player2_name").innerHTML=player_2 + ":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn-" + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn-" + player2_name;

function send(){
    getWord=document.getElementById("word").value;
    word=getWord.toLowerCase();
    console.log("word in lowercase" + word);
    char_at1=word.charAt(1);
    length_divide_2=Math.floor(word.length/2);
    char_at2=word.charAt(length_divide_2);

    length_minus_1=word.length-1;
    char_at3=word.charAt(length-1);

    var remove_char_at1=word.replace(char_at1 , "_");
    var remove_char_at2=word.replace(char_at2 , "_");
    var remove_char_at3=word.replace(char_at3 , "_");

    question_word="<h4 id='word_display'>Q." + remove_char_at3 + "</h4>";
    input_box="<br>Answer: <input type='text' id='input_checkbox'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";

    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value=" ";
}

function check(){
    get_answer=document.getElementById("input_check_box").value;

    answer=get_answer.toLowerCase;
    console.log("answer is" + answer)
     if(answer==word){
        if(answer_turn=="player_1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
         else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
     }

     if(answer!=word){
        if(answer_turn=="player_1"){
            player2_score=player1_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
         else{
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
     }

     if(question_turn==player_1){
        question_turn=player_2;
        document.getElementById("player_question").innerHTML="Question Turn-" + player2_name;
     }
     else{
        question_turn=player_1;
        document.getElementById("player_question").innerHTML="Question Turn-" + player1_name;
     }

     if(answer_turn==player_1){
        answer_turn=player_2;
        document.getElementById("player_answer").innerHTML="Answer Turn-" + player2_name;
     }
     else{
        answer_turn=player_1;
        document.getElementById("player_answer").innerHTML="Answer Turn-" + player1_name;
     }

     document.getElementById("output").innerHTML=" ";
}