///1.changeColor mission///
let timer;
changeColor = () => {
  let box = document.getElementById("box");
  box.style.backgroundColor = "white";
  box.style.width = "200px";
  box.style.height = "200px";
  let btn = document.getElementById("changeColor");

  btn.disabled = true;

  timer = setTimeout(() =>{
  box.style.backgroundColor = "blue";
  btn.disabled = false
  },2000)
  
}

cancelChange = () => {
clearTimeout(timer);
}

document.getElementById("changeColor").onclick = changeColor;
document.getElementById("cancelChange").onclick = cancelChange;

///2.timerWatch mission///
let timerLeft = 10;
let timer1;

  startTimer = () => {
    let timerDiv = document.getElementById("timer");
    timerDiv.innerHTML = "";
      timerDiv.innerHTML=`Time left: ${timerLeft} `; 
    if(timerLeft > 0){
      timerLeft--;
  timer1 = setTimeout(startTimer, 1000);
    }else{
      timerDiv.innerHTML = "Time's up!";
      console.log("Timer finished");
      
    }
}

stopTimer = () => {
  clearTimeout(timer1);
  document.getElementById("timer").innerHTML = `Timer stopped with ${timerLeft} seconds left.`;
}

document.getElementById("startTimer").onclick = startTimer;
document.getElementById("stopTimer").onclick = stopTimer;


  /// 3.function customOfIndexOf mission with try catch\\\

  customIndexOf = (str,char) => {
    let index = -1;
    try{
      if(!str) throw new Error("missing str");
      if(!char) throw new Error("missing char");

      for(let i=0; i<str.length; i++){
        if(str[i] === char){
          index = i;
          console.log(`Character '${char}' found at index: ${index}`);
          return index;
        }
      }

    }
    catch(error){
      console.log("Error message:", error.message);
      console.log("error name:", error.name);
    }
    
}

customIndexOf("","w");

///4.fetch mission///
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())   
  .then(data => {
    let list = document.getElementById("userList");
    list.innerHTML = "";

    data.forEach(user => {
      let li = document.createElement("li");
      li.textContent = `${user.name} - ${user.address.city}`;
      list.appendChild(li);
      
    });
  })
  .catch(error => {
    console.log("error:",error);
  });


