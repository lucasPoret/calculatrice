

class Calculatrice{
    constructor(){
        this.list=[];
        this.limit=10;
    }

    Write(x) {
        if(document.getElementById("calcul").innerText==="" && this.list.length!==0){
            document.getElementById("calcul").innerText=this.list;
            document.getElementById("calcul").innerText += x;
            document.getElementById("resultat").innerText="";
            document.getElementById("prevCalc").innerText="";
            document.getElementById("equal").innerText="";
        }
        else{
            document.getElementById("calcul").innerText += x;
        }
    }

    Clear() {
        if(document.getElementById("boutonC").innerText==="CA"){
            document.getElementById("boutonC").innerText="C";
            document.getElementById("resultat").innerText="";
            document.getElementById("prevCalc").innerText="";
            document.getElementById("equal").innerText="";
            document.getElementById("calcul").innerText="";
            document.getElementById("boutonC").innerText="C";
            this.list=[];
        } 
        else{
        document.getElementById("calcul").innerText = "";
        }
    }

    Erase() {
        if(document.getElementById("calcul").innerText==="" && this.list.length!==0){
            document.getElementById("calcul").innerText=this.list;
            document.getElementById("calcul").innerText = document.getElementById("calcul").innerText.slice(0, -1);
            document.getElementById("resultat").innerText="";
            document.getElementById("prevCalc").innerText="";
            document.getElementById("equal").innerText="";
        }
        else{
            document.getElementById("calcul").innerText = document.getElementById("calcul").innerText.slice(0, -1);
    
        }
    }

    Calculate(){
        try{
            this.result=eval(document.getElementById("calcul").innerText);
            console.log(this.result)
            document.getElementById("prevCalc").innerText=document.getElementById("calcul").innerText;
            document.getElementById("resultat").innerText=this.result;
            document.getElementById("equal").innerText="=";
            this.list[0]=( document.getElementById("prevCalc").innerText=document.getElementById("calcul").innerText);
            document.getElementById("calcul").innerText = "";
            document.getElementById("boutonC").innerText="CA";
        } catch(e){
            if (e instanceof SyntaxError){
             document.getElementById("resultat").innerText="SyntaxError";
             document.getElementById("prevCalc").innerText="";
             document.getElementById("equal").innerText="";
        
            }
        }
    }

}

let calculatrice = new Calculatrice();