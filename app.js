// ********** Question 1 *************

var a=10;
document.write("<h3>Result</h3>" +"<br>");
document.write("The value of a is "+a +"<br>");
document.write("The value of ++a is "+ ++a +"<br>");
document.write("Now the value of a is "+ a +"<br>");
document.write("The value of a++ is "+ a++ +"<br>");
document.write("Now the value of a is "+ a +"<br>");
document.write("The value of --a is "+ --a +"<br>");
document.write("Now the value of a is "+ a +"<br>");
document.write("The value of a-- is "+ a-- +"<br>");
document.write("Now the value of a is "+ a +"<br><br>");



// ********** Question 2 *************


var a=2;
var b=1;
document.write("--a="+--a +"<br>");
c= --a- --b;
document.write("--a - --b="+ c +"<br>");
d= (--a) - (--b) + (++b); 
document.write("--a - --b + ++b="+ d+"<br>");
e= --a - --b + ++b + b--; 
document.write("--a - --b + ++b + b-- ="+e+"<br><br>")


// ********** Question 3 *************


var userName = prompt("Enter your name","User");
alert("Welcome to the website "+userName);

// ********** Question 5 *************


var table=prompt("Enter the number",5);
for(var i=1;i<=10;i++){
    document.write(table +"X"+i+"="+table*i+"<br>");
}
document.write("<br>");

// ********** Question 6 *************


var sub1=prompt("Enter Subject 1");
var obtMark1=+prompt("Enter Obtained marks of " + sub1);
var sub2=prompt("Enter Subject 2");
var obtMark2=+prompt("Enter Obtained marks of " + sub2);
var sub3=prompt("Enter Subject 3");
var obtMark3=+prompt("Enter Obtained marks of " + sub3);
var totObtMark=obtMark1+obtMark2+obtMark3;
var totMark=100;
var totMarks=100*3;
var perc1=(obtMark1/totMark)*100;
var perc2=(obtMark2/totMark)*100;
var perc3=(obtMark3/totMark)*100;
var totPerc=(perc1+perc2+perc3)/3;
document.write("<b>Subject Total-Marks Obtained-Marks Percentage</b>"+"<br>");
document.write(sub1+" "+totMark+" "+obtMark1+" "+perc1+"%"+"<br>");
document.write(sub2+" "+totMark+" "+obtMark2+" "+perc2+"%"+"<br>");
document.write(sub3+" "+totMark+" "+obtMark3+" "+perc3+"%"+"<br>");
document.write("   "+totMarks+"    "+totObtMark+"    "+totPerc+"%"+"<br>");


 