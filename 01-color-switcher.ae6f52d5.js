!function(){var t,e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),r=document.querySelector("body");function n(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}e.addEventListener("click",(function(){t=setInterval(n,1e3),e.setAttribute("disabled",!0),o.removeAttribute("disabled")})),o.addEventListener("click",(function(){clearInterval(t),o.setAttribute("disabled",!0),e.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.ae6f52d5.js.map
