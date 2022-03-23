(()=>{"use strict";function e({timing:e,draw:t,duration:o}){let r=performance.now();requestAnimationFrame((function n(c){let a=(c-r)/o;a>1&&(a=1);let l=e(a);t(l),a<1&&requestAnimationFrame(n)}))}(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let n=null;const c=()=>{let e=(()=>{let e=(new Date("14 march 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=("0"+e.hours.toString()).slice(-2),o.textContent=("0"+e.minutes.toString()).slice(-2),r.textContent=("0"+e.seconds.toString()).slice(-2),e.timeRemaining<=0&&(clearInterval(n),t.textContent="00",o.textContent="00",r.textContent="00")};c(),n=setInterval(c,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=document.querySelector('a[href^="#service-block"'),r=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",r),t.addEventListener("click",(e=>{if(e.target.classList.contains("close-btn")&&(e.preventDefault(),t.classList.toggle("active-menu")),e.target.closest("ul>li>a")){e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"}),r()}})),o.addEventListener("click",(e=>{e.preventDefault(),document.querySelector("#service-block").scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const t=document.querySelector(".popup"),o=document.querySelectorAll(".popup-btn"),r=t.querySelector(".popup-close"),n=t.querySelector(".popup-content");let c=document.documentElement.clientWidth;o.forEach((o=>{o.addEventListener("click",(()=>{t.style.display="block",e({duration:500,timing:e=>e,draw(e){n.style.top=10*e+"%"}})}))})),c<767&&cancelAnimationFrame(e),r.addEventListener("click",(()=>{t.style.display="none"}))})(),document.querySelectorAll(".calc-item:nth-child(n + 2)").forEach((e=>{e.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^\d]/g,"")}))})),(()=>{const e=document.querySelectorAll(".form-name"),t=document.querySelectorAll(".form-email"),o=document.querySelectorAll(".form-phone");e.forEach((e=>{e.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^а-яА-Я-\s]/g,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^\w\@\_\.\!\~\*\'-]/g,"")}))})),o.forEach((e=>{e.addEventListener("input",(e=>{e.preventDefault(),e.target.value=e.target.value.replace(/[^\d\()\-]/g,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");let o,r=document.querySelector(".portfolio-dots"),n=0,c=[];const a=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},i=()=>{a(t,n,"portfolio-item-active"),a(c,n,"dot-active"),n++,n>=t.length&&(n=0),l(t,n,"portfolio-item-active"),l(c,n,"dot-active")},s=()=>{o=setInterval(i,2e3)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(a(t,n,"portfolio-item-active"),a(c,n,"dot-active"),e.target.matches("#arrow-right")?n++:e.target.matches("#arrow-left")?n--:e.target.classList.contains("dot")&&c.forEach(((t,o)=>{e.target===t&&(n=o)})),n>=t.length&&(n=0),n<0&&(n=t.length-1),l(t,n,"portfolio-item-active"),l(c,n,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(o)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&s()}),!0),s(),t.forEach((()=>{let e=document.createElement("li");e.className="dot",r.append(e),c.push(e)}))})(),((t=100)=>{const o=document.querySelector(".calc-block"),r=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),l=document.getElementById("total");o.addEventListener("input",(o=>{o.target!==r&&o.target!==n&&o.target!==c&&o.target!==a||(()=>{const o=+r.options[r.selectedIndex].value,i=n.value;let s=0,u=1,d=1;c.value>1&&(u+=+c.value/10),a.value&&a.value<5?d=2:a.value&&a.value<10&&(d=1.5),s=r.value&&n.value?t*o*i*u*d:0,l.textContent=s,e({duration:300,timing:e=>e,draw(e){l.textContent=Math.round(e*s)}})})()}))})(100)})();