
let count=0;
let plusbtn= document.getElementById("plus");
let minusbtn= document.getElementById("minus");
let reset= document.getElementById("resetbtn")
plusbtn.addEventListener("click",()=>
{

    count++;
    console.log(count);
   document.getElementById("displaynum").value= count;
});
minusbtn.addEventListener("click",()=>{
    count--;
    document.getElementById("displaynum").value= count;
});
reset.addEventListener("click",()=>{
    count=0;
    document.getElementById("displaynum").value= count;
})