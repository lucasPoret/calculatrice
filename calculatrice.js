function Write(x) {
    document.getElementById("calcul").innerText += x;
}

function Clear() {
    document.getElementById("calcul").innerText = "";
}

function Erase() {
    document.getElementById("calcul").innerText = document.getElementById("calcul").innerText.slice(0, -1);
}

function Calculate(){
    try{
        result=eval(document.getElementById("calcul").innerText);
        console.log(result)
        document.getElementById("prevCalc").innerText=document.getElementById("calcul").innerText;
        document.getElementById("resultat").innerText=result;
        document.getElementById("equal").innerText="=";
        Clear();
    } catch(e){
        if (e instanceof SyntaxError){
         document.getElementById("resultat").innerText="SyntaxError";
         document.getElementById("prevCalc").innerText="";
         document.getElementById("equal").innerText="";
    
        }
    }
}