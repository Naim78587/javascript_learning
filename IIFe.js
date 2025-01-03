//IIFE -> immediate invokeable function expression
(function add(a,b){
    var sum=a+b;
    document.write(sum);
})(10,15);

//function expression
var display =function displayMessage(msg){
    document.write(msg);
}
document.write("<br>");
display("I am Naim Ahmed");