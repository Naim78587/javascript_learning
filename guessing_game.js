var win=0;
var lost=0;
for(var i=1;i<=5;i++){
    var number=parseInt(prompt("Enter a number between 1 to 5: "));
    var random=Math.floor(Math.random()*5)+1;
    if(number===random){
        document.write("Congratulations! You won"+"<br>");
        win++;
    }
    else{
        document.write("You lost! The number was "+random+"<br>");
        lost++;
    }
}
document.write("Win: "+win+"  "+"Lost: "+lost);
