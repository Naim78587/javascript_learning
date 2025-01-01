var i;
var n;
var cnt=0;
n=parseInt(prompt("How many times you want to print: "));
for(i=1;i<=n;i++){
    document.write("<h3>Bangladesh</h3>");
}

if (n <= 1) {
    document.write("Not a prime number");
} 
else {
    for (i = 1; i <= n; i++) {
        if (n % i === 0) 
            cnt++;
    }
    if (cnt === 2)
        document.write("Prime number");
    else
        document.write("Not a prime number");
}