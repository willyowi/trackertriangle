function tracker(){
var side1 = parseFloat(prompt("Enter 1st Number"));
var side2 = parseFloat(prompt("Enter 2nd Number"));
var side3 = parseFloat(prompt("Enter 3rd Number"));
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
