(()=>{"use strict";var e={424:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=Quicksand:wght@400;500&family=Roboto&display=swap);"]),a.push([e.id,':root {\n  --bg: #212121;\n  --side-clr: #111827;\n  --drk-clr: #030712;\n}\n\nbody {\n  font-family: "Inter";\n  color: black;\n  background-color: white;\n}\n.task-container {\n  display: flex;\n  align-items: start;\n  justify-content: start;\n  width: 100vw;\n  height: 15vh;\n  padding-left: 30%;\n}\n\n.add-task {\n  background-color: white;\n  color: black;\n  font-weight: 500;\n}\n#task-add {\n  border-radius: 15px;\n  border: solid white 1px;\n  background-color: white;\n  color: black;\n  font-weight: 500;\n  font-size: 1.4rem;\n}\n#task-add:hover {\n  color: cyan;\n  cursor: pointer;\n}\n\n.modal {\n  display: none;\n  width: 25vw;\n  height: 50vh;\n  color: black;\n  background-color: white;\n  border-radius: 15px;\n}\n\ndialog[open] {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  gap: 20px;\n}\ninput {\n  height: 25px;\n  border-radius: 35px;\n  background-color: #d0d0d0;\n  padding-left: 10px;\n  border: none;\n}\n.entry {\n  display: flex;\n  flex-direction: column;\n}\n#close-modal {\n  height: 25px;\n  margin-top: 10px;\n  color: white;\n  background-color: var(--drk-clr);\n  border: none;\n  border-radius: 35px;\n}\n#submit {\n  margin-top: 10px;\n  height: 25px;\n  color: white;\n  background-color: var(#212121);\n  border: none;\n  border-radius: 35px;\n}\n#close-modal:hover,\n#submit:hover {\n  cursor: pointer;\n}\n\n.task {\n  width: 20vw;\n  height: 50vh;\n  background-color: ghostwhite;\n  color: black;\n  border: 1px solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border-radius: 25px;\n  text-align: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.task-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 25px;\n}\n\n.line-break {\n  border-top: solid 0.5px black;\n  width: 40vw;\n}\n.uiDiv {\n  display: flex;\n  justify-content: space-between;\n  align-items: space-between;\n}\n',""]);const c=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=r(e,o),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),d=t.n(c),s=t(216),l=t.n(s),u=t(589),p=t.n(u),f=t(424),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;let m=document.querySelector("#title"),v=document.querySelector("#description"),y=document.querySelector("#date"),g=document.querySelector("#priority"),b=document.querySelector("#notes");document.createElement("div"),document.querySelector(".task-div");class x{constructor(e,n,t,r,o,i){this.title=e,this.description=n,this.dueDate=t,this.priority=r,this.notes=o,this.checklist=i}}let w=m.value,k=v.value,L=y.value,S=g.value,E=b.value,M=[],A=document.querySelector(".task-div");let T=document.querySelector("#submit");const C=document.querySelector("#close-modal"),q=document.querySelector(".modal");document.querySelector("#task-add").addEventListener("click",(function(){q.setAttribute("open","true")})),C.addEventListener("click",(()=>{q.removeAttribute("open")})),T.addEventListener("click",(e=>{e.preventDefault(),function(){0==m.length&&(m.textContent="You cant do this"),S=S<3?"Not that urgent":3==S?"Normal":"Very urgent";let e=new x(w,k,L,S,E);M.push(e),function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div");i.classList.add("uiDiv"),M.forEach((a=>{e.innerHTML="",e.classList.add("task"),i.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alpha-x-circle-outline</title><path d="M9,7H11L12,9.5L13,7H15L13,12L15,17H13L12,14.5L11,17H9L11,12L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" /></svg>',A.appendChild(e),n.innerHTML=`Task<br>${a.title}`,t.innerHTML=`Description<br>${a.description}`,r.innerHTML=`Due Date<br>${a.dueDate}`,o.innerHTML=`Priority<br>${a.priority}`,e.appendChild(i),e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(o)}))}()}(),q.removeAttribute("open")}))})()})();