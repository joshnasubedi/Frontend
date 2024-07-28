let numbers= document.querySelector(".numbers");
let result= document.querySelector(".display");
let show= "";

function appendNumber(value){
show+= value;
result.innerHTML= show;
console.log(show);
};

 function clearDisplay(){
    show='0';
    result.innerHTML= show;
    console.log(show);
 };     

// function calculate(){
//   var show= document.querySelector(".display").value;
//   document.querySelector(".display").value= eval(show);
// }

function calculate() {
    try {
        show = eval(show).toString();  //eval le string linxa and covert to js ko expression mai
        result.innerHTML = show;//tostring le expression lai again coverts to string ani show the number as a string
    } catch (error) {
        result.innerHTML = "Error";
        show = "";
    }
};
 