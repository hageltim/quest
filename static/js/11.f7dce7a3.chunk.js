(this.webpackJsonpquest=this.webpackJsonpquest||[]).push([[11],{104:function(e,t,n){},184:function(e,t,n){},232:function(e,t,n){"use strict";n.r(t),n.d(t,"CluePage",(function(){return S}));var a=n(0),r=n.n(a),c=n(44),u=n(14),l=(n(104),function(e){var t=e.clueId,n=e.answer,l=e.onChange,s=Object(a.useState)(Object(c.a)(n).map((function(e){return""}))),i=Object(u.a)(s,2),o=i[0],m=i[1],f=Object(c.a)(n).map((function(e){return r.a.createRef()}));Object(a.useEffect)((function(){m(Object(c.a)(n).map((function(e){return""})))}),[n,t]);var d=function(e,t,n){var a=Object(c.a)(o);if(a[e]=n,m(a),l(a.join("").trim()),n){var r=f[e+1];r&&r.current&&(r.current.focus(),r.current.select())}},b=!1,E=function(e){return function(t){8===t.keyCode&&(b||(b=!0,!f[e].current.value&&e-1>=0&&(f[e-1].current.focus(),d(e-1))))}},v=function(e){8===e.keyCode&&(b=!1)};return r.a.createElement("div",null,Object(c.a)(n).map((function(e,t){return r.a.createElement("span",{key:t,className:"CharacterInputWrapper"},r.a.createElement("input",{className:"CharacterInput",type:"text",maxLength:1,onChange:(n=t,function(e){d(n,0,e.target.value)}),onKeyDown:E(t),onKeyUp:v,ref:f[t],value:o[t]}));var n})))}),s=n(56),i=n(84),o=n.n(i),m=n(41),f=function(e){var t=e.clueData,n=e.onSolved,i=e.onNextButtonClicked,f=Object(a.useState)([]),d=Object(u.a)(f,2),b=d[0],E=d[1],v=Object(a.useState)(null),O=Object(u.a)(v,2),j=O[0],p=O[1],h=Object(a.useState)(null),w=Object(u.a)(h,2),C=w[0],g=w[1],A=Object(a.useState)(null),y=Object(u.a)(A,2),N=y[0],S=y[1],I=function(){return(t.answers||[]).length>0};Object(a.useEffect)((function(){S(t.id);var e=Object(m.b)().completedClues.some((function(e){return e===t.id}));g(e),E(e?t.answers:[]),p(null),I()||n(t.id)}),[t]);var x=function(e){return function(t){var n=Object(c.a)(b);n[e]=t,E(n)}},k=function(){for(var e=!0,a=0;a<t.answers.length;a++){if(!b[a]){e=!1;break}if(t.answers[a].toLowerCase()!==b[a].toLowerCase()){e=!1;break}}p(e),e&&n(t.id)};return N!==t.id?null:r.a.createElement("div",null,t.clue&&r.a.createElement(o.a,{source:t.clue}),t.question&&r.a.createElement(o.a,{source:t.question}),r.a.createElement("br",null),!C&&t.webAnswer&&r.a.createElement("div",null,t.answers.map((function(e,n){return r.a.createElement(l,{key:n,clueId:t.id,answer:t.answers[n],onChange:x(n)})})),r.a.createElement("br",null),function(){var e=t.answers&&null!=j;return r.a.createElement("div",{className:"center"},e&&!j&&r.a.createElement("h3",null,"Try again!"),e&&j&&t.successMessage&&r.a.createElement(o.a,{source:t.successMessage}),!j&&I()&&r.a.createElement("button",{onClick:k,className:"primary mt-2"},"Submit"))}(),!C&&r.a.createElement(s.a,{active:j})),C&&t.answers.map((function(e){return r.a.createElement("h3",{key:e},e)})),(j||C||!I())&&r.a.createElement("button",{onClick:i,className:"center primary mt-2"},"Next"))},d=n(46),b=n.n(d),E=n(47),v=(n(184),n(59)),O=function(e){var t=e.start,n=e.value,c=e.onChange,l=["red","orange","yellow","lightblue","blue","purple","pink","white"],s=Object(a.useState)(t),i=Object(u.a)(s,2),o=i[0],m=i[1];Object(a.useEffect)((function(){f()}),[o,n]);var f=function(){var e=Object(E.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)((r=800,c=1200,Math.floor(Math.random()*(c-r))+r));case 2:n||(t=0,a=l.findIndex((function(e){return e===o})),l.length>a+1&&(t=a+1),m(l[t]));case 3:case"end":return e.stop()}var r,c}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"cut-diamond",className:n||o,onClick:function(){c(n?null:o)}},n?"\u2727":null)},j=n(227),p=n(228),h=function(e){var t=e.clueData,n=e.onSolved,l=(e.onNextButtonClicked,Object(a.useState)([])),s=Object(u.a)(l,2),i=s[0],f=s[1],d=Object(a.useState)(null),b=Object(u.a)(d,2),E=b[0],v=b[1],h=Object(a.useState)(!1),w=Object(u.a)(h,2),C=w[0],g=w[1],A=Object(a.useState)(!1),y=Object(u.a)(A,2),N=y[0],S=y[1],I=Object(a.useState)(!1),x=Object(u.a)(I,2),k=x[0],D=x[1],Y=Object(a.useState)(!1),T=Object(u.a)(Y,2),M=T[0],R=T[1];Object(a.useEffect)((function(){f([]),v(null),g(!0)}),[t]),Object(a.useEffect)((function(){E&&(setTimeout((function(){S(!0)}),100),setTimeout((function(){D(!0)}),1100),setTimeout((function(){R(!0)}),2100))}),[E]);var K=function(e,a){var r=Object(c.a)(i);r[e]=a,f(r),t.answers.every((function(e,t){return!!r[t]}))&&function(e){for(var a=!0,r=0;r<t.answers.length;r++){if(!e[r]){a=!1;break}if(t.answers[r].toLowerCase()!==e[r].toLowerCase()){a=!1;break}}if(a)v(a),n(t.id);else{var c=Object(m.b)();c.deathDate=new Date,Object(m.c)(c),window.location.reload(!1)}}(r)};return C?r.a.createElement("div",null,t.clue&&r.a.createElement(o.a,{source:t.clue}),t.question&&r.a.createElement(o.a,{source:t.question}),r.a.createElement("br",null),t.webAnswer&&r.a.createElement("div",null,r.a.createElement("div",{className:"diamond-wrapper mb-4"},r.a.createElement(O,{start:"red",value:i[0],onChange:function(e){return K(0,e)}}),r.a.createElement(O,{start:"blue",value:i[1],onChange:function(e){return K(1,e)}}),r.a.createElement(O,{start:"yellow",value:i[2],onChange:function(e){return K(2,e)}})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(j.a,{className:E?"fadeIn mb-4":"fadeOut"},r.a.createElement(p.a,{className:"center"},r.a.createElement("h3",{className:N?"fadeIn":"fadeOut"},"ZIP")),r.a.createElement(p.a,{className:"center"},r.a.createElement("h3",{className:k?"fadeIn":"fadeOut"},"ZAP")),r.a.createElement(p.a,{className:"center"},r.a.createElement("h3",{className:M?"fadeIn":"fadeOut"},"ZOP"))),function(){if(E&&t.successMessage)return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{source:t.successMessage}))}()))):null},w=function(){return r.a.createElement("div",null,"Clue does not exist")},C=n(43),g=n(20),A=n(49),y=n(2),N=n(78),S=function(e){var t=Object(a.useContext)(g.b),n=Object(y.f)(),c=t.dispatch,u=e.match.params.id,l=C.a.find((function(e){return e.id===u}));Object(a.useEffect)((function(){return l&&c({type:"SET_HINT",payload:l.hint}),function(){c({type:"SET_HINT",payload:null})}}),[l,e.match,c]);var s=function(){var e=C.a.findIndex((function(e){return e.id===u}));if(e+1<C.a.length){var t=C.a[e+1];n.push("/clue/".concat(t.id))}},i=function(e){Object(m.e)(e)};if(!l)return r.a.createElement(w,null);var o=function(){var e=C.a.findIndex((function(e){return e.id===u}));if(e-1>=0)return C.a[e-1]}();return r.a.createElement("div",{className:"ClueWrapper Page"},r.a.createElement(A.a,null,o&&r.a.createElement("button",{style:{fontSize:"14px"},onClick:function(){n.push("/clue/".concat(o.id))}},"\u2190 Previous Clue"),function(e){switch(e){case"gem-clue":return r.a.createElement(h,{clueData:l,onSolved:i,onNextButtonClicked:s});case"basic":default:return r.a.createElement(f,{clueData:l,onSolved:i,onNextButtonClicked:s})}}(l.type),r.a.createElement(N.a,null)))};t.default=S},48:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAABQUlEQVRo3u2aQRaDIAwFSb2YnBwuVtOdpZYIKCAkYdNs+mCYDyoKiGg4NlAwTmAA8ELELazDX2OMidWI+M7pe0ZjODSYGsu3tDdrv7Vz9SF/wGJWco1lWnoGjK2x1jA9IW9FsTR+j4GJNpYDEw40bN5/x0xNaC3IK8a6ghGTm9ylZRg7Abu8lZeC1YLMjeIQYC2iOLexUjAKoLRRwI9FsTdYtyhOY0yjqFGc1BhAvK91xSQA2VELYyODeQ8L8eS+yTVmbRzAuevPV7XuPE7W58ISjNpU5BkrHURrsPC/4Ro+rNuFJRgiQjKKaix1B0BcEhRspCiKMFbrIFU0WNcoDmdsliYCLCuKrIwZMx/Y4XLCE4yMohpTMI1iW2MAMPWncKQxDmD7cZwIYwW5Pn2TH9Y5X8vdqe+eBI++gfxPKFdjH34U5Cae/RiyAAAAAElFTkSuQmCC"},49:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(14),u=n(55),l=n(48),s=n.n(l),i=n(41),o=function(e){var t=e.children,n=Object(a.useState)(null),l=Object(c.a)(n,2),o=l[0],m=l[1];Object(a.useEffect)((function(){var e=Object(i.b)(),t=e.deathDate&&new Date(e.deathDate);if(t){var n=f(t);d(n)&&m(n)}}),[]);var f=function(e){var t=new Date(e);return t.setSeconds(e.getSeconds()+10),t},d=function(e){return new Date<e};return o?r.a.createElement("div",{className:"center"},r.a.createElement("img",{className:"maze-result",src:s.a,alt:"Hero Failed"}),r.a.createElement("div",null,r.a.createElement("strong",null,"You died")),r.a.createElement("br",null),r.a.createElement("div",null,"Respawn in\xa0",r.a.createElement(u.a,{date:o,renderer:function(e){e.hours,e.minutes;var t=e.seconds;return r.a.createElement("span",null,t.toString().padStart(2,"0"))},onComplete:function(){m(null)}}))):r.a.createElement(r.a.Fragment,null,t)},m=function(e){var t=e.children,n=Object(a.useState)(!1),u=Object(c.a)(n,2),l=u[0],s=u[1],o=Object(a.useState)(),m=Object(c.a)(o,2),f=m[0],d=m[1],b=Object(a.useState)(null),E=Object(c.a)(b,2),v=E[0],O=E[1];Object(a.useEffect)((function(){var e=Object(i.b)().name;e&&p(e)&&(d(e),O(!0)),s(!0)}),[]);var j=function(e){d(e.target.value)},p=function(e){var t=e&&e.toLowerCase();return["daniella","dani","elli","ellaadventure"].some((function(e){return t}))},h=function(e){p(f)?(Object(i.d)(f),O(!0)):O(!1)};return l?r.a.createElement(r.a.Fragment,null,v?null:r.a.createElement("div",{className:"center"},r.a.createElement("p",null,"To begin, enter your name"),r.a.createElement("input",{type:"test",onChange:j}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:h,className:"primary"},"Enter")),!1===v&&r.a.createElement("div",null,"You are not the true hero. Only the chosen adventurer may enter."),!0===v&&t):null};t.a=function(e){var t=e.children;return r.a.createElement("div",{className:"Gate"},r.a.createElement(m,null,r.a.createElement(o,null,t)))}},56:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(66),u=n.n(c);t.a=function(e){var t=e.active;return r.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},r.a.createElement(u.a,{active:t,config:{spread:120,angle:90}}))}}}]);
//# sourceMappingURL=11.f7dce7a3.chunk.js.map