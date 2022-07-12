let key = document.getElementsByClassName("key");
const output = document.getElementById("output");
const clear = document.getElementById("clear");
const delet = document.getElementById("delete");
const equals = document.getElementById("equals");
const logButton = document.getElementById("logButton");
const cosButton = document.getElementById("cosButton");
const senButton = document.getElementById("senButton");
const raizButton = document.getElementById("raizButton");
const factButton = document.getElementById("factButton");
const piButton = document.getElementById("piButton");
const eButton = document.getElementById("eButton");
const exponencial = document.getElementById("exponencial");
const more = document.getElementById("more");
const moreButton = document.getElementById("moreButton");
const copied = document.getElementById("copied");
var toggle = true;

var Ans = 0;


// var log = function(number){return Math.log(number);}
var log = number => Math.log(number);
var cos = number => Math.cos(number);
var sen = number => Math.sin(number);
var raiz_2 = number => Math.sqrt(number); 
const e = Math.E;
const pi = Math.PI;
var fact = function(number){
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
}
    return fact
}

var errorMessage = function(output){
    if(output.value == "Error" || output.value == "function Error() { [native code] }" || output.value == "NaN" || output.value == "undefined" || output.value == "-Infinity" || output.value == "Infinity"){
        output.value="";
    }else{}
}

for(let i=0; i<key.length;i++){

    key[i].addEventListener("click", function(){
        errorMessage(output);

        output.value += key[i].value;


    })
}

clear.addEventListener("click", function(){
    output.value="";
})

delet.addEventListener("click",function(){
    output.value=output.value.substring(0,output.value.length*1-1);
})

equals.addEventListener("click",function(){

    output.value=errorSearch(output.value);
    // errorMessage(output);
    Ans = parseFloat(errorSearch(output.value));


    function errorSearch(valuee){
            let resultado = "Error"

        try {
            resultado = eval(valuee)
            return resultado;
        } catch (error) {
            resultado = "Error";
          
            return resultado;
          
        }
    }
})

output.addEventListener("click",function(){
    var copyText = output;

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  copied.classList.add("visible");
  setTimeout(() => {
    copied.classList.remove("visible");
  }, 2000);

})
exponencial.addEventListener("click",function(){
    errorMessage(output);

    output.value+="**"
})
logButton.addEventListener("click",function(){
    errorMessage(output);

    output.value+="log(";
})
cosButton.addEventListener("click",function(){
    errorMessage(output);

    output.value+="cos(";
})
senButton.addEventListener("click",function(){
    errorMessage(output);

    output.value+="sen(";
})
raizButton.addEventListener("click",function(){
    errorMessage(output);

    output.value+="raiz_2(";
})
factButton.addEventListener("click",function(){
    errorMessage(output);

    output.value+="fact(";
})
piButton.addEventListener("click",function(){
    errorMessage(output);

    output.value+="pi";
})
eButton.addEventListener("click",function(){
    errorMessage(output);

    output.value+="e";
})

moreButton.addEventListener("click", function(){
    if(toggle){
        more.style = "transform: translateX(150px);"
        moreButton.innerHTML=`<ion-icon name="arrow-dropleft"></ion-icon>`
        toggle=!toggle;
    } else {
        more.style = "transform: translateX(0px);"
        moreButton.innerHTML=`<ion-icon name="arrow-dropright"></ion-icon>`

        toggle=!toggle;
    }
    
})

