(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let o=null;const l=()=>{let e=(()=>{let e=(new Date("14 march 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=("0"+e.hours.toString()).slice(-2),n.textContent=("0"+e.minutes.toString()).slice(-2),r.textContent=("0"+e.seconds.toString()).slice(-2),e.timeRemaining<=0&&(clearInterval(o),t.textContent="00",n.textContent="00",r.textContent="00")};l(),o=setInterval(l,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),r=t.querySelectorAll("ul>li>a"),o=document.querySelector('a[href^="#service-block"'),l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),n.addEventListener("click",l),r.forEach((e=>{e.addEventListener("click",(t=>{l(),t.preventDefault();const n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))})),o.addEventListener("click",(e=>{e.preventDefault(),document.querySelector("#service-block").scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),r=e.querySelector(".popup-content");let o,l=0;const c=()=>{l+=.5,o=requestAnimationFrame(c),l<10?r.style.transform="translateY("+l+"%)":(l=0,cancelAnimationFrame(o))};t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",document.documentElement.clientWidth<767?cancelAnimationFrame(o):c()}))})),n.addEventListener("click",(()=>{e.style.display="none"}))})(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),n=document.querySelector(".calc-day");e.addEventListener("input",(t=>{if(t.preventDefault(),!t.target.value.match(/^\d+$/))return alert("Введите, пожалуйста, числовое значение"),e.value="",!1})),t.addEventListener("input",(e=>{if(e.preventDefault(),!e.target.value.match(/^\d+$/))return alert("Введите, пожалуйста, числовое значение"),t.value="",!1})),n.addEventListener("input",(e=>{if(e.preventDefault(),!e.target.value.match(/^\d+$/))return alert("Введите, пожалуйста, числовое значение"),n.value="",!1}))})(),(()=>{const e=document.querySelector("#form1-name"),t=document.querySelector("#form1-email"),n=document.querySelector("#form1-phone");e.addEventListener("input",(t=>{if(t.preventDefault(),t.target.value.match(/[^а-яА-Я-\s]/g))return alert("Введите имя используя кириллицу"),e.value="",!1})),t.addEventListener("input",(e=>{e.preventDefault(),e.target.value.match(/^\w+([\.\~\!\*\'-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)?t.style.color="green":t.style.color="red"})),n.addEventListener("input",(e=>{if(e.preventDefault(),e.target.value.match(/[^\d\()\-]/g))return alert("Введите номер телефона в формате 8(02)111-22-33"),n.value="",!1}))})()})();