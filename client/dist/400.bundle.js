(self.webpackChunkclarkfecsource=self.webpackChunkclarkfecsource||[]).push([[400],{599:(e,t,n)=>{"use strict";n.d(t,{C:()=>a,i:()=>i});var r=n(9669),o=n.n(r);const a=function(e,t){const{name:n,value:r}=e.target;t((e=>{let t=Object.assign({},e);return t[n]=r,t}))},l=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,i=function(e,t,n,r,a){if(e.preventDefault(),n.body&&n.name&&n.email)if(l.test(n.email)){const e={body:n.body,name:n.name,email:n.email};n.photos&&(e.photos=n.photos),o().post("http://52.26.193.201:3000/qa/"+r,e).then((e=>console.log(e))).then((()=>a(null))).catch((e=>console.log(e))),t(!1)}else a("Provided email address is not in correct email format");else a("You must enter the following: answer, nickname, and email")}},384:(e,t,n)=>{"use strict";n.d(t,{vO:()=>o,hz:()=>a,Ye:()=>l,YV:()=>i,Yr:()=>u,Az:()=>c,SP:()=>s,B0:()=>f,qY:()=>m,Fy:()=>d,Sn:()=>p,es:()=>h,Ee:()=>y,QW:()=>b,xu:()=>g});var r=n(9163);const o=r.ZP.section`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`,a=r.ZP.article`
  align-items: center;
  background-color: seashell;
  border-radius: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  margin: 5% auto;
  padding: 20px;
  width: 70%;
`,l=r.ZP.article`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`,i=r.ZP.button`
  width: 30px;
  &:hover {
    cursor: pointer;
`,u=r.ZP.form`
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
`,c=r.ZP.label`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  text-align: right;
`,s=r.ZP.input`
  margin-left: 10px;
  width: 55%;
`,f=r.ZP.textarea`
  margin-left: 10px;
  width: 55%;
`,m=r.ZP.article`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`,d=r.ZP.input`
  align-self: center;
  border-radius: 10px;
  width: 75px;
  &:hover {
    cursor: pointer;
  }
`,p=r.ZP.button`
  align-self: center;
  border-radius: 10px;
  width: 75px;
  &:hover {
    cursor: pointer;
  }
`,h=r.ZP.section`
  display: flex;
  justifiy-content: center;
  margin: 10px 0px;
`,y=r.ZP.img`
  border: 1px solid seashell;
  border-radius: 5px;
  height: 50px;
  margin: 5px;
  width: 50px;
`,b=r.ZP.u`
  &:hover {
    cursor: pointer;
  }
`,g=r.ZP.article`
  border: 1px solid black;
  font-size: 16px;
  font-weight: bold;
  margin-left: 0px;
  margin-right: 10px;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`},400:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var r=n(7294),o=n(384),a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),l=new Uint8Array(16);function i(){if(!a)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(l)}const u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,c=function(e){return"string"==typeof e&&u.test(e)};for(var s=[],f=0;f<256;++f)s.push((f+256).toString(16).substr(1));const m=function(e,t,n){var r=(e=e||{}).random||(e.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n}(r)};function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(){var e,t,n=(e=["\n  align-self: center;\n  width: 60%;\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return y=function(){return n},n}var b=n(9163).ZP.input(y());const g=function(e){var t=e.handleClose,n=e.handleUpload,a=d((0,r.useState)([]),2),l=a[0],i=(a[1],d((0,r.useState)([]),2)),u=i[0],c=i[1];return r.createElement(o.vO,{name:"photos-background"},r.createElement(o.hz,null,r.createElement(o.Ye,null,r.createElement(o.YV,{onClick:t,name:"photos-close-btn"},"X")),r.createElement("h2",null,"Upload photo"),r.createElement("br",null),l.length<5&&r.createElement(b,{type:"file",onChange:function(e){if(l.length<5){var t=new FileReader;t.onload=function(){2===t.readyState&&c((function(e){return(n=e,function(e){if(Array.isArray(e))return h(e)}(n)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(n)||p(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat({url:t.result});var n}))},t.readAsDataURL(e.target.files[0])}}}),r.createElement(o.es,null,u&&u.map((function(e){return r.createElement(o.Ee,{key:m(),src:e.url})}))),r.createElement(o.Sn,{onClick:function(){return n(u)}},"Upload")))};var v=n(599);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const E=function(e){var t=e.product,n=e.question,a=e.showPhotosModal,l=e.toggleAnswerForm,i=e.togglePhotosModal,u=e.handleClose,c=x((0,r.useState)({body:"",name:"",email:"",photos:null}),2),s=c[0],f=c[1],m=x((0,r.useState)(null),2),d=m[0],p=m[1];return r.createElement(r.Fragment,null,r.createElement(o.vO,{onClick:u,name:"answer-background"},r.createElement(o.hz,null,r.createElement(o.Ye,null,r.createElement(o.YV,{onClick:u,name:"answer-close-btn"},"X")),r.createElement("h2",null,"Submit your Answer"),r.createElement("h3",null,t.name,":  ",n.question_body),r.createElement(o.Yr,{onSubmit:function(){return(0,v.i)(event,l,s,"".concat(n.question_id,"/answers"),p)}},r.createElement(o.Az,null,"Your Answer*",r.createElement(o.B0,{type:"text",name:"body",value:s.body,onChange:function(){return(0,v.C)(event,f)}})),r.createElement("br",null),r.createElement(o.Az,null,"What is your nickname?*",r.createElement(o.SP,{placeholder:"Example: jack543!",type:"text",name:"name",value:s.name,onChange:function(){return(0,v.C)(event,f)}})),r.createElement(o.qY,null,r.createElement("p",null,"For privacy reasons, do not use your full name or email address")),r.createElement("br",null),r.createElement(o.Az,null,"Your email*",r.createElement(o.SP,{type:"text",name:"email",value:s.email,onChange:function(){return(0,v.C)(event,f)}})),r.createElement(o.qY,null,r.createElement("p",null,"For authentication reasons, you will not be emailed")),r.createElement("br",null),r.createElement(o.Sn,{onClick:function(e){e.preventDefault(),i(!0)}},"Upload photos"),r.createElement("br",null),r.createElement(o.Fy,{type:"submit",value:"Submit"})),d&&r.createElement("p",null,d))),a&&r.createElement(g,{handleClose:u,handleUpload:function(e){f((function(t){var n=Object.assign({},t);return n.photos=e,n})),i(!1)}}))}}}]);