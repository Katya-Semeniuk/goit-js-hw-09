const t=document.body,e=document.querySelector("[data-start]");console.log(e);const o=document.querySelector("[data-stop]");console.log(o),e.addEventListener("click",(t=>{s.startColor()})),o.addEventListener("click",(t=>{s.stopColor()}));const s={isActive:!1,startColor(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.setAttribute("disabled","disabled"),console.log("btnStart ist disabled"),o.removeAttribute("btnStart is visible"))},stopColor(){this.Active=!1,clearInterval(this.intervalId),e.removeAttribute("disabled"),console.log("btnStart ist visible"),o.setAttribute("disabled","disabled"),console.log("btnStop ist disabled")}};
//# sourceMappingURL=01-color-switcher.89dc4e2e.js.map
