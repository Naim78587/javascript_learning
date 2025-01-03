var arr=new Array();
for(var i=0;i<=4;i++){
    arr[i]=parseInt(prompt("Enter 5 numbers: "));
}
for(var i=0;i<arr.length;i++){
    document.write(arr[i]+" ");
}
document.write("<br>");
//arr.pop();
//arr.shift();
//arr.push(11);
//arr.unshift(9);
//arr.splice(2,0,8);
//arr.splice(0,2);
//var arr1=arr.slice(2,4);
arr.sort();
arr.reverse();
for(var i=0;i<arr.length;i++){
    document.write(arr[i]+" ");
}