let Gamesque =[];
let Usersque =[];
let body = document.querySelector("body");

let stared = false;
let level = 0;

let btns=[ "red" , "yellow" , "green" , "purple" ];

document.addEventListener("keypress" ,function(){
    // console.log("key pressed");
    if(stared == false){
        console.log("game started");
        stared=true;
        levelup();
    }
});
// document.addEventListener("click" ,function(){
//     // console.log("key pressed");
//     if(stared == false){
//         console.log("game started");
//         stared=true;
//         levelup();
//     }
// });



let h2 = document.querySelector("h2");


function levelup(){
    Usersque =[];
    level++;
    h2.innerText = "level " + level;

    let randomind = Math.floor(Math.random() * 3);
    let randomcolor= btns[randomind];
    let randombtn1= document.querySelector(`.${randomcolor}`);
    // console.log("everyting is working");
    Gamesque.push(randomcolor);
    console.log(Gamesque);  
    console.log(randomind);
    console.log(randomcolor);
    console.log(randombtn1);
    btnFlash(randombtn1);

};


// let index = level -1;
// if(Usersque[index] === Gamesque[index]){
//     console.log("success");
// }else{
//     h2.innerText = "game over , press any key to restart";
// }
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 900);
};

function checkans() {
    let index = Usersque.length - 1;

    if (Usersque[index] === Gamesque[index]) {
        // correct click
        if (Usersque.length === Gamesque.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your Score is <b>${level}</b><br>Press any key to restart`;
        body.classList.add("body");

        setTimeout(function () {
            body.classList.remove("body");
        }, 900);

        restartgame();
    }
}

// function checkans(ind){
//     console.log("current level" , level);
//     let index = Usersque.length - 1;

//   if(Usersque[index] === Gamesque[index]){
//     if(Usersque.length === Gamesque.length){
//         setTimeout(levelup, 1000);
//      }
//     }else{
//     h2.innerText = `Game over ! Your Score is <b> ${level} </b> <br> Press any key to restart`;
//     restartgame();
//     body.classList.add("body");
//     setTimeout(function(){
//         body.classList.remove("body");
//     }, 900);
// };
// }

let allbtn = document.querySelectorAll(".st");
for(allbtns of allbtn){
    allbtns.addEventListener("click" , function() {
        let clickbtn = this;
        btnFlash(clickbtn);
         let usercolor = clickbtn.getAttribute("id");
          console.log(usercolor);
            Usersque.push(usercolor);
            checkans(Usersque.length - 1);
        
    });};
    function restartgame(){
        level = 0;
        Gamesque =[];
        Usersque=[];
        stared = false;
    };


