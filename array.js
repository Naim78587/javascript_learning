/*var arr =new Array(5);
arr[0]="Naim";
arr[1]="Jhon";
arr[2]="Doe";
arr[3]="Alex";
arr[4]="Eda";*/
var arr =["Naim","Emon","Jhon","Alex"];
arr.push("Bob");
//arr.pop();
for(var i=0;i<arr.length;i++){
    document.write(arr[i]+"<br>");
}
document.write("Array Size: "+arr.length);
var num=new Array();
for(var i=0;i<=4;i++){
    num[i]=parseInt(prompt("Enter 5 numbers: "));
}
for(var j=0;j<=4;j++){
    document.write(num[j]+"<br>");
}