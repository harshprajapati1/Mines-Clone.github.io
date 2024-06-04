// import math
function addElement(){
   
    for(let i=0;i<25;i++){
        let newDiv = document.createElement("div");
        newDiv.id = i;
        let val = Math.ceil((i+1)/5);
        let blockName = "block" + val;
        newDiv.className = blockName;
        const game = document.getElementById("game");
        game.appendChild(newDiv);
    }
  }

  addElement()