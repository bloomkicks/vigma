(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[941],{1177:function(e,r,t){"use strict";var n=t(2809),o=t(1164),c=t(1281),i=t.n(c),s=t(5893),a=["children","className"];function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=e.children,t=e.className,n=(0,o.Z)(e,a);return(0,s.jsx)("button",u(u({},n),{},{className:"".concat(i().Button," ").concat(t),children:r}))}},1299:function(e,r,t){"use strict";var n=t(2809),o=t(1164),c=t(7294),i=t(3033),s=t.n(i),a=t(5893),p=["children"];function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var f=function(e){var r=e.children,t=(0,o.Z)(e,p);return(0,a.jsx)("div",l(l({id:"backdrop",className:s().Backdrop},t),{},{children:r}))};r.Z=function(e){var r=(0,c.useState)(!0),t=r[0],n=r[1];return t&&(0,a.jsx)(f,{onClick:function(r){e.onClose&&e.onClose(r),n(!1)},children:(0,a.jsx)("div",{className:"".concat(s().Modal," ").concat(e.className),children:e.children})})}},8128:function(e,r,t){"use strict";var n=t(2809),o=t(1164),c=t(5917),i=t.n(c),s=t(5893),a=["children"];function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=e.children,t=(0,o.Z)(e,a);return(0,s.jsx)("h2",u(u({},t),{},{className:i().Secondary,children:r}))}},8187:function(e,r,t){"use strict";var n=t(2809),o=t(1164),c=t(5761),i=t.n(c),s=t(5893),a=["children"];function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=e.children,t=(0,o.Z)(e,a);return(0,s.jsx)("h3",u(u({},t),{},{className:i().Third,children:r}))}},5199:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return H}});var n=t(1163),o=t(2809);function c(e,r,t,n,o,c,i){try{var s=e[c](i),a=s.value}catch(p){return void t(p)}s.done?r(a):Promise.resolve(a).then(n,o)}var i=t(809),s=t.n(i),a=t(7294);const p={_origin:"https://api.emailjs.com"},u=(e,r,t)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!r)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(e){this.status=e.status,this.text=e.responseText}}const f=(e,r,t={})=>new Promise(((n,o)=>{const c=new XMLHttpRequest;c.addEventListener("load",(({target:e})=>{const r=new l(e);200===r.status||"OK"===r.text?n(r):o(r)})),c.addEventListener("error",(({target:e})=>{o(new l(e))})),c.open("POST",p._origin+e,!0),Object.keys(t).forEach((e=>{c.setRequestHeader(e,t[e])})),c.send(r)})),d=(e,r,t,n)=>{const o=n||p._userID;u(o,e,r);const c={lib_version:"3.3.1",user_id:o,service_id:e,template_id:r,template_params:t};return f("/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})};var O=t(1177),h=t(8187),b=t(6794),j=t(3380),y=t.n(j),m=t(5893);function _(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?_(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g=function(e){var r=e.label,t=e.input,n=e.InputElement,o=e.id;return o=(0,a.useRef)(o||Math.random()),n=n||"input",(0,m.jsxs)(b.Z,{className:y().Container,children:[(0,m.jsx)("label",v(v({},r.props),{},{htmlFor:o.current,className:"\n          ".concat(y().Label,"\n          ").concat(r.className||"","\n        ").trim(),children:r.children})),(0,m.jsx)(n,v(v({},t.props),{},{id:o.current,className:"\n          ".concat(y().Input," \n          ").concat(t.className||"","\n        ").trim()}))]})},x=t(9044),P=t.n(x),w=function(e){return(0,m.jsxs)("div",{className:P().SpinnerWrapper,children:[(0,m.jsx)("div",{className:P().Spinner}),e.text&&(0,m.jsx)("span",{children:e.text})]})},T=t(1164),D=t(8128),S=t(1299),Z=t(892),I=t.n(Z),N=["text","status","children"];function k(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?k(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var F=function(e){var r=e.text,t=e.status,n=(e.children,(0,T.Z)(e,N));return(0,m.jsxs)(S.Z,E(E({className:I().Modal},n),{},{children:[(0,m.jsx)(D.Z,{children:t}),(0,m.jsx)("p",{children:r})]}))},M=t(4595),C=t.n(M);function B(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function R(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?B(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var q=function(e){var r=(0,n.useRouter)(),t=(0,a.useRef)(!0),o=(0,a.useState)(!1),i=o[0],p=o[1],u=(0,a.useState)(!1),l=u[0],f=u[1],b=(0,a.useState)(!1),j=b[0],y=b[1],_=(0,a.useRef)(),v=(0,a.useRef)(),x=(0,a.useRef)(),P=(0,a.useRef)(),T=function(){var r,t=(r=s().mark((function r(t){var n,o,c,i,a,u,l,O,h;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),n=x.current.value.trim(),o=_.current.value.trim(),c=v.current.value.trim(),i=P.current.value.trim(),a=n.match(/^.*@[A-Za-z]+\.[A-Za-z]+$/g),u=o.length>2,l=c.match(/\d+/g)&&c.length>=7,a&&u&&l){r.next=12;break}return f({status:"\u041d\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430",text:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e (\u043a\u0440\u043e\u043c\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f)"}),r.abrupt("return");case 12:return y(!0),O={},e.orderInfo.map((function(e,r){switch(r){case 0:O.type=e.property;break;case 1:"\u0424\u043e\u0440\u043c\u0430"==e.key?O.shape=e.property:O.materials=e.property;break;case 2:O.materials=e.property}})),h=R({name:o,number:c,email:n,comment:i},O),r.prev=16,r.next=19,d("service_kiq0jp9","template_hci5war",h,"user_2FU0yfDjTaoUzX8yIWhal");case 19:y(!1),p(!0),r.next=27;break;case 23:r.prev=23,r.t0=r.catch(16),y(!1),f(r.t0);case 27:case"end":return r.stop()}}),r,null,[[16,23]])})),function(){var e=this,t=arguments;return new Promise((function(n,o){var i=r.apply(e,t);function s(e){c(i,n,o,s,a,"next",e)}function a(e){c(i,n,o,s,a,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}(),D=function(e){var r=e.target.value.replace(/[^\d]/g,"");if(t.current&&(t.current=!1,r="7"),!r)return e.target.value="";var n=[r[0],r.slice(1,4),r.slice(4,7),r.slice(7,9),r.slice(9,11)],o="",c=["+"," (",") "," ","-"];n.forEach((function(e){return function(e,r){r&&(o+=e+r)}(c.splice(0,1),e)})),e.target.value=o};return j?(0,m.jsx)(w,{text:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):(0,m.jsxs)(m.Fragment,{children:[l&&(0,m.jsx)(F,{status:l.status||"\u041e\u0448\u0438\u0431\u043a\u0430",onClose:function(){f(!1),p(!1),y(!1)},text:l.text||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443"}),i&&(0,m.jsx)(F,{status:"\u0417\u0430\u043a\u0430\u0437 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d!",onClose:function(e){r.push("/main")},text:"\u0412 \u0441\u043a\u043e\u0440\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432\u0430\u043c \u043f\u043e\u0437\u0432\u043e\u043d\u0438\u0442 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0438 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u0441\u044f \u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0435"}),(0,m.jsxs)("form",{className:C().TotalOrderForm,onSubmit:T,children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(g,{label:{children:(0,m.jsx)(h.Z,{children:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"})},input:{props:{ref:_,type:"text",placeholder:"\u0418\u043c\u044f"},className:C().MinInput}}),(0,m.jsx)(g,{label:{children:(0,m.jsx)(h.Z,{children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"})},input:{props:{ref:v,type:"tel",placeholder:"+_ (___) ___ __-__",onInput:D,onBlur:D,onFocus:D},className:C().MinInput}})]}),(0,m.jsx)(g,{label:{children:(0,m.jsx)(h.Z,{children:"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b. \u043f\u043e\u0447\u0442\u044b"}),props:{title:"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b"}},input:{props:{ref:x,type:"email",placeholder:"example@gmail.com"}}}),(0,m.jsx)(g,{InputElement:"textarea",label:{children:(0,m.jsx)(h.Z,{children:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})},input:{props:{ref:P,rows:"3",placeholder:"\u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"},className:C().CommentInput}}),(0,m.jsx)(O.Z,{type:"submit",className:C().MainButton,children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443"})]})]})},W=t(2633),z=t.n(W),L=["orderInfo"],X=function(e){var r=e.orderInfo;(0,T.Z)(e,L);return(0,m.jsx)(b.Z,{className:z().TotalOrderTree,children:r.filter((function(e){return e.property})).map((function(e,r,t){var n=r>=t.length-1;return(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)("p",{children:[e.key,":"]}),"object"===typeof e.property?e.property.map((function(e,r){h.Z})):(0,m.jsx)(h.Z,{children:e.property})]}),!n&&(0,m.jsx)("img",{src:"/order-assets/double-arrow.svg"},Math.random())]},r)}))})},U={type:{kitchen:"\u041a\u0443\u0445\u043d\u044f",entry:"\u0428\u043a\u0430\u0444",child:"\u0414\u0435\u0442\u0441\u043a\u0430\u044f","tc-island":"\u0422\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u043e\u0441\u0442\u0440\u043e\u0432\u043e\u043a"},shape:{linear:"\u041f\u0440\u044f\u043c\u0430\u044f",angled:"\u0423\u0433\u043b\u043e\u0432\u0430\u044f","u-shaped":"\u041f-\u043e\u0431\u0440\u0430\u0437\u043d\u0430\u044f",others:"\u0414\u0440\u0443\u0433\u043e\u0435"},material:{ldsp:"\u041b\u0414\u0421\u041f",mdf:"\u041c\u0414\u0424",massive:"\u041c\u0430\u0441\u0441\u0438\u0432",others:"\u0414\u0440\u0443\u0433\u043e\u0435"}},V=t(8725),A=t(5402),Q=t.n(A),H=function(e){var r=(0,n.useRouter)(),t=[{key:"\u041c\u0435\u0431\u0435\u043b\u044c",property:U.type[r.query.type]},{key:"\u0424\u043e\u0440\u043c\u0430",property:U.shape[r.query.shape]},{key:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",property:(r.query.material||"").split("+").map((function(e){return U.material[e]})).join(" + ")}];return(0,m.jsxs)(V.Z,{title:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c",className:Q().TotalOrderPage,children:[t[0].property&&(0,m.jsx)(X,{orderInfo:t}),(0,m.jsx)(q,{orderInfo:t})]})}},6054:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order",function(){return t(5199)}])},892:function(){},4595:function(e){e.exports={TotalOrderForm:"TotalOrderForm_TotalOrderForm__XoB0f",MinInput:"TotalOrderForm_MinInput__FTInq",MainButton:"TotalOrderForm_MainButton__YZFbz",FileInput:"TotalOrderForm_FileInput__SnR7m",FileInputWrapper:"TotalOrderForm_FileInputWrapper__0WFht",CommentInput:"TotalOrderForm_CommentInput__sAONw"}},2633:function(e){e.exports={Query:"TotalOrderTree_Query__IjcW2",TotalOrderTree:"TotalOrderTree_TotalOrderTree__oXkaZ"}},5402:function(e){e.exports={TotalOrderPage:"TotalOrderPage_TotalOrderPage__UuPe4"}},3380:function(e){e.exports={Container:"Input_Container__plrlU",Label:"Input_Label__zPh0u",Input:"Input_Input__tA__d"}},1281:function(e){e.exports={Button:"MainButton_Button__n72zw"}},3033:function(e){e.exports={Backdrop:"Modal_Backdrop__9RcyN",Modal:"Modal_Modal__FQ769"}},5917:function(e){e.exports={Secondary:"Secondary_Secondary__TPia2"}},9044:function(e){e.exports={SpinnerWrapper:"Spinner_SpinnerWrapper__dcV6F",Spinner:"Spinner_Spinner__rYTKy",spin:"Spinner_spin__VtJdE"}},5761:function(e){e.exports={Third:"Third_Third__Uq0Dd"}},1163:function(e,r,t){e.exports=t(9898)}},function(e){e.O(0,[774,888,179],(function(){return r=6054,e(e.s=r);var r}));var r=e.O();_N_E=r}]);