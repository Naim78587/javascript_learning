// create a function called highestScore that will weceive a 1D array and will return the highest score 
function highestScore(arr){
 var max=arr[0];
 for(var i=1;i<arr.length;i++){
    if(arr[i]>max)
        max=arr[i];
 }
 return max;
}
var score=[10,5,24,19,2];
var res=highestScore(score);
document.write(res);