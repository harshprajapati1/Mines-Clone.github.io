function initialize(){
    let arr = []
    while(arr.length!==3){
        let num = Math.ceil((Math.random()*25))%25;
        
        if (!arr.includes(num))   {
            arr.push(num);
        }    
    }
    return arr;
}
const arr = initialize()
var mineCount = 0;
const cons = document.getElementById('console');

function reset(){
   
    for(let i=1;i<=5;i++){
    var parent = document.getElementById('block' + i);
    var children = parent.children;
    console.log(children);
    
    // Loop through the children and log each one
    for (var j = 0; j < children.length; j++) {
        console.log(children[j].style.backgroundColor = "#2F4452");
    }
}
mineCount = 0;
cons.innerHTML ="Mine counter: 0 (3 mine game)" ;
}


function call(el){
 var blockNum = parseInt(el.className,10);
console.log(blockNum)
if(arr.includes(blockNum)){
    el.style.backgroundColor = 'red';
    mineCount++;
    cons.innerHTML ="Mine Count: " + mineCount;
}
else{
    el.style.backgroundColor = 'green';
}
if(mineCount>2){
    cons.innerHTML ="Game Over" ;
    setTimeout(reset, 2000); 
}

}
function bet(){
 console.log("bet button clicked");
}

