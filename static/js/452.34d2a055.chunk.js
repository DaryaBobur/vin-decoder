"use strict";(self.webpackChunkvin_decoder=self.webpackChunkvin_decoder||[]).push([[452],{411:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(87),a=t(184),s=[{href:"/",text:"General"},{href:"/variables",text:"Variables"}],i=function(){return(0,a.jsx)("header",{className:"header",children:(0,a.jsx)("ul",{className:"nav-list",children:s.map((function(e){var n=e.href,t=e.text;return n.includes("/variables")?(0,a.jsx)("li",{className:"nav-list__item",children:(0,a.jsx)(r.OL,{to:n,className:"nav-list__link",children:t})},n):(0,a.jsx)("li",{className:"nav-list__item",children:(0,a.jsx)(r.OL,{to:n,className:"nav-list__link",end:!0,children:t})},n)}))})})}},995:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(691),a=t(184),s=function(){return(0,a.jsx)("div",{className:"loader",children:(0,a.jsx)(r.Yt,{visible:!0,height:"100",width:"100",color:"black"})})}},452:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(861),a=t(439),s=t(757),i=t.n(s),c=t(791),u=t(689),l=t(411),o=t(995),v=t(509),f=t(184),d=function(e){var n=e.items.data.Results;return 0===n.length?(0,f.jsx)("p",{className:"text",children:"No details!"}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{className:"title",children:"All values:"}),(0,f.jsx)("ul",{className:"value-list",children:n.map((function(e){var n=e.ElementName,t=e.Name;return(0,f.jsx)("li",{className:"value-list__item",children:(0,f.jsxs)("p",{children:[n," - ",t]})},t)}))})]})},h=t(0),p=function(){var e,n,t=(0,c.useState)(null),s=(0,a.Z)(t,2),p=s[0],x=s[1],m=(0,c.useState)(null),j=(0,a.Z)(m,2),b=j[0],k=j[1],N=(0,c.useState)(!1),Z=(0,a.Z)(N,2),g=Z[0],_=Z[1],w=(0,u.UO)().variableId,y=(0,u.s0)(),S=null!==(e=null===(n=(0,u.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/variables";(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=2;break}return e.abrupt("return");case 2:return _(!0),e.prev=3,e.next=6,(0,v.Vv)({variableId:w});case 6:n=e.sent,x(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),k(e.t0);case 13:return e.prev=13,_(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[w]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{}),p&&(0,f.jsxs)("button",{className:"btn-back",type:"button",onClick:function(){return y(S)},children:[(0,f.jsx)(h.lq4,{fontSize:16})," go back"]}),p&&(0,f.jsx)(d,{items:p}),g&&(0,f.jsx)(o.Z,{}),b&&(0,f.jsx)("p",{children:"Please try again later!"}),(0,f.jsx)(c.Suspense,{fallback:(0,f.jsx)(o.Z,{}),children:(0,f.jsx)(u.j3,{})})]})}},509:function(e,n,t){t.d(n,{Vv:function(){return o},k4:function(){return u},vT:function(){return l}});var r=t(861),a=t(757),s=t.n(a),i=t(243),c="https://vpic.nhtsa.dot.gov/api",u=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.vin,r=void 0===t?"":t,e.next=3,i.Z.get("".concat(c,"/vehicles/decodevin/").concat(r,"?format=json"));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"/vehicles/getvehiclevariablelist?format=json"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.variableId,e.next=3,i.Z.get("https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablevalueslist/".concat(t,"?format=json"));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=452.34d2a055.chunk.js.map