let kenny = document.getElementById("kenny");
let mortDeKenny =0;

document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(kenny.style.top);
    if(t > 0){
        t = t - 10;
        kenny.style.top = t + 'px';
    }
});

document.getElementById("left").addEventListener("click", function (){
    let t = parseInt(kenny.style.left);
    if(t > 0){
        t = t - 10;
        kenny.style.left = t + "px";
    }
});

document.getElementById("right").addEventListener("click", function (){
    let t = parseInt(kenny.style.left);
    if(t < 470){
        t = t + 10;
        kenny.style.left = t + "px";
    }
});

document.getElementById("down").addEventListener("click", function (){
    let t = parseInt(kenny.style.top);
    if(t < 470){
        t = t + 10;
        kenny.style.top = t + "px";
    }
})
let wiew = document.getElementById("viewport");

let zoneRouge =document.createElement("div");
zoneRouge.style.width = "50px";
zoneRouge.style.height ="50px";
zoneRouge.style.backgroundColor = "red";

wiew.append(zoneRouge);


document.querySelector("#up,#left").addEventListener('click',function (){
    let t1 = parseInt(kenny.style.top);
    let t2 = parseInt(kenny.style.left);
    if(t1 < 50 && t2 < 50){
        alert("kenny est mort ");
        mortDeKenny +=1;
        return mortDeKenny;
    }
})

let dead = document.getElementById("deadKenny");
dead.innerHTML = dead.innerHTML +  "kenny est mort " + mortDeKenny + " fois";





