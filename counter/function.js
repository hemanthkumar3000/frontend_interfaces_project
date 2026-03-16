let counterElemnt=document.getElementById("counterValue");
function onIncrement(){
let prevoiusElemnet=counterElemnt.textContent;

let updatedvalue=parseInt(prevoiusElemnet)+1;
counterElemnt.textContent=updatedvalue;
if (updatedvalue>0){
    counterElemnt.style.color="green"

}
else if(updatedvalue<0){
    counterElemnt.style.color="red"
}
else{
    counterElemnt.style.color="black"
}
}
function onDecrement(){
    let prevoiusElemnet=counterElemnt.textContent;

let updatedvalue=parseInt(prevoiusElemnet)-1;
counterElemnt.textContent=updatedvalue;
if (updatedvalue>0){
    counterElemnt.style.color="green"

}
else if(updatedvalue<0){
    counterElemnt.style.color="red"
}
else{
    counterElemnt.style.color="black"
}

    
}
function onReset(){
    let updatedvalue=0;
counterElemnt.textContent=updatedvalue;

    counterElemnt.style.color="black"


    
}


