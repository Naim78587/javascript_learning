function addStyle(){
    var para =document.querySelector("p");
    /* lengthy process
    para.style.color="Red";
    para.style.fontSize="2.5rem";
    para.style.fontWeight="bold";
    para.style.fontStyle="italic";
    */
   para.classList.add("para-style");
}
function removeStyle(){
    var para =document.querySelector("p");
    para.classList.remove("para-style");
}
var eventButton=document.querySelector("#b3");
eventButton.addEventListener("click",eventFunnction);
function eventFunnction(){
    alert("You Just Clicked the Button!1");
}
var eventheading=document.querySelector("h1");
eventheading.addEventListener("mouseover",function(){
    eventheading.classList.add("heading-style");
});
eventheading.addEventListener("mouseout",function(){
    eventheading.classList.remove("heading-style");
});



//button click problem
/*var a=document.querySelectorAll(".mybtn")[0];
a.addEventListener("click",function(){
    var text=this.innerHTML;
    document.querySelector(".para").innerHTML= text+" Is clicked";
});

var b=document.querySelectorAll(".mybtn")[1];
b.addEventListener("click",function(){
    var text=this.innerHTML;
    document.querySelector(".para").innerHTML= text+" Is clicked";
});

var c=document.querySelectorAll(".mybtn")[2];
c.addEventListener("click",function(){
    var text=this.innerHTML;
    document.querySelector(".para").innerHTML= text+" Is clicked";
});*/

//easy way
for(var i=0;i<=2;i++){
    var a=document.querySelectorAll(".mybtn")[i];
a.addEventListener("click",function(){
    var text=this.innerHTML;
    document.querySelector(".para").innerHTML= text+" Is clicked";
});
}

for(var i=0;i<=2;i++){
    document.querySelectorAll(".audiobtn")[i].addEventListener("click",function (){
        var text=this.innerHTML.toLowerCase();
        switch(text){
            case "a":
                var audio=new Audio("audio/a.mp3");
                audio.play();
                break;

            case "b":
                var audio=new Audio("audio/b.mp3");
                audio.play();
                break;

            case "c":
                var audio=new Audio("audio/c.mp3");
                audio.play();
                break;
        }
    });
}

document.addEventListener("keypress",function(event){
    var text=event.key;
    playAnimation(text)
});


for(var i=0;i<=2;i++){
    document.querySelectorAll(".animation")[i].addEventListener("click",function (){
        var text=this.classList[1];
        playAnimation(text);
    });
}
function playAnimation(text){
    var button=document.querySelector("."+text);
    button.classList.add("anim");

    setTimeout(function(){
        button.classList.remove("anim");
    },1000);
}


//keybad paragraph
document.addEventListener("keypress",function(event){
    var text=event.key;
    document.querySelector(".p").innerHTML="You have pressed: "+text;
});