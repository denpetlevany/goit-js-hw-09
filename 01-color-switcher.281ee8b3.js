!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){d=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled","disabled")})),e.addEventListener("click",(function(){clearInterval(d),t.removeAttribute("disabled","disabled"),e.setAttribute("disabled","disabled")})),e.setAttribute("disabled","disabled");var d=null}();
//# sourceMappingURL=01-color-switcher.281ee8b3.js.map