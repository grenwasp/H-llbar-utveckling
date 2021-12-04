function  check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    
    if(q1!="Javascript") {document.getElementById("f1").innerHTML="Fel"}
    else{c++;document.getElementById("f1").innerHTML="Rätt"}
    if(q2!="Russia") {document.getElementById("f2").innerHTML="Fel"}
    else{c++;document.getElementById("f2").innerHTML="Rätt"}
    if(q3!="Beijing") {document.getElementById("f3").innerHTML="Fel"}
    else{c++;document.getElementById("f3").innerHTML="Rätt"}
    if(q4!="Stockholm") {document.getElementById("f4").innerHTML="Fel"}
    else{c++;document.getElementById("f4").innerHTML="Rätt"}
    if(q5!="The_Moon") {document.getElementById("f5").innerHTML="Fel"}
    else{c++;document.getElementById("f5").innerHTML="Rätt"}
    if(q6!="Coronavirus") {document.getElementById("f6").innerHTML="Fel"}
    else{c++;document.getElementById("f6").innerHTML="Rätt"}
    if(q7!="x") {document.getElementById("f7").innerHTML="Fel"}
    else{c++;document.getElementById("f7").innerHTML="Rätt"}
    if(q8!="Draco Malfoy") {document.getElementById("f8").innerHTML="Fel"}
    else{c++;document.getElementById("f8").innerHTML="Rätt"}
    
    document.getElementById("resultat").innerHTML = "Resultat : " + c + " av 8 Rätt";
    
    
    
    }
