!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var o=document.getElementById("navigation"),r=document.getElementById("main-view"),i=o.offsetHeight;r.style.height="".concat(window.innerHeight-i,"px");var a=document.querySelectorAll("[data-target]");a[0].addEventListener("click",(function(){document.getElementById("projectName").addEventListener("submit",(function(){var e=document.getElementById("projects-container"),t=document.getElementById("pName").value,n=document.createElement("p");document.getElementById("pName").value="",n.innerText=t,e.appendChild(n),console.log(n),$("#projectModal").modal("toggle")}))}),{once:!0}),a[1].addEventListener("click",(function(){document.getElementById("taskForm").addEventListener("submit",(function(){var e=document.getElementById("tasks-container"),t=document.createElement("p"),n=document.getElementById("tTitle").value;document.getElementById("tDescription").value,document.getElementById("tDueDate").value,document.getElementById("tPriority").value,document.getElementById("tProject").value;t.innerHTML=n,e.appendChild(t),$("#todoModal").modal("toggle")}))}),{once:!0})},function(e,t,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],c=n[s]||0,d="".concat(s," ").concat(c);n[s]=c+1;var u=l(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:h(f,t),references:1}),o.push(d)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,g=0;function h(e,t){var n,o,r;if(t.singleton){var i=g++;n=m||(m=c(t)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=c(t),o=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=l(n[o]);a[r].references--}for(var i=s(e,t),c=0;c<n.length;c++){var d=l(n[c]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}n=i}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,'*{padding:0;margin:0;box-sizing:border-box}html{font-size:62.5%;font-family:"Roboto", sans-serif}.regular{font-family:"Roboto", sans-serif}.bold{font-family:"Roboto", sans-serif;font-size:700}.light{font-family:"Roboto", sans-serif;font-size:300}.no-gutter>[class*="col-"]{padding:0}#navigation{padding:0.8rem;background-color:#dc4c3f;color:white;font-size:2.5rem}.projects-title,.tasks-title{display:flex;width:100%;font-weight:700;align-items:center}.left-panel{padding:1.2rem;height:100%;border-right:1px solid lightgrey;background-color:#f5f5f5}.left-panel .project-manager,.left-panel .task-manager{max-height:50%}.left-panel .projects-head,.left-panel .tasks-head{font-size:1.8rem;align-items:center;border-top:1px solid lightgray;border-bottom:1px solid lightgray}.left-panel .projects-head i,.left-panel .tasks-head i{color:#727272;font-size:1.6rem}.left-panel .projects-head i:hover,.left-panel .tasks-head i:hover{color:#4c4c4c}.left-panel #projects-container,.left-panel #tasks-container{height:auto;overflow-y:auto}.left-panel #projects-container p,.left-panel #tasks-container p{font-size:1.6rem}.tasks{height:100%;padding:2rem !important}.tasks .big-titles{font-size:2.25rem;font-weight:bold}.tasks #pending,.tasks #completed{font-size:1.6rem}.tasks .todo-display{height:95%}.tasks .todo-display #pending,.tasks .todo-display #completed{max-height:43%;overflow-y:auto}.tasks .todo{display:flex;align-items:center;width:100%;padding:1rem 0;border-bottom:1px solid #e5e5e5}.tasks .todo .todo-priority{width:10%;font-size:2rem}.tasks .todo .info-wrapper{width:75%;display:flex;flex-direction:row}.tasks .todo .info-wrapper>*{text-align:left}.tasks .todo .info-wrapper .todo-title{width:25%}.tasks .todo .info-wrapper .todo-description{width:75%}.tasks .todo .todo-due-date{width:15%;margin-left:auto}.modal>*{font-size:16px}.modal>* .modal-title{font-size:18px;font-weight:700}.modal>* input,.modal>* select{font-size:16px}.modal>* .btn{font-size:16px}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,l,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}}]);