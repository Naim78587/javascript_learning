var text=document.getElementById("heading1");
text.innerHTML="Lets Go!";
var p=document.getElementById("para");
p.innerHTML="Bye!";
var p2=document.querySelector("#p2");
p2.innerHTML="Using innerhtml";
document.querySelector("ul li a").innerHTML="Home Changed";
document.querySelector("ul ul li a").innerHTML="Tutorial Changed";

function myClick(){
    alert('The process has been canceled');
}
function btn1(){
    var b1=document.querySelector("#bp");
    b1.innerHTML= "You have clicked button 1";
}
function btn2(){
    var b2=document.querySelector("#bp");
    b2.innerHTML= "You have clicked button 2";
}
function meme1(){
    var img=document.querySelector("#meme");
    img.src="images/img1.png";
}
function meme2(){
    var img1=document.querySelector("#meme");
    img1.src="images/img2.jpg";
}
var p4=document.querySelector("#s_id");
p4.style.color="red";
p4.style.textDecoration="underline";
p4.style.fontSize="1.5rem"; 

//creating element using js
var d3=document.createElement("h1");
var text=document.createTextNode("How Are You!");
d3.appendChild(text);
var myDiv=document.getElementsByClassName("div3")[0];
myDiv.appendChild(d3);
var byeElement = myDiv.getElementsByTagName("h1")[1];
myDiv.insertBefore(d3, byeElement);

//removing element
var remove=document.getElementsByTagName("h1")[2];
myDiv.removeChild(remove);

//