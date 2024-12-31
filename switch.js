var num=prompt("Enter your score: ");
num=parseInt(num);
switch(num){
    case(num>=90 && num<=100):
        console.log("A");
        break;
    case(num>=86 && num<=89):
        console.log("A-");
        break;
    case(num>=82 && num<=85):
        console.log("B+");
        break;
    case(num>=78 && num<=81):
        console.log("B");
        break;
    case(num>=74 && num<=77):
        console.log("B-");
        break;
    case(num>=70 && num<=73):
        console.log("C+");
        break;
    case(num>=66 && num<=69):
        console.log("C");
        break;
    case(num>=62 && num<=65):
        console.log("C-");
        break;
    case(num>=58 && num<=61):
        console.log("D+");
        break;
    case(num>=55 && num<=57):
        console.log("D");
        break;
    case(num>=0 && num<=54):
        console.log("F");
        break;
    default:
        console.log("Not a valid score");
        break;
}