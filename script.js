// let box = document.createElement("div")
// box.id='b1'

// const game = document.getElementsByClassName('game')

// box.style.backgroundColor = red;

function addElement() {
    for(let i=0;i<25;i++){
    const k=5;
    let rows = []
    if(i%k === 0){
        rows.push(document.createElement("div"))
        rows[rows.length-1].id = "row-no-"+rows.length.toString();
        const currentDiv = document.getElementById("game");
        currentDiv.appendChild(newDiv)
    }
    
    const newDiv = document.createElement('div')
    newDiv.id=i;
    rows[rows.length-1].appendChild(newDiv);
    }
  }

  addElement()