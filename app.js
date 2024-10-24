
var vovelElm = document.getElementById("vovel");
var constantElm= document.getElementById('constant');
console.log(vovelElm);
console.log(constantElm);
function toAdd(){
    var inpElm = document.getElementById('inp').value;
    var i=0;
    while(i<inpElm.length){
       
      var res =  inpElm.slice(i,i+1);
        
         console.log(res, i);
      if(res === "a" || res === "e"){
        vovelElm.innerHTML = inpElm;
      }
      else{
          constantElm.innerHTML = inpElm;
          console.log("contant found")
      }
        i++
    }    



} 


