function track(){
var one=parseFloat(document.getElementById("one").value);
var two=parseFloat(document.getElementById("two").value);
var three=parseFloat(document.getElementById("three").value);
var track= document.getElementById("four")

if (numOne===numTwo && numOne===numThree && numTwo===numThree) {
alert("equilatoral triangle");
}
else if(numOne===numTwo || numOne===numThree || numTwo===numThree0){
alert("isosceles triangle");
}
else if (numOne!==numTWo && numOne!==numThree && numThree!==numTwo && numOne+numTWo>numThree && (numTwo+numThree)!>=numOne){
  alert ("scalene triangle");
}
else if (numOne+numTwo <=numThree){
  alert("not a triangle");
}
else if (numOne+numThree <=numTwo ){
    alert("not a triangle");
}
else if (numTwo+numThree <=numOne){
    alert("not a triangle");
}
else {
    alert("not a number");
}
}
