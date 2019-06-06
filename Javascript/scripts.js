  function tracker(){
  var side1 = parseFloat(document.getElementById('side1').value);
  var side2 = parseFloat(document.getElementById('side2').value);
  var side3 = parseFloat(document.getElementById('side3').value);
  var side = function (a,b,c) {
  return a + b > c && b + c > a && c + a > b
  }
  if(side(side1,side2,side3)&& side1==side2 && side2==side3) {
  document.getElementById('output').innerHTML="This is an EQUILATERAL TRIANGLE!";
  }
  else if(side(side1,side2,side3)&& side1==side2 || side2==side3 || side3==side1) {
  document.getElementById('output').innerHTML="This is an ISOSCELES TRIANGLE";
  }
  else if (side(side1,side2,side3)&& side1!==side2!==side3) {
  document.getElementById('output').innerHTML="This is a SCALENE TRIANGLE";
  }
  else {
  document.getElementById('output').innerHTML=" This is Not Triangle!";
  }
  };
