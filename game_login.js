function login() {
    player1=document.getElementById("play1n").value;
    player2=document.getElementById("play2n").value;
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
    window.location="game_page.html";
}