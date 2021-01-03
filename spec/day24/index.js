//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById('spinning'); //The spinning number
let num = 0;
//event listener
document.getElementById("buttonPressed").addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed(){
    pushed = true;
}

//set the target Int
function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}



//EDIT THIS FUNCTION
const spin = async () => {
    //WRITE YOUR CODE HERE
    await sleep(75) //Paste this wherever you need to sleep the incrimentor 
    if(pushed){
      stop(num); //Trigger this function when the STOP button has been pushed
    }else{
      spinningElem.textContent  = ++num;
      spin();
    }
}

//EDIT THIS FUNCTION
function stop(i){
    //WRITE YOUR CODE HERE
    var result = document.getElementById('result'); //display your result message here
    result.textContent = i === targetInt ? 'You win!' : `Oh no, you lose! Off by ${Math.abs(i- targetInt)}`
}


//main
setTargetInt();
spin()