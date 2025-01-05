/*var studentInfo = {
    name: "Naim Ahmed",
    age: 24,
    cgpa:3.29,
    language: ["Bangla","English","Hindi"]
}
document.write("My name is "+studentInfo.name+" I am "+studentInfo.age+" years old. My CGPA is "+studentInfo.cgpa+" and I know "+studentInfo.language);
*/

//create a constructor
function Student(name,age,cgpa){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    //function to print data
    this.display=function(){
        document.write(this.name+" "+this.age+" "+this.cgpa+"<br>");
    }
}
var student1 = new Student("Naim",24,3.29);
var student2 = new Student("Max",26,3.40);
var student3 = new Student("Stocks",27,3.50);
//document.write(student1.name+"<br>");
//document.write(student2.name+"<br>");
//document.write(student3.name+"<br>");
student1.display();
student2.display();
student3.display();
