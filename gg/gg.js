var b=100;
var a=1;

var r_100=(b-a) * Math.random();
r_100= Math.floor(r_100);
var user;

function guess(){
    let count;
    user= document.getElementById("num").value;
    console.log(user);
    if(r_100>user){
        alert("You should guess more number");
        count=count+1;
    }
    else if(r_100<user){
        alert("You should guess less number");
        count++;
    }
    else if(r_100==user){
        alert("Your guess is right");
        count++;
        console.log(count);
        document.getElementById("try").innerHTML=`you have tried ${count} times`;
    }
}



