(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();(()=>{const o=document.querySelector(".js-menu-container"),r=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".link"),e=()=>{const t=r.getAttribute("aria-expanded")==="true"||!1;r.setAttribute("aria-expanded",!t),o.classList.toggle("is-open")};r.addEventListener("click",e),i.addEventListener("click",e),n.forEach(t=>{t.addEventListener("click",e)}),window.matchMedia("(min-width: 425px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),r.setAttribute("aria-expanded",!1))})})();new Swiper(".swiper-container",{loop:!0,autoplay:{delay:2e3},slidesPerView:1,navigation:{nextEl:".custom-next",prevEl:".custom-prev"},allowTouchMove:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{425:{slidesPerView:2},765:{slidesPerView:3},1024:{slidesPerView:4},1440:{slidesPerView:5}}});
//# sourceMappingURL=commonHelpers.js.map
