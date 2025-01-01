var num = prompt("Enter your score: ");
num = parseInt(num);

if (num >= 90 && num <= 100) {
    document.write("A");
} 
else if (num >= 86 && num <= 89) {
    document.write("A-");
} 
else if (num >= 82 && num <= 85) {
    document.write("B+");
} 
else if (num >= 78 && num <= 81) {
    document.write("B");
} 
else if (num >= 74 && num <= 77) {
    document.write("B-");
} 
else if (num >= 70 && num <= 73) {
    document.write("C+");
} 
else if (num >= 66 && num <= 69) {
    document.write("C");
} 
else if (num >= 62 && num <= 65) {
    document.write("C-");
} 
else if (num >= 58 && num <= 61) {
    document.write("D+");
} 
else if (num >= 55 && num <= 57) {
    document.write("D");
} 
else if (num >= 0 && num <= 54) {
    document.write("F");
} 
else {
    document.write("Not a valid score");
}
