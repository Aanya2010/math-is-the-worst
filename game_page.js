player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");
player1score=0;
player2score=0;

document.getElementById("player1name").innerHTML=player1+":";
document.getElementById("player2name").innerHTML=player2+":";

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("playerq").innerHTML="question turn: "+player1;
document.getElementById("playera").innerHTML="answer turn: "+player2;

function send() {
   no1=document.getElementById("no1").value;
   no2=document.getElementById("no2").value;
   answer=parseInt(no1)*parseInt(no2);

   questionnumber="<h4>" + no1 + " X "+ no2 +"</h4>";
   inputbox="<br>Answer : <input type='text' id='input_check_box'>";
   checkbutton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   row=questionnumber+inputbox+checkbutton;
   document.getElementById("output").innerHTML=row;
   document.getElementById("no1").value="";
   document.getElementById("no2").value="";
}

qturn="player1";
aturn="player2";

function check() {
    game=document.getElementById("input_check_box").value;

    if(game=answer){
    if(aturn=="player1"){
        player1score=player1score+1;
        document.getElementById("player1score").innerHTML=player1score;  
    }
    else {
        player2score=player2score+1;
        document.getElementById("player2score").innerHTML=player2score;  
    }
    }
    if (qturn=="player1") {
        qturn="player2";
        document.getElementById("playerq").innerHTML="Question turn - "+player2;
    }
    else{
        qturn="player1";
        document.getElementById("playerq").innerHTML="Question turn - "+player1;
    }

    if (aturn=="player1") {
        aturn="player2";
        document.getElementById("playera").innerHTML="Answer turn - "+player2;
    }
    else{
        aturn="player1";
        document.getElementById("playera").innerHTML="Answer turn - "+player1;
    }
}