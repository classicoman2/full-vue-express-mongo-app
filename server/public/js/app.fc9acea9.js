(function(t){function e(e){for(var r,u,i=e[0],a=e[1],l=e[2],s=0,d=[];s<i.length;s++)u=i[s],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&d.push(c[u][0]),c[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);b&&b(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var a=n[u];0!==c[a]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},c={app:0},o=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ef88f5c4"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=c[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=c[t]=[e,r]}));e.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=u(t);var l=new Error;o=function(e){a.onerror=a.onload=null,clearTimeout(s);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}c[t]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var b=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3785:function(t,e,n){"use strict";n("4570")},4570:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"nav"},o=Object(r["g"])("Home"),u=Object(r["g"])(" | "),i=Object(r["g"])("About");function a(t,e){var n=Object(r["v"])("router-link"),a=Object(r["v"])("router-view");return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",c,[Object(r["h"])(n,{to:"/"},{default:Object(r["A"])((function(){return[o]})),_:1}),u,Object(r["h"])(n,{to:"/about"},{default:Object(r["A"])((function(){return[i]})),_:1})]),Object(r["h"])(a)],64)}n("3785");var l=n("6b0d"),s=n.n(l);const b={},d=s()(b,[["render",a]]);var f=d,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),h=(n("b0c0"),{class:"table"}),j=Object(r["e"])("thead",null,[Object(r["e"])("tr",null,[Object(r["e"])("th",{scope:"col"},"id"),Object(r["e"])("th",{scope:"col"},"Name"),Object(r["e"])("th",{scope:"col"},"Birth Date"),Object(r["e"])("th",{scope:"col"},"Height"),Object(r["e"])("th",{scope:"col"},"weight"),Object(r["e"])("th",{scope:"col"},"Delete?")])],-1),O={id:"afegirAqui"},m=["onClick"],v=Object(r["f"])('<div class="container"><div class="form-group"><label for="name">Name</label><input type="text" class="form-control" id="name" placeholder="Enter name"></div><button id="submit" class="btn btn-secondary">Submit</button></div>',1);function y(t,e,n,c,o,u){return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("table",h,[j,Object(r["e"])("tbody",O,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["u"])(o.cyclists,(function(t){return Object(r["q"])(),Object(r["d"])("tr",{key:t.id},[Object(r["e"])("td",null,Object(r["x"])(t._id.substr(0,5)),1),Object(r["e"])("td",null,Object(r["x"])(t.name),1),Object(r["e"])("td",null,Object(r["x"])(String(t.birth_date).substr(0,9)),1),Object(r["e"])("td",null,Object(r["x"])(t.height),1),Object(r["e"])("td",null,Object(r["x"])(t.weight),1),Object(r["e"])("td",null,[Object(r["e"])("button",{onClick:function(e){return u.removeCyclist(t._id)}},"Delete",8,m)])])})),128))])]),v],64)}var g=n("1da1"),w=(n("96cf"),n("99af"),n("d9e2"),n("c740"),n("a434"),{name:"Home",data:function(){return{api_url:"http://localhost:5000/api",cyclists:[]}},methods:{getCyclistsAll:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="".concat(t.api_url,"/cyclists"),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,t.cyclists=c,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),console.error("Error en getCyclists:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},removeCyclist:function(t){fetch("".concat(this.api_url,"/cyclists/delete/").concat(t),{method:"DELETE"}).then((function(t){if("200"!=t.status)throw new Error(t.status);console.log("Ciclista Eliminat"),t.text()})).then((function(t){return console.log(t)}));var e=this.cyclists.findIndex((function(e){return t==e._id}));this.cyclists.splice(e,1)}},mounted:function(){this.getCyclistsAll()}});const x=s()(w,[["render",y]]);var _=x,k=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],C=Object(p["a"])({history:Object(p["b"])("/"),routes:k}),E=C,P=n("5502"),A=Object(P["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(f).use(A).use(E).mount("#app")}});
//# sourceMappingURL=app.fc9acea9.js.map