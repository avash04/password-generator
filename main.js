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

const includeLength=12;
const includeLower=true;
const includeUpper=true;
const includeSymbol=true;

const password=passwordGenerator(includeLength,includeLower,includeUpper,includeSymbol);
console.log(`Generated password:${password}`);