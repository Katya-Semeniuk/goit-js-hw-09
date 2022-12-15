function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.body;

const btnStart = document.querySelector('[data-start]');
console.log(btnStart)

const btnStop = document.querySelector('[data-stop]');
console.log(btnStop)

btnStart.addEventListener('click', startColor);

btnStop.addEventListener('click', stopColor);
let intervalId;


function startColor() {
    intervalId = setInterval(() => {
            bodyColor.style.backgroundColor = getRandomHexColor();
    }, 1000)
    
     btnStart.setAttribute("disabled", "disabled");
    console.log("btnStart ist disabled");
    
    let res = btnStop.hasAttribute('disabled')
    console.log(res)
    if (res) {
        btnStop.removeAttribute("disabled")
    }
    return
     

}

function stopColor() {
        
    clearInterval(intervalId);
    
        btnStart.removeAttribute("disabled");
    if (btnStart !== "disabled") {
    btnStop.setAttribute("disabled", "disabled");
        console.log("btnStop ist disabled");
}
        
    }







