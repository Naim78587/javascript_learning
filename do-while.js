var i=1;
var sum=0;
var n=parseInt(prompt("Enter the last digit"));
do{
    sum=sum+i*i;
    i++;
}while(i<=n);
document.write("Summation is "+sum);
