!function(){var t=document.body,e=document.querySelector("[data-start]");console.log(e);var o=document.querySelector("[data-stop]");console.log(o),e.addEventListener("click",(function(){intervalId=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.setAttribute("disabled","disabled"),console.log("btnStart ist disabled");var d=o.hasAttribute("disabled");console.log(d),d&&o.removeAttribute("disabled");return})),o.addEventListener("click",(function(){clearInterval(intervalId),e.removeAttribute("disabled"),"disabled"!==e&&(o.setAttribute("disabled","disabled"),console.log("btnStop ist disabled"))}))}();
//# sourceMappingURL=01-color-switcher.ba29a633.js.map
