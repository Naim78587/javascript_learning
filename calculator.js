var num1=prompt("Enter f1rst number: ");
var num2=prompt("Enter second number: ");
num1=parseFloat(num1,10);
num2=parseFloat(num2,10);
var sum,sub,mul,div;
sum=num1+num2;
document.write(num1+"+"+num2+"= "+sum+"<br>");
sub=num1-num2;
document.write(num1+"-"+num2+"= "+sub+"<br>");
mul=num1*num2;
document.write(num1+"X"+num2+"= "+mul+"<br>");
div=num1/num2;
document.write(num1+"/"+num2+"= "+div+"<br>");