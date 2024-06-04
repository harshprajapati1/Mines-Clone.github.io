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
console.log("game over");
alert("Game Over!");
}

function alert(){
   
}
function call(el){
 var blockNum = parseInt(el.className,10);
console.log(blockNum)
if(arr.includes(blockNum)){
    el.style.backgroundColor = 'red';
    mineCount++;
}
else{
    el.style.backgroundColor = 'green';
}
if(mineCount>2){
    setTimeout(reset,1000)
}

}
function bet(){
 console.log("bet button clicked");
}

