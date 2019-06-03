function tracker(){
var side1 = parseFloat(prompt("Enter  value for 1st side "));
var side2 = parseFloat(prompt("Enter value for  2nd side"));
var side3 = parseFloat(prompt("Enter value for 3rd side"));
var side = function (a,b,c) {
return a + b > c && b + c > a && c + a > b
}
if(side(side1,side2,side3)&& side1==side2 && side2==side3) {
alert("Equilateral Triangle")
}
else if(side(side1,side2,side3)&& side1==side2 || side2==side3 || side3==side1) {
alert("Isosceles Triangle")
}
else if (side(side1,side2,side3)&& side1!==side2!==side3) {
alert("Scalene Triangle")
}
else {
alert("Not Triangle!")
}};
