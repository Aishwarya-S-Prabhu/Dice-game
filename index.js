var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var flag1=0;
var flag2=0;
console.log("flag1 before:"+flag1);
console.log("flag2 before:"+flag2);

document.querySelector("button").addEventListener("click",function(){
    document.querySelector("h1").innerText="Player 1's Turn" ;
    document.querySelector(".img1").addEventListener("click",function(){
        flag1=1;
        console.log("flag1 after:"+flag1);
        console.log("flag2 after:"+flag2);
        check();
        document.querySelector(".img1").setAttribute('src',"./images/dice"+randomNumber1+".png");
        document.querySelector("h1").innerText="Player 2's Turn" ;
    });
    
    document.querySelector(".img2").addEventListener("click",function(){
        document.querySelector("h1").innerText="Player 2's Turn" ;
        flag2=1;
        check();
        console.log("flag2 after:"+flag2);
        console.log("flag1after"+flag1);
        document.querySelector(".img2").setAttribute('src',"./images/dice"+randomNumber2+".png");
    });
    
    
});
function check(){
if(flag1==1 && flag2==1)
    {
        console.log("outer if");
    if(randomNumber1>randomNumber2)
        document.querySelector("h1").innerText="Player 1 wins" ;
    else if(randomNumber1<randomNumber2)
        document.querySelector("h1").innerText="Player 2 wins" ;
    else
        document.querySelector("h1").innerText="Draw";
    }
else{
        console.log("outer else");
    }
}

// document.querySelector(".img1").setAttribute
// ('src',"./images/dice"+randomNumber1+".png");

// document.querySelector(".img2").setAttribute
// ('src',"./images/dice"+randomNumber2+".png");

// var flag1=0;
// var flag2=0;
// console.log(flag1);
// var image1 = document.querySelector("img1");
// image1.onclick = function(e) {
//   flag1=1;
//   console.log(flag1);
// }
// var image2 = document.querySelector("img2");
// image2.onclick = function(e) {
//   flag2=1;
// }
