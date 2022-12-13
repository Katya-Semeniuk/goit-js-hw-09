function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.body;

const btnStart = document.querySelector('[data-start]');
console.log(btnStart)

const btnStop = document.querySelector('[data-stop]');
console.log(btnStop)

btnStart.addEventListener('click', e => {
    colorChange.startColor()
});

btnStop.addEventListener('click', e => {
   colorChange.stopColor()
});

// const colorChange = {

//     startColor() { },

//     stopColor() {}
// }





const colorChange = {
    isActive: false,
    startColor() {
        if (this.isActive) {
            return;
        }

        this.isActive = true;  
        this.intervalId = setInterval(() => {
            bodyColor.style.backgroundColor = getRandomHexColor();
        }, 1000)
        btnStart.setAttribute("disabled", "disabled");
        console.log("btnStart ist disabled");

        btnStop.removeAttribute("btnStart is visible")
    }, 
    stopColor() {
        this.Active = false;
        clearInterval(this.intervalId)
        btnStart.removeAttribute("disabled");
        console.log("btnStart ist visible");

        btnStop.setAttribute("disabled", "disabled");
        // console.log("btnStop ist disabled");
    }

}