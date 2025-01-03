/*var nameAge=[["Naim",24],["Jhon",25],["Alex",30],["Tom",22],["Sam",41]];
for(var i=0;i<5;i++){
    for(var j=0;j<2;j++){
        document.write(nameAge[i][j]+" ");
    }
    document.write("<br>");
}*/

//task 9
function highestRunScorer(score){
    var highest=score[0][1];
    for(var i=0;i<5;i++){
        for(var j=0;j<2;j++){
            if(score[i][j]>highest)
                //highest=score[i][j];//for returning highest score
                highest=score[i][0];//for returning highest scorer 
        }
    }
    return highest;
}
var ScoreBoard=[["Tamim",57],["Liton",42],["Shakib",20],["Mushfiq",96],["Mahmudullah",56]];
var name=highestRunScorer(ScoreBoard);
document.write(name);