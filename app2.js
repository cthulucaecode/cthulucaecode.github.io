 let h3 = document.querySelector("h3");
 document.body.style.backgroundColor = "blue"; 
    document.body.style.color = "magenta";
         document.body.innerHTML = "<h3>THE SELECTION</h3>"; 
            document.body.style.fontFamily = "Comic Sans MS";
                document.body.style.fontSize = "50px";
                    document.body.style.textAlign = "center";
document.body.innerHTML += "<button> <-back </button>";
    let button = document.querySelector("button");
        button.style.position = "absolute";
            button.style.transform = "translate(-580px, -150px)";
              button.style.backgroundColor = "black";
               button.style.color = "blue"; 
let btnclick=document.querySelector("button");
btnclick.addEventListener("click",() => {
window.location.href = "index.html";
})

window.addEventListener('scroll',()=>{
    let scrollposition = window.scrollY;    
})