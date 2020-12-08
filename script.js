let kenny = document.getElementById("kenny");
let mortDeKenny =0;

    //deplacer kenny vers le haut

document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(kenny.style.top);
    if(t > 0){
        t = t - 10;
        kenny.style.top = t + 'px';
    }
});
    //deplacer kenny vers la gauche

document.getElementById("left").addEventListener("click", function (){
    let t = parseInt(kenny.style.left);
    if(t > 0){
        t = t - 10;
        kenny.style.left = t + "px";
    }

});
    //deplacer kenny vers la droite

document.getElementById("right").addEventListener("click", function (){
    let t = parseInt(kenny.style.left);
    if(t < 470){
        t = t + 10;
        kenny.style.left = t + "px";
    }
});
    //deplacer kenny vers le bas

document.getElementById("down").addEventListener("click", function (){
    let t = parseInt(kenny.style.top);
    if(t < 470){
        t = t + 10;
        kenny.style.top = t + "px";
    }
})
    //creation de la zone rouge 1

let zoneRouge1 =document.createElement("div");
zoneRouge1.style.width = "50px";
zoneRouge1.style.height ="500px";
zoneRouge1.style.backgroundColor = "red";
    //ajout de la zone rouge 1
document.getElementById("viewport").append(zoneRouge1);

    //creation de la zone rouge 2

let zonerouge2 = document.createElement("div");
zonerouge2.style.width = "50px";
zonerouge2.style.height ="500px";
zonerouge2.style.backgroundColor = "red";
zonerouge2.style.marginLeft = "450px";
zonerouge2.style.marginTop = "-500px";

    //ajout de la zone rouge 2
document.getElementById("viewport").append(zonerouge2);


    //limite de la zone rouge qui tueras kenny

document.getElementById("left").addEventListener('click',function (){
    let t2 = parseInt(kenny.style.left);
    if(t2 < 50) {
        kenny.style.left = 200 + "px";
        kenny.style.top = 200 + "px";
        alert("kenny est mort ");
        mortDeKenny ++;
        dead.innerHTML = "kenny est mort " + mortDeKenny + "fois";

    }
});
document.getElementById("right").addEventListener('click',function () {
    let t2 = parseInt(kenny.style.left);
    if (t2 > 420) {
        kenny.style.left = 200 + "px";
        kenny.style.top = 200 + "px";
        alert("kenny est mort ");
        mortDeKenny ++;
        dead.innerHTML = "kenny est mort " + mortDeKenny + "fois";

    }
});
let dead = document.getElementById("deadKenny");
dead.innerHTML = "kenny est mort " + mortDeKenny + "fois";



//deplacement par les touches
let body = document.body;
body.addEventListener("keydown", function (event){
    if(event.key === "ArrowUp"){
        let t =parseInt(kenny.style.top);
        if(t > 0){
            t = t - 10;
            kenny.style.top = t + 'px';
        }
    }
})
body.addEventListener("keydown", function (event){
    if(event.key === "ArrowDown"){
        let t =parseInt(kenny.style.top);
        if(t < 470){
            t = t + 10;
            kenny.style.top = t + 'px';
        }
    }
})
body.addEventListener("keydown", function (event){
    if(event.key === "ArrowLeft"){
        let t =parseInt(kenny.style.left);
        if(t > 0){
            t = t - 10;
            kenny.style.left = t + 'px';
        }
        if(t < 50) {
            kenny.style.left = 200 + "px";
            kenny.style.top = 200 + "px";
            alert("kenny est mort ");
            mortDeKenny ++;
            dead.innerHTML = "kenny est mort " + mortDeKenny + "fois";

        }
    }
})
body.addEventListener("keydown", function (event){
    if(event.key === "ArrowRight"){
        let t =parseInt(kenny.style.left);
        if(t < 470){
            t = t + 10;
            kenny.style.left = t + 'px';
        }
        if(t > 420) {
            kenny.style.left = 200 + "px";
            kenny.style.top = 200 + "px";
            alert("kenny est mort ");
            mortDeKenny ++;
            dead.innerHTML = "kenny est mort " + mortDeKenny + "fois";

        }
    }
})
















