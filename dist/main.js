(()=>{"use strict";var e={424:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=Quicksand:wght@400;500&family=Roboto&display=swap);"]),a.push([e.id,':root {\n  --bg: #212121;\n  --side-clr: #111827;\n  --drk-clr: #030712;\n}\n\nbody {\n  width: 100vw;\n  font-family: "Inter";\n  color: black;\n  background-color: white;\n}\n.task-container {\n  display: flex;\n  align-items: start;\n  justify-content: start;\n  width: 100vw;\n  height: 15vh;\n  padding-left: 30%;\n}\n\n.add-task {\n  background-color: white;\n  color: black;\n  font-weight: 500;\n}\n#task-add {\n  border-radius: 15px;\n  border: solid white 1px;\n  background-color: white;\n  color: black;\n  font-weight: 500;\n  font-size: 1.4rem;\n}\n#task-add:hover {\n  color: cyan;\n  cursor: pointer;\n}\n\n.modal {\n  display: none;\n  width: 25vw;\n  height: 50vh;\n  color: black;\n  background-color: white;\n  border-radius: 15px;\n}\n\ndialog[open] {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  gap: 20px;\n}\ninput {\n  height: 25px;\n  border-radius: 35px;\n  background-color: #d0d0d0;\n  padding-left: 10px;\n  border: none;\n}\n.entry {\n  display: flex;\n  flex-direction: column;\n}\n#close-modal {\n  height: 25px;\n  margin-top: 10px;\n  color: white;\n  background-color: var(--drk-clr);\n  border: none;\n  border-radius: 35px;\n}\n#submit {\n  margin-top: 10px;\n  height: 25px;\n  color: white;\n  background-color: var(#212121);\n  border: none;\n  border-radius: 35px;\n}\n#close-modal:hover,\n#submit:hover {\n  cursor: pointer;\n}\n\n.task {\n  width: 75vw;\n  height: 10vh;\n  background-color: ghostwhite;\n  color: black;\n  border: 1px solid;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  text-align: center;\n  flex-wrap: wrap;\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  gap: 10px;\n  margin-left: 0px;\n}\n\n.task-div {\n  display: flex;\n  align-items: start;\n  justify-content: end;\n  flex-direction: column;\n  margin-left: 15vw;\n  gap: 25px;\n}\n\n.line-break {\n  border-top: solid 0.5px black;\n  width: 40vw;\n}\n.uiDiv {\n  height: 20px;\n  width: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: space-between;\n}\n\n.task-line {\n  border-top: solid 0.2px gray;\n}\n.side-section {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 200px;\n  height: 100vh;\n  background-color: var(--side-clr);\n  color: white;\n  padding: 20px;\n}\n\n.side-section h2 {\n  margin-bottom: 10px;\n}\n\n.task-type {\n  list-style: none;\n}\n',""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(424),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;let m=JSON.parse(localStorage.getItem("tasks"))||[],v=document.querySelector(".task-div");class y{constructor(e,n,t,r,o,i){this.title=e,this.description=n,this.dueDate=t,this.priority=r,this.notes=o,this.checklist=i}}function g(){v.innerHTML="",m.forEach(((e,n)=>{const t=document.createElement("div");t.classList.add("task");const r=document.createElement("div");r.innerHTML=`Task<br><hr class='task-line'>${e.title}`;const o=document.createElement("div");""===e.description?o.innerHTML="":o.innerHTML=`Description<br><hr class='task-line'>${e.description}`;const i=document.createElement("div");i.innerHTML=`Due Date<br><hr class='task-line'>${e.dueDate}`;const a=document.createElement("div");a.innerHTML=`Priority<br><hr class='task-line'>${e.priority}`;const c=document.createElement("div");c.classList.add("uiDiv");const s=document.createElement("button");s.classList.add("del-btn"),s.textContent="Delete",s.addEventListener("click",(()=>function(e){m.splice(e,1),g(),b()}(n)));const d=document.createElement("input");d.setAttribute("type","checkbox"),d.checked=e.completed,d.addEventListener("change",(()=>toggleTaskCompletion(n))),c.appendChild(s),t.appendChild(r),t.appendChild(o),t.appendChild(i),t.appendChild(a),t.appendChild(c),t.appendChild(d),v.appendChild(t)}))}function b(){localStorage.setItem("tasks",JSON.stringify(m))}g();const x=document.querySelector("#task-add"),k=document.querySelector("#close-modal"),w=document.querySelector(".modal"),S=document.querySelector("#submit");function E(){w.removeAttribute("open")}x.addEventListener("click",(function(){w.setAttribute("open","true")})),k.addEventListener("click",E),S.addEventListener("click",(e=>{e.preventDefault(),function(){let e=document.querySelector("#title"),n=document.querySelector("#description"),t=document.querySelector("#date"),r=document.querySelector("#priority"),o=document.querySelector("#notes"),i=e.value,a=n.value,c=t.value,s=r.value,d=o.value;if(0===i.length)return void(e.value="You can't do this");let l=new y(i,a,c,s,d,[]);m.push(l),g(),function(){let e=document.querySelector("#title"),n=document.querySelector("#description"),t=document.querySelector("#date"),r=document.querySelector("#priority"),o=document.querySelector("#notes");e.value="",n.value="",t.value="",r.value="",o.value=""}(),b()}(),E()}))})()})();