// alert("hello");

// to get the click do task 
// in html select and add event listner to it and call this function

// document.querySelector("button").addEventListener("click",handleClick);


// document.querySelector("button").addEventListener("click",handleClick());
// not this (will trigger function on the line itself)
// passing input as function to be called later

// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//     alert("Button Clicked");
// }

// Anonamus function

// with defination in the selector

// document.querySelector("button").addEventListener("click",function (){
//     alert("button clicked");
// });

// together select

// document.querySelectorAll("button");
// document.querySelectorAll("button")[0].addEventListener("click",handleClick);
// document.querySelectorAll("button")[1].addEventListener("click",handleClick);
// document.querySelectorAll("button")[2].addEventListener("click",handleClick);
// document.querySelectorAll("button")[3].addEventListener("click",handleClick);
// document.querySelectorAll("button")[4].addEventListener("click",handleClick);
// document.querySelectorAll("button")[5].addEventListener("click",handleClick);
// document.querySelectorAll("button")[6].addEventListener("click",handleClick);

// function handleClick(){
//     alert("Clicked button");
// }

// for(var i = 0; i < 7;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// }
// function handleClick(){
//     alert("Clicked button");
// }

// var number = document.querySelectorAll(".drum").length;
// function handleClick(){
//     alert("Clicked button");
// }
// for(var i = 0; i < number;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// }


// Adding Auido To Website

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

// This creates an html audio object

// var number = document.querySelectorAll(".drum").length;
// function handleClick(){
//     // var audio = new Audio("sounds/tom-1.mp3");
//     // audio.play();

//     // console.log(this);
//     console.log(this.innerHTML);
//     this.style.color = "white";

// }


// for(var i = 0; i < number;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// }

// var number = document.querySelectorAll(".drum").length;

// function handleClick(){
//     var buttonInnerHTML = this.innerHTML;

//     switch(buttonInnerHTML){
//         case "w" : 
//             var tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();
//             break;
//         case "a" :
//             var tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play();
//             break;
//         case "s" :
//             var tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play();
//             break;
//         case "d" : 
//             var tom4 = new Audio("sounds/tom-4.mp3");
//             tom4.play();
//             break;
//         case "j" :
//             var crash = new Audio("sounds/crash.mp3");
//             crash.play();
//             break;
//         case "k" :
//             var kick = new Audio("sounds/kick-bass.mp3");
//             kick.play();
//             break;
//         case "l" :
//             var snare = new Audio("sounds/snare.mp3");
//             snare.play();
//             break;
//         default : console.log(buttonInnerHTML);
//     }
// }


// for(var i = 0; i < number;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// }


// function BellBoy(name,age,roll){
//     this.name = name;
//     this.age = age;
//     this.roll = roll;
// }

// var bellBoy1 = new BellBoy("satish",23,1);


// Method 
        // function cllled with an Object

// function BellBoy(name,age,roll){
//     this.name = name;
//     this.age = age;
//     this.roll = roll;
//     this.clean = function(){
//         alert("clean called");
//     }
// }

// var bellBoy1 = new BellBoy("satish",23,1);
// bellBoy1.clean();


// function makeSound(key){
//     alert("key pressed " + key);
// }

// event.key   gives the keyboard action which key is pressed 

// document.addEventListener("keydown",function(event){
//     makeSound(event.key);
// })

// for(var i = 0; i < number;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// }


//  Detect button press

var number = document.querySelectorAll(".drum").length;
for(var i = 0; i < number;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML); 
    buttonAnimation(buttonInnerHTML);

}

//  detect Key Press  --  event.key   gives the keyboard action which key is pressed 

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    
})

function makeSound(key){
    switch(key){
        case "w" : 
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s" :
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d" : 
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j" :
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k" :
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l" :
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default : console.log(buttonInnerHTML);
    }
}   

//Animation funaction

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("."+currentkey);
    // console.log(activeButton);
    // document.querySelector("."+currentkey).classList;
    activeButton.classList.add("pressed");

    // setTimeout(function toPerform(){}, delayTime)

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },110)

}




