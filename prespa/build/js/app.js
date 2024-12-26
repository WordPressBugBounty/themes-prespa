(()=>{"use strict";function e(e,t,n){"Tab"===n.key&&9===n.keyCode&&(n.shiftKey?document.activeElement===e&&(t.focus(),n.preventDefault()):document.activeElement==t&&(e.focus(),n.preventDefault()))}function t(e,t=5){for(let o=0;o<e.length;o++){const s=e[o];n(s,t)&&-1==s.className.indexOf("animated")&&(s.className+=" animated")}}function n(e,t=5){const n=e.ownerDocument.defaultView||window,o=e.getBoundingClientRect(),s=o.top+t,c=o.bottom;return s<n.innerHeight&&c>=0}function o(e,t,n){let o;return function(){const s=this,c=arguments,a=n&&!o;clearTimeout(o),o=setTimeout((function(){o=null,n||e.apply(s,c)}),t),a&&e.apply(s,c)}}const s=function(){return window.innerHeight+window.scrollY>=document.body.scrollHeight};function c(){const e=prespa_customizer_object.fixed_header,t=prespa_customizer_object.sticky_header;if(!e&&!t)return;if(s())return;const n=window.pageYOffset|document.body.scrollTop,o=document.getElementsByClassName("main-navigation-container")[0];n>50?-1==o.className.indexOf("fixed-header")&&(o.className+=" fixed-header",o.style.position="fixed"):(o.className=o.className.replace(" fixed-header",""),o.style.position=prespa_customizer_object.has_hero_image?"fixed":"static"),t&&(n>50?-1==o.className.indexOf("sticky-header")&&(o.className+=" sticky-header"):o.className=o.className.replace("sticky-header",""))}let a=0;function i(e,t,n,o,s,c){let a=null;const i=function(l){a||(a=l);const d=Math.min((l-a)/c,1);e.innerHTML=n+Math.floor(d*(o-t)+t)+s,d<1&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)}function l(e){for(let t=0;t<e.length;t++)e[t].src.endsWith(".svg")?e[t].src=e[t].src.replace(".svg","-dark-mode.svg"):e[t].src.endsWith(".png")&&(e[t].src=e[t].src.replace(".png","-dark-mode.png")),e[t].srcset=""}function d(){if(a>0)return;const e=document.querySelectorAll(".section-stats-counter .increase h2");for(let t=0;t<e.length;t++){const o=e[t],s=o.textContent.replace(/\D/g,""),c=o.textContent.match(/[^0-9]*/),l=o.textContent.match(/[^0-9]*$/);n(o)&&(i(o,0,c,s,l,2250),a++)}}function r(){document.body.className.indexOf("single")>-1||document.body.className.indexOf("page ")>-1||t(document.getElementsByClassName("hentry"))}function m(){-1!=document.body.className.indexOf("page")&&t(document.querySelectorAll('[class^="p-animation"],[class*=" p-animation"]'),60)}function u(){const e=document.getElementById("scroll-cart"),t=document.getElementsByClassName("back-to-top")[0]||"";document.body.scrollTop>100||document.documentElement.scrollTop>100?(e&&(e.style.display="block"),t&&(t.style.display="block")):(e&&(e.style.display="none"),t&&(t.style.display="none"))}function f(e){if(0==document.getElementsByClassName("p-btn-animation-border-move").length)return;var t;t="rgba(0, 0, 0, 0)"==getComputedStyle(e).backgroundColor?getComputedStyle(e).borderColor:getComputedStyle(e).backgroundColor,e.style.setProperty("--border-color",t)}!function(){const t=document.getElementById("masthead")||"";if(!t)return;const n=document.getElementById("main-navigation")||"",o=document.querySelectorAll(".site-menu .menu-toggle");let s=t.getElementsByTagName("a");for(let e=0;e<o.length;e++)o[e].addEventListener("click",(function(e){c(e,this)})),o[e].addEventListener("keydown",(function(e){13===e.keyCode&&(c(e,this),i(this))})),o[e].addEventListener("focus",l),o[e].addEventListener("blur",l);function c(e,t){e.preventDefault();const n=t.childNodes[1].childNodes[1]||"";n&&(n.checked=!n.checked);const o=t.parentNode;o.classList.toggle("toggled"),-1==t.className.indexOf("sub-menu-toggle")&&document.body.classList.toggle("modal-open"),"true"===t.getAttribute("aria-expanded")?t.setAttribute("aria-expanded","false"):t.setAttribute("aria-expanded","true"),document.addEventListener("click",(function(e){const s=["label","input","a","i","svg","circle","path","line","button","span"];let c=!1;for(let t=0;t<s.length;t++)s[t]===e.target.tagName.toLowerCase()&&(c=!0);c||(o.className=o.className.replace("toggled",""),document.body.className=document.body.className.replace("modal-open",""),t.setAttribute("aria-expanded","false"),n&&(n.checked=!1))}))}function a(e){if("focus"===e.type||"blur"===e.type){let e=this;for(;void 0!==e.className&&-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentNode}if("touchstart"===e.type){const t=this.parentNode;e.preventDefault();for(let e=0;e<t.parentNode.children.length;++e){const n=t.parentNode.children[e];t!==n&&n.classList.remove("focus")}t.classList.toggle("focus")}}function i(o){if(window.matchMedia("(min-width: 864px)").matches)return;const s=t.querySelectorAll(".menu-toggle, .menu-item > a, .social-icon > a, .site-header-cart > a, .search-icon > button, .dark-mode-widget"),a=s[0],i=s[s.length-1];n.addEventListener("keydown",(function(t){"false"!=o.getAttribute("aria-expanded")&&("27"==t.keyCode&&(c(t,this.firstElementChild),this.firstElementChild.focus()),e(a,i,t))}))}function l(){if(window.matchMedia("(min-width: 864px)").matches)return;const e=document.querySelectorAll(".slide-menu button");o[0].addEventListener("keydown",(function(t){if("false"==this.getAttribute("aria-expanded")&&13!==t.keyCode){for(let e=0;e<s.length;e++)"li"==s[e].parentNode.tagName.toLowerCase()&&s[e].setAttribute("tabindex","-1");for(let t=0;t<e.length;t++)e[t].setAttribute("tabindex","-1")}else{for(let e=0;e<s.length;e++)s[e].removeAttribute("tabindex");for(let t=0;t<e.length;t++)e[t].removeAttribute("tabindex")}}))}setTimeout((function(){s=t.getElementsByTagName("a");for(let e=0,t=s.length;e<t;e++){if(window.matchMedia("(max-width: 864px)").matches)return;s[e].addEventListener("focus",a,!0),s[e].addEventListener("blur",a,!0)}}),700),document.getElementById("search-open").addEventListener("keydown",(function(){if(window.matchMedia("(max-width: 864px)").matches)return;const t=this.querySelectorAll("input, .search-form button, .close"),n=t[0],o=t[t.length-1];this.addEventListener("keydown",(function(t){e(n,o,t)}))})),document.querySelector("#search-open .close").addEventListener("keydown",(function(e){13===e.keyCode&&setTimeout((function(){document.querySelector(".search-icon a").focus()}),100)})),document.querySelector("#search-open .close").addEventListener("click",(function(e){setTimeout((function(){document.querySelector(".search-icon a").focus()}),200)})),window.addEventListener("unload",(function(){document.getElementById("burger-check").checked=!1}))}(),window.addEventListener("scroll",o(c,10)),window.addEventListener("scroll",o(r,15)),window.addEventListener("scroll",o(m,15)),window.addEventListener("scroll",o(u,100)),window.addEventListener("scroll",o(d,150)),function(){if("1"!==prespa_customizer_object.sticky_header)return;const e=document.documentElement,t=window;let n,s=t.scrollY||e.scrollTop,c=0,a=0;window.addEventListener("scroll",o((function(){n=t.scrollY||e.scrollTop,n>s?c="up":n<s&&(c="down"),c!==a&&function(e,t){const n=document.getElementsByClassName("main-navigation-container")[0];"up"===e&&t>50?(n.classList.remove("show"),a=e):"down"===e&&(n.classList.add("show"),a=e)}(c,n),s=n}),15))}(),function(){const e=document.body,t=document.getElementsByClassName("dark-mode-widget");for(let n=0;n<t.length;n++)t[n].addEventListener("click",(function(){this.classList.contains("js-toggle--checked")?(this.classList.remove("js-toggle--checked"),e.classList.remove("dark-mode"),setTimeout((function(){localStorage.removeItem("prespaNightMode")}),100)):(this.classList.add("js-toggle--checked"),e.classList.add("dark-mode"),localStorage.setItem("prespaNightMode","true"))}));if(localStorage.getItem("prespaNightMode"))for(let n=0;n<t.length;n++)t[n].classList.add("js-toggle--checked"),e.classList.add("dark-mode")}(),function(){const e=document.getElementsByClassName("back-to-top")[0];e&&e.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}(),function(){const e=document.getElementsByClassName("dark-mode-widget")[0];if(!e)return;const t=document.querySelectorAll(".pattern-features img, .six-services img, .section-stats-counter img, .has-dark-mode-icons img");let n=localStorage.getItem("prespaNightMode")||!1;document.body.className.indexOf("dark-mode")>-1&&l(t),e.addEventListener("click",(function(){n=!n,n?l(t):function(e){for(let t=0;t<e.length;t++)e[t].src.endsWith(".svg")?e[t].src=e[t].src.replace("-dark-mode.svg",".svg"):e[t].src.endsWith(".png")&&(e[t].src=e[t].src.replace("-dark-mode.png",".png")),e[t].srcset=""}(t)}))}(),window.addEventListener("load",(function(){!function(){if(!document.querySelector(".p-typewrite-animation"))return;const e=document.querySelectorAll(".p-typewrite-animation");for(let t=0;t<e.length;t++){const n=e[t].innerHTML,o=document.createElement("span");o.innerHTML=n,e[t].innerHTML="",e[t].appendChild(o);const s=e[t].querySelector("span"),c=e[t].clientHeight;s.innerHTML="",e[t].style.visibility="visible",e[t].style.opacity="1",e[t].style.height=c+"px";const a=n.match(/(<[^>]+>|[^<]+)/g);let i=0;function l(){if(i<a.length){const e=a[i];if(!e.startsWith("<")){const t=e.split("");let n=0;function o(){n<t.length?(s.innerHTML+=t[n],n++,setTimeout(o,45)):(i++,l())}return void o()}s.innerHTML+=e,i++,setTimeout(l,45)}}setTimeout(l,900)}}(),function(){const e=document.querySelectorAll('[class^="p-animation"],[class*=" p-animation"], .hero-pattern .wp-block-columns');for(let t=0;t<e.length;t++)n(e[t])&&(e[t].className+=" animated");document.querySelector(".hero-pattern .wp-block-columns")&&document.querySelector(".hero-pattern .wp-block-columns").classList.add("animated"),d()}(),function(){if(document.body.className.indexOf("single")>-1||document.body.className.indexOf("page ")>-1)return;const e=document.getElementsByClassName("hentry");for(let t=0;t<e.length;t++)n(e[t])&&(e[t].className+=" animated")}(),function(){const e=document.getElementsByClassName("preloader")[0];e&&(e.length&&(e.style.animation="none"),e.style.opacity=0,setTimeout((function(){e.remove()}),25))}()})),function(){const e=window.matchMedia("(max-width: 54rem)"),t=document.getElementById("top-navigation"),n=document.getElementById("primary-menu");function o(o,s,c,a){if(e.matches){for(let e=0;e<c.length;e++)c[e].classList.add(a),o.appendChild(c[e]);n.append(o),t.style.display="none"}else{const e=n.querySelectorAll(`.${a}`),o=document.getElementsByClassName("moved-items"),c=n.querySelectorAll(".moved-item"),i=n.querySelectorAll(".moved-item-social");t.style.display="flex";for(let t=0;t<e.length;t++)"moved-item"==a?s.append(c[t]):s.append(i[t]);if(o.length>0)for(let e=0;e<o.length;e++)o[e].remove()}}function s(){if(!t)return;const e=t.getElementsByTagName("ul")[0],n=e.querySelectorAll(":scope > li"),s=document.getElementsByClassName("header-social-icons")[0],c=document.querySelectorAll(".header-social-icons li"),a=document.createElement("ul");a.classList.add("moved-items");const i=document.createElement("ul");i.classList.add("moved-items"),o(a,e,n,"moved-item"),o(i,s,c,"moved-item-social")}document.addEventListener("DOMContentLoaded",s),e.addEventListener("change",(function(){s()}))}(),prespa_customizer_object.has_masonry_layout&&function(e,t,n){const o=document.getElementsByClassName(e)[0]||"";if(!o)return;const s=o.parentNode,c=document.querySelectorAll(".post");o.parentNode.removeChild(o);const a=document.createElement("div");a.setAttribute("id",e),a.classList.add("masonry-layout","columns-"+n),s.appendChild(a);let i=1;for(let e=1;e<=n;e++){const t=document.createElement("div");t.classList.add("masonry-column-"+e),a.appendChild(t)}for(let t=0;t<c.length;t++)document.querySelector("#"+e+" > .masonry-column-"+i).appendChild(c[t]),i=i<n?i+1:1}("prespa-post-inner",0,+prespa_customizer_object.column),function(){const e=document.querySelectorAll(".wp-block-button__link");for(let t=0;t<e.length;t++){let n=e[t].querySelector("span")||null;n?(e[t].setAttribute("data-text",n.innerText),f(e[t])):(n=document.createElement("span"),n.innerText=e[t].innerText,e[t].innerHTML="",e[t].appendChild(n),e[t].setAttribute("data-text",n.innerText),f(e[t]))}}()})();