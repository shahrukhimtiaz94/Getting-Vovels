
var vovelElm = document.getElementById("vovel");
var constantElm= document.getElementById('constant');

function toAdd(){
  var inpElm = document.getElementById('inp');  
  inpElm.value = inpElm.value.replace(/[0-9]/g, '');
  var vowels = ["a","e","i","o","u"];
  var inputValue = inpElm.value.toLowerCase();
  var hasvowels = false;
  for(var i=0; i<vowels.length; i++){
    if(inputValue.indexOf(vowels[i] ) !== -1)
    {
      hasvowels=true;
      break;
    }
  }
  if(hasvowels==true){
    vovelElm.innerHTML += inputValue;
    vovelElm.innerHTML += "<br>";
  }
  else{
    constantElm.innerHTML += inputValue;
    constantElm.innerHTML += "<br>";
  }
  inpElm.value="";
} 


