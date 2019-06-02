
function submit(){
 var sideA=document.getElementById("sideA").value;
 var sideB=document.getElementById("sideB").value;
 var sideC=document.getElementById("sideC").value;

 if(sideA==sideB && sideB==sideC){
 alert("equilateral");
 }
 else if (sideA==sideB || sideA==sideC || sideB==sideC){
 alert("isosceles");
 }
 else if ((sideA+sideB <sideC) && (sideA+sideC <sideB) && (sideB+sideC <sideA)){
 alert("not a triangle");
 }
 else if(sideA!=sideB && sideB!=sideC && sideA!=sideC) {
 alert("scalene");
 }


}
