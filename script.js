const refresh =
document.getElementById("refresh");


const first =
document.getElementById("firstScreen");


const love =
document.getElementById("loveScreen");



refresh.onclick=()=>{

first.style.opacity="0";


setTimeout(()=>{

first.classList.add("hidden");

love.classList.remove("hidden");


},500);

};





const no =
document.getElementById("no");


const yes =
document.getElementById("yes");


const heart =
document.getElementById("heart");


let tries=0;



function moveNo(){


let x =
Math.random()*(window.innerWidth-150);


let y =
Math.random()*(window.innerHeight-100);



no.style.left=x+"px";

no.style.top=y+"px";



tries++;



document.body.style.background =
`linear-gradient(135deg,
hsl(${Math.random()*360},70%,50%),
white)`;



if(tries>=2){

heart.innerHTML="😭";

}

}




no.addEventListener(
"mouseenter",
moveNo
);


no.onclick=moveNo;





yes.onclick = () => {

  no.style.display = "none";
  yes.style.display = "none";

  document.querySelector("#loveScreen h2").innerText =
  "OMG I CAN'T BELIEVE IT...😐";

  document.getElementById("final").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.volume = 0.2;
  music.load();
  music.play().catch(err => console.log(err));

  makeConfetti();
};





function makeConfetti(){


for(let i=0;i<100;i++){


let c=document.createElement("div");


c.className="confetti";


c.style.left =
Math.random()*100+"vw";



c.style.background =
"hsl("+Math.random()*360+",80%,60%)";



document.body.appendChild(c);



setTimeout(()=>{

c.remove();

},5000);


}


}