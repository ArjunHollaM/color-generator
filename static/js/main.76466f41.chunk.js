(this["webpackJsonpcolor-generator"]=this["webpackJsonpcolor-generator"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(6),i=c.n(a),r=(c(11),c(5)),l=c(2),s=c(0),j=function(e){var t=e.rgb,c=e.weight,o=e.index,a=e.hexColor,i=e.colorvariation,r=(e.num,Object(n.useState)(!1)),j=Object(l.a)(r,2),d=j[0],b=j[1],u=t.join(","),O="#".concat(a);return Object(n.useEffect)((function(){var e=setTimeout((function(){b(!1)}),3e3);return function(){return clearTimeout(e)}}),[d]),Object(s.jsxs)("article",{className:"color ".concat(o>i&&"color-light"),style:{backgroundColor:"rgb(".concat(u,")")},onClick:function(){b(!0),navigator.clipboard.writeText(O)},children:[Object(s.jsxs)("p",{className:"percent-value",children:[c,"%"]}),Object(s.jsx)("p",{className:"color-value",children:O}),d&&Object(s.jsx)("p",{className:"alert",children:"copied to clipboard"})]})},d=c(4),b=c.n(d);var u=function(){var e,t=Object(n.useState)("#700b97"),c=Object(l.a)(t,2),o=c[0],a=c[1],i=Object(n.useState)(!1),d=Object(l.a)(i,2),u=d[0],O=d[1],h=Object(n.useState)(10),m=Object(l.a)(h,2),x=m[0],p=m[1],f=Object(n.useState)(new b.a("#700b97").all(x)),g=Object(l.a)(f,2),N=g[0],v=g[1],w=Object(n.useState)(10),C=Object(l.a)(w,2),k=C[0],S=C[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("section",{className:"navbar",children:[Object(s.jsx)("div",{children:Object(s.jsx)("h3",{children:"color generator"})}),Object(s.jsxs)("form",{className:"buttons",onSubmit:function(t){t.preventDefault(),O(!1);try{e=new b.a(o).all(x),v(e),console.log(e)}catch(u){O(!0),console.log(u)}},children:[Object(s.jsx)("input",{type:"text",value:o,onChange:function(e){return a(e.target.value)},placeholder:"#700b97",className:"".concat(u?"error":null)}),Object(s.jsx)("button",{className:"btn",type:"submit",children:"submit"}),Object(s.jsx)("input",{className:"colorPicker",type:"color",onChange:function(e){a(e.target.value)},value:o}),Object(s.jsx)("button",{className:"btn",onClick:function(){var e="#"+Math.floor(16777215*Math.random()).toString(16);a(e)},children:"Generate Random Color"}),Object(s.jsxs)("button",{className:"btn dropdown",children:[Object(s.jsx)("div",{className:"dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Select Variation"}),Object(s.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(s.jsx)("li",{children:Object(s.jsx)("i",{className:"dropdown-item",onClick:function(){p(1),S(100)},children:"1%"})}),Object(s.jsx)("li",{children:Object(s.jsx)("i",{className:"dropdown-item",onClick:function(){p(2),S(50)},children:"2%"})}),Object(s.jsx)("li",{children:Object(s.jsx)("i",{className:"dropdown-item",onClick:function(){p(3),S(33)},children:"3%"})}),Object(s.jsx)("li",{children:Object(s.jsx)("i",{className:"dropdown-item",onClick:function(){p(4),S(25)},children:"4%"})}),Object(s.jsx)("li",{children:Object(s.jsx)("i",{className:"dropdown-item",onClick:function(){p(5),S(20)},children:"5%"})}),Object(s.jsx)("li",{children:Object(s.jsx)("i",{className:"dropdown-item",onClick:function(){p(10),S(10)},children:"10%"})}),Object(s.jsx)("li",{children:Object(s.jsx)("i",{className:"dropdown-item",onClick:function(){p(20),S(5)},children:"20%"})})]})]})]})]}),Object(s.jsx)("section",{className:"colors",children:N.map((function(e,t){return Object(s.jsx)(j,Object(r.a)(Object(r.a)({},e),{},{index:t,hexColor:e.hex,colorvariation:k}),t)}))})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),o(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),O()}},[[13,1,2]]]);
//# sourceMappingURL=main.76466f41.chunk.js.map