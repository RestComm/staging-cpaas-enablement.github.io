!function(){"use strict";var t=document.querySelector(".navigation-container"),e=document.querySelector(".navigation-toggle");e.addEventListener("click",function(n){if(e.classList.contains("is-active"))return r(n);document.documentElement.classList.add("is-clipped--nav"),e.classList.add("is-active"),t.classList.add("is-active"),window.addEventListener("click",r),l(n)}),t.addEventListener("click",l);var n=t.querySelector("[data-panel=menu]");if(n){var a,i=(a=window.sessionStorage.getItem("nav-state"))&&"1"===(a=JSON.parse(a)).__version__?a:{__version__:"1"},s=function(t,e,n){var a=n+"@"+e;return t[a]||(t[a]={})}(i,t.dataset.component,t.dataset.version);t.querySelector(".context").addEventListener("click",function(){var e=t.querySelector(".is-active[data-panel]"),n="menu"===e.dataset.panel?"explore":"menu";e.classList.toggle("is-active"),t.querySelector("[data-panel="+n+"]").classList.toggle("is-active")}),v(".nav-toggle",n).forEach(function(t){var e=t.parentElement.parentElement.parentElement;t.addEventListener("click",function(){t.classList.toggle("nav-toggle-rotate"),e.classList.toggle("is-active"),s.expandedItems=d(),u()});var n=function(t,e){var n;if("nextElementSibling"in t)n=t.nextElementSibling;else for(n=t;(n=n.nextSibling)&&1!==n.nodeType;);return n&&e?n[n.matches?"matches":"msMatchesSelector"](e)&&n:n}(t,".nav-text");n&&(n.style.cursor="pointer",n.addEventListener("click",function(){e.classList.toggle("is-active"),s.expandedItems=d(),u()}))}),v(".nav-item",n).forEach(function(t,e){t.setAttribute("data-id","menu-"+t.dataset.depth+"-"+e)});var c=s.expandedItems||(s.expandedItems=[]);c.length&&v(c.map(function(t){return'.nav-item[data-id="'+t+'"]'}).join(","),n).forEach(function(t){t.classList.add("is-active")});var o=n.querySelector(".is-current-page");if(o){const t=o.firstElementChild;if(t){const e=t.getElementsByClassName("nav-link")||t.getElementsByClassName("nav-text");e&&e[0].classList.add("nav-bold")}(function(t){var e,n=[t.dataset.id],a=t.parentNode;for(;!(e=a.classList).contains("nav-menu");)"LI"===a.tagName&&e.contains("nav-item")&&(e.add("is-active","is-current-path"),n.push(a.dataset.id)),a=a.parentNode;return t.classList.add("is-active"),n})(o).forEach(function(t){c.indexOf(t)<0&&c.push(t)})}u(),function(t,e,n){if(!n)return e.scrollTop=t;var a=n.offsetTop;a<t?e.scrollTop=a-10:a-e.offsetHeight+n.offsetHeight>t?e.scrollTop=a-e.offsetHeight+n.offsetHeight+10:e.scrollTop=t}(s.scroll||0,n,o&&o.querySelector(".nav-link")),n.addEventListener("scroll",function(){s.scroll=Math.round(n.scrollTop),u()}),Array.prototype.slice.call(document.querySelectorAll("a.nav-link")).forEach(t=>{t.addEventListener("click",n=>{if(n.stopPropagation(),window.matchMedia("(max-width: 768px)").matches&&e.classList.contains("is-active")&&t.pathname===window.location.pathname)return r(n)})}),Array.prototype.slice.call(document.querySelectorAll(".nav-item.is-active")).forEach(function(t){0!==parseInt(t.getAttribute("data-depth"))&&function(t){const e=t.firstElementChild;if(e&&e.classList.contains("nav-flex-container")){const t=e.getElementsByTagName("button");t&&t.length>0&&(t[0].classList.contains("nav-toggle-rotate")||t[0].classList.add("nav-toggle-rotate"))}}(t)})}function r(n){3!==n.which&&2!==n.button&&(document.documentElement.classList.remove("is-clipped--nav"),e.classList.remove("is-active"),t.classList.remove("is-active"),window.removeEventListener("click",r),l(n))}function l(t){t.stopPropagation()}function d(){return v(".is-active",n).map(function(t){return t.dataset.id})}function u(){window.sessionStorage.setItem("nav-state",JSON.stringify(i))}function v(t,e){return[].slice.call((e||document).querySelectorAll(t))}}();
!function(){"use strict";var e=document.querySelector("article.doc"),t=document.querySelector(".toolbar");function n(n){n&&(window.location.hash="#"+this.id,n.preventDefault()),window.scrollTo(0,function t(n,o){return e.contains(n)?t(n.offsetParent,n.offsetTop+o):o}(this,0)-t.getBoundingClientRect().bottom)}window.addEventListener("load",function e(t){var o,i;(o=window.location.hash)&&(i=document.getElementById(o.slice(1)))&&(n.bind(i)(),setTimeout(n.bind(i),0)),window.removeEventListener("load",e)}),Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]')).forEach(function(e){var t,o;(t=e.hash.slice(1))&&(o=document.getElementById(t))&&e.addEventListener("click",n.bind(o))})}();
!function(){"use strict";var e=document.querySelector(".page-versions .versions-menu-toggle");if(e){var t=document.querySelector(".page-versions");e.addEventListener("click",function(e){t.classList.toggle("is-active"),e.stopPropagation()}),window.addEventListener("click",function(){t.classList.remove("is-active")})}}();
document.addEventListener("DOMContentLoaded",function(){});
function handleWhitelabeling(e){if(e){const t=e.data.whitelabeling.general,o={"--rc-logo-img":"logo"};if(Object.entries(o).forEach(([e,o])=>{o in t?document.documentElement.style.setProperty(e,t[o]):console.error("Key: "+o+" doesn't exist in general json")}),"logo"in t||document.documentElement.style.setProperty("--rc-logo-img","url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)"),t.favicon){let e=Array.prototype.slice.call(document.getElementsByTagName("link")).find(e=>"icon"===e.getAttribute("rel"));e&&(e.href=t.favicon)}const n=e.data.whitelabeling.styling,s={"--rc-primary-nav-bg-color":"main_bg_color","--rc-primary-nav-text-color":"contrast_color","--rc-secondary-nav-bg-color":"primary_well_bg_color","--rc-secondary-nav-text-color":"main_text_color","--rc-footer-bg-color":"main_bg_color","--rc-footer-text-color":"contrast_color","--rc-button-bg-color":"primary_color","--rc-button-text-color":"button_primary_hover_text_color","--rc-text-color":"main_text_color","--rc-table-border-color":"muted_text_color","--rc-link-color":"link_text_color","--rc-secondary-nav-link-color":"link_text_color","--rc-heading-color":"button_primary_hover_bg_color","--rc-border-radius":"input_border_radius"};Object.entries(s).forEach(([e,t])=>{t in n?document.documentElement.style.setProperty(e,n[t]):console.error("Key: "+t+" doesn't exist in styling json")})}else document.documentElement.style.setProperty("--rc-logo-img","url(data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==)");document.getElementsByTagName("body")[0].style.display="block"}document.addEventListener("DOMContentLoaded",function(){let e=Array.prototype.slice.call(document.querySelectorAll(".navbar-enterprise-item"),0);if(0!==e.length){const t=window.sessionStorage.getItem("active-enterprise-tab");e.forEach(function(e){t&&e.textContent===t&&e.classList.toggle("active-tab"),e.addEventListener("click",function(e){e.stopPropagation(),window.sessionStorage.setItem("active-enterprise-tab",e.target.textContent)})})}const t=document.querySelector(".navigation-menu");if(t&&t.addEventListener("mouseenter",function(e){e.target.classList.contains("is-active")&&e.target.focus()}),document.getElementsByTagName("body")[0].classList.contains("status-404")){const e=document.getElementsByClassName("header-logo-link")[0];window.location.pathname.includes("/enterprise/")?(document.getElementsByTagName("html")[0].classList.add("enterprise-persona"),e.href=window.location.protocol+"//"+window.location.host+"/docs/1.0/enterprise",document.getElementById("footer-voice-link").href="/docs/1.0/enterprise/api/voice-category.html",document.getElementById("footer-sms-link").href="/docs/1.0/enterprise/api/sms-category.html",document.getElementById("terms-link").href="/docs/1.0/enterprise/terms.html"):(document.getElementsByTagName("html")[0].classList.add("csp-persona"),e.href=window.location.protocol+"//"+window.location.host+"/docs/1.0",document.getElementById("footer-voice-link").href="/docs/1.0/programmable.html",document.getElementById("footer-sms-link").href="/docs/1.0/programmable.html",document.getElementById("terms-link").href="/docs/1.0/support.html")}const o=new URLSearchParams(window.location.search);if(o.has("wl-domain")&&o.get("wl-domain").match(/^[\w-]+\.restcomm\.com$/)&&window.sessionStorage.setItem("wl-domain",o.get("wl-domain")),("restcomm.com"!==window.location.hostname&&"www.restcomm.com"!==window.location.hostname&&"dev.restcomm.com"!==window.location.hostname&&"staging-cpaas-enablement-docs.restcomm.com"!==window.location.hostname&&"cpaas-enablement-docs.restcomm.com"!==window.location.hostname&&"localhost"!==window.location.hostname||window.sessionStorage.getItem("wl-domain"))&&document.getElementsByTagName("html")[0].classList.contains("enterprise-persona")){let e=Array.prototype.slice.call(document.getElementsByTagName("link")).find(e=>"icon"===e.getAttribute("rel"));e&&(e.href="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==");const t="wl-settings";let o;(o=window.sessionStorage.getItem(t))?handleWhitelabeling(JSON.parse(o)):document.getElementsByTagName("body")[0].style.display="none";let n=window.location.hostname,s=window.location.protocol;window.sessionStorage.getItem("wl-domain")&&(n=window.sessionStorage.getItem("wl-domain"),s="https:"),fetch(s+"//"+n+"/sps/public").then(e=>e.json()).then(e=>{window.sessionStorage.setItem(t,JSON.stringify(e)),"none"===document.getElementsByTagName("body")[0].style.display&&handleWhitelabeling(e)}).catch(e=>{console.error("Fetching of whitelabeling settings failed; falling back to default styles. Reason: "+e),handleWhitelabeling(null)})}document.getElementsByTagName("html")[0].classList.contains("csp-persona")&&(document.getElementsByTagName("body")[0].style.display="block");const n=document.querySelector("a.header-logo-link");null!==n&&n.addEventListener("click",function(){window.sessionStorage.removeItem("active-enterprise-tab")});const s=document.querySelector("button.navbar-enterprise-burger");null!==s&&s.addEventListener("click",function(e){e.stopPropagation();const t=document.querySelector(".navbar-enterprise-container");null!==t&&(t.classList.toggle("is-active"),s.classList.toggle("is-active"))}),document.getElementsByTagName("body")[0].addEventListener("click",function(){const e=document.querySelector("button.navbar-enterprise-burger"),t=document.querySelector(".navbar-enterprise-container");t&&e&&t.classList.contains("is-active")&&e.classList.contains("is-active")&&(t.classList.toggle("is-active"),e.classList.toggle("is-active"))})});