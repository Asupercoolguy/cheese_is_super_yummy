function addUser(){
    player1_name=document.getElementById("player1_name").value;
    player2_name=document.getElementById("player2_name").value;

    localStorage.setItem("Player 1 name" , player1_name);
    localStorage.setItem("Player 2 name" , player2_name);

    window.location="game_page.html";
}