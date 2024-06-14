//variables
// import {useState} from 'react';
let diamondCount = 0;
let money=0;
let clickedTiles = [];
let currentMoney = money;
let start = false;
let mineLimit = 0;
const multiplier = {1:[1.03,1.08,1.12,1.18,1.24,1.3,1.37,1.46,1.55,1.65, 1.77, 1.9,2.06, 2.25, 2.47, 2.75, 3.09, 3.54, 4.12, 4.95,6.19, 8.25, 12.38, 24.75],
                2:[1.08, 1.17,1.29, 1.41, 1.56, 1.74, 1.94,2.18, 2.47, 2.83, 3.26, 3.81, 4.5, 5.4, 6.6, 8.25, 10.61, 14.14, 19.8, 29.7, 49.5,99,297],
                3:[1.12, 1.29, 1.48, 1.71, 2, 2.35, 2.79, 3.35, 4.07, 5, 6.26, 7.96, 10.35, 13.8,18.97, 27.11, 40.66,65.06,113.85, 227.7,569.25, 2277],
                4:[1.18, 1.41, 1.71, 2.09, 2.58,3.23, 4.09,5.26, 6.88, 9.17, 12.51, 17.52, 25.3, 37.95,59.64, 99.39, 178.91, 357.81, 834.9,2504.7, 12523.5]
}
const multDisp = document.getElementById("multiplier");
const bettingInput  = document.getElementById("value");
const mineInput = document.getElementById("mines");
const betAmount = document.getElementById("money");
const betbutton = document.getElementById("bet-btn");
const profit = document.getElementById("profit-value");
const profitValue = document.getElementById("profit-amount");
const profitDiv = document.getElementById("profitDiv");
const stats = document.getElementById("stats")
const pick = document.getElementById("pick")
const dispMines = document.getElementById("no-of-mines");
const dispDiamond = document.getElementById("no-of-diamonds");
const mineselect = document.getElementsByClassName("mines-text")[0];
const balance = document.getElementById("bal");
//functions
function initialize(){
    balance.textContent = "₹500.00";
    stats.style.display = "none";
    pick.style.display = "none";
    profitDiv.style.display = "none";
    mineselect.style.display = "block";
    mineInput.style.display = "block";
    betbutton.textContent = "Bet";
    let mine = [];
    while(mine.length!==3){
        let num = Math.ceil((Math.random()*25))%25;
        
        if (!mine.includes(num)){
            mine.push(num);
        }    
    }
    //for mines select
    for(let i=0;i<4;i++){
        const option = document.createElement('option');
        option.value = (i+1);
        option.text = i+1;
        mineInput.appendChild(option);
    }
    profit.value = 0;
    return mine;
}
const mines = initialize();
      
function display(blockNum, color){
        const tile = document.getElementsByClassName(blockNum)[0];
        tile.style.backgroundColor = color;
 }

function reset(){
    for(let i=1;i<=5;i++){
    var parent = document.getElementById('block' + i);
    var children = parent.children;
    // console.log(children);
    // Loop through the children and log each one
    for (var j = 0; j < children.length; j++) {
        children[j].style.backgroundColor = "#2F4452";
    }
   }
    start=false;
    stats.style.display = "none";
    betbutton.textContent = "Bet"
    pick.style.display = "none";
    profitDiv.style.display = "none";
    mineselect.style.display = "block";
    mineInput.style.display = "block";
    betAmount.textContent = "₹0.00";
    multDisp.textContent = "Profit";
    profitValue.textContent = "₹0.00";
    diamondCount = 0;

    profit.value=0
    firstCall=false;
  while(clickedTiles.length){
    clickedTiles.pop();
  };
}


function clickTile(blockNum){
    if(mines.includes(blockNum)){
        display(blockNum,'red');
        profit.value=0;
        setTimeout(reset,1000);
     }
     else{
        display(blockNum,'green');
        var audio = new Audio('diamond.mp3');
        audio.play();
        clickedTiles.push(blockNum);
        console.log(multiplier[mineLimit][diamondCount]);
        multDisp.textContent = "Profit ("+multiplier[mineLimit][diamondCount]+1+"x)";
        currentMoney = (money*(multiplier[mineLimit][diamondCount]));
        
        profit.value = (currentMoney - money).toPrecision(5);
        profitValue.textContent = "₹" + currentMoney.toPrecision(4);
        diamondCount++;
     }
}
function call(el){ // called when clicked on a tile
   console.log("start: "+ start)
    if(!start){return;}

 var blockNum = parseInt(el.className,10);
 if(clickedTiles.includes(blockNum))return;
clickTile(blockNum);
}

function bet(){
    let prev = balance.textContent;
       prev = prev.substring(1);
       prev = parseFloat(prev);
    if(start){   
        let finalbalance = currentMoney + prev;
        console.log("final:"+finalbalance + "currnt money:"+currentMoney)
         balance.textContent = "₹ "+ finalbalance.toPrecision(5);
         reset();
        return;
    }

    start = true;
    console.log("game started!");
    money = parseFloat(bettingInput.value).toPrecision(4);
    if(prev < money){
        alert("not enough funds!");
        return;
    }
    balance.textContent = "₹"+ (prev-money).toPrecision(5);
    betAmount.textContent = "₹"+money;
    mineLimit = parseInt(mineInput.value,10);
    dispMines.textContent = mineLimit;
    dispDiamond.textContent = 25 - mineLimit;
    firstCall=true;
 if (bettingInput.value =="" || mineLimit<=0){
    alert("Fill values properly");
    return;
 } 
 betbutton.textContent = "Cash out"
 stats.style.display = "flex";
    pick.style.display = "block";
    profitDiv.style.display = 'block';
    mineselect.style.display = "none";
    mineInput.style.display = "none";
 console.log(money + " " + mineLimit)
}


function rand(){
    console.log("rand called")
    let val = Math.floor(Math.random()*25)+1;
    while(clickedTiles.includes(val)){
    val = Math.floor(Math.random()*25)+1;
    }
    clickTile(val);
}
 
   
