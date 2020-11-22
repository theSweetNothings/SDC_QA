(self.webpackChunkclarkfecsource=self.webpackChunkclarkfecsource||[]).push([[191],{599:(e,t,n)=>{"use strict";n.d(t,{C:()=>a,i:()=>i});var r=n(9669),o=n.n(r);const a=function(e,t){const{name:n,value:r}=e.target;t((e=>{let t=Object.assign({},e);return t[n]=r,t}))},l=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,i=function(e,t,n,r,a){if(e.preventDefault(),n.body&&n.name&&n.email)if(l.test(n.email)){const e={body:n.body,name:n.name,email:n.email};n.photos&&(e.photos=n.photos),o().post("http://52.26.193.201:3000/qa/"+r,e).then((e=>console.log(e))).then((()=>a(null))).catch((e=>console.log(e))),t(!1)}else a("Provided email address is not in correct email format");else a("You must enter the following: answer, nickname, and email")}},1384:(e,t,n)=>{"use strict";n.d(t,{vO:()=>o,hz:()=>a,Ye:()=>l,YV:()=>i,Yr:()=>u,Az:()=>c,SP:()=>s,B0:()=>m,qY:()=>d,Fy:()=>p,Sn:()=>f,es:()=>h,Ee:()=>y,QW:()=>g,xu:()=>b});var r=n(9163);const o=r.ZP.section`
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
`,m=r.ZP.textarea`
  margin-left: 10px;
  width: 55%;
`,d=r.ZP.article`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`,p=r.ZP.input`
  align-self: center;
  border-radius: 10px;
  width: 75px;
  &:hover {
    cursor: pointer;
  }
`,f=r.ZP.button`
  align-self: center;
  border-radius: 10px;
  width: 75px;
  &:hover {
    cursor: pointer;
  }
`,h=r.ZP.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`,y=r.ZP.img`
  border: 1px solid seashell;
  border-radius: 5px;
  height: 50px;
  justify-self: center;
  margin: 5px;
  width: 50px;
`,g=r.ZP.u`
  &:hover {
    cursor: pointer;
  }
`,b=r.ZP.article`
  border: 1px solid black;
  font-size: 16px;
  font-weight: bold;
  margin-left: 0px;
  margin-right: 10px;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`},5191:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(7294),o=n(4586),a=n(1384),l=n(599);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=(0,r.lazy)((function(){return n.e(741).then(n.bind(n,4741))}));const s=function(e){var t=e.product,n=e.question,u=e.showPhotosModal,s=e.toggleAnswerForm,m=e.togglePhotosModal,d=e.handleClose,p=i((0,r.useState)({body:"",name:"",email:"",photos:null}),2),f=p[0],h=p[1],y=i((0,r.useState)(null),2),g=y[0],b=y[1];return r.createElement(r.Fragment,null,r.createElement(a.vO,{onClick:d,name:"answer-background"},r.createElement(a.hz,null,r.createElement(a.Ye,null,r.createElement(a.YV,{onClick:d,name:"answer-close-btn"},"X")),r.createElement("h2",null,"Submit your Answer"),r.createElement("h3",null,t.name,":  ",n.question_body),r.createElement(a.Yr,{onSubmit:function(){return(0,l.i)(event,s,f,"".concat(n.question_id,"/answers"),b)}},r.createElement(a.Az,null,"Your Answer*",r.createElement(a.B0,{type:"text",name:"body",value:f.body,onChange:function(){return(0,l.C)(event,h)}})),r.createElement("br",null),r.createElement(a.Az,null,"What is your nickname?*",r.createElement(a.SP,{placeholder:"Example: jack543!",type:"text",name:"name",value:f.name,onChange:function(){return(0,l.C)(event,h)}})),r.createElement(a.qY,null,r.createElement("p",null,"For privacy reasons, do not use your full name or email address")),r.createElement("br",null),r.createElement(a.Az,null,"Your email*",r.createElement(a.SP,{type:"text",name:"email",value:f.email,onChange:function(){return(0,l.C)(event,h)}})),r.createElement(a.qY,null,r.createElement("p",null,"For authentication reasons, you will not be emailed")),r.createElement("br",null),r.createElement(a.Sn,{onClick:function(e){e.preventDefault(),m(!0)}},"Upload photos"),r.createElement("br",null),r.createElement(a.es,null,f.photos&&f.photos.map((function(e){return r.createElement(a.Ee,{key:(0,o.Z)(),src:e})}))),r.createElement("br",null),r.createElement(a.Fy,{type:"submit",value:"Submit"})),g&&r.createElement("p",null,g))),u&&r.createElement(r.Suspense,{fallback:r.createElement("section",null)},r.createElement(c,{handleClose:d,handleUpload:function(e){h((function(t){var n=Object.assign({},t);return n.photos=e,n})),m(!1)}})))}},4586:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);function a(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}const l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,i=function(e){return"string"==typeof e&&l.test(e)};for(var u=[],c=0;c<256;++c)u.push((c+256).toString(16).substr(1));const s=function(e,t,n){var r=(e=e||{}).random||(e.rng||a)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n}(r)}}}]);