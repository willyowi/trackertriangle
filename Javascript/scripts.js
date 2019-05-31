function track(){
var numOne=document.getElementById("one").value;
var numTwo=document.getElementById("two").value;
var numThree=document.getElementById("three").value;
var track=document.getElementById("four")

one=parseInt(numOne)
two=parseInt(numTwo)
three=parseInt(numThree)


if (numOne===numTwo && numOne===numThree && numTwo===numThree) {
alert("equilatoral triangle")
}
else if(numOne===numTwo || numOne===numThree || numTwo===numThree0){
alert("isosceles triangle")
}
else if (numOne!=numTWo && numOne!=numThree && numThree!=numTwo || (numOne+numTWo)!>=numThree || (numOne+numThree)!>=numTWo){
  alert ("scalene triangle")
}
else {
  alert(its not a triangle)
}
}
