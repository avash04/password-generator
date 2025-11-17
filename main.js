function passwordGenerator(includeLength,includeLower,includeUpper,includeSymbol){
    Lower= "abcdefghijklmnopqrstuvwxyz";
   Upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    Symbol="~`!@#$%^&*()_/";

    let allowedChar="";
    let password="";

    allowedChar+=includeLower?Lower:"";
    allowedChar+=includeUpper?Upper:"";
    allowedChar+=includeSymbol?Symbol:"";

    if(includeLength<1){
        return'(please select a password of minimum character)'
    }
    if(allowedChar.length===0){
         return'(please select a password of minimum character)'
    }

    for(let i=0;i<includeLength;i++){
        const random=Math.floor(Math.random()* allowedChar.length);
        password+=allowedChar[random];
    }
   return password;
    
}
const btn=document.getElementById("submit");
const heading=document.getElementById("topText");
const para=document.getElementById("result");

btn.onclick=function(){
const includeLength=12;
const includeLower=true;
const includeUpper=true;
const includeSymbol=true;

const password=passwordGenerator(includeLength,includeLower,includeUpper,includeSymbol);
heading.textContent="YOUR GENERATED PASSWORD IS:";
para.textContent=password;
para.style.color="blue";
para.style.textAlign="center";
heading.style.textAlign="center";

}
