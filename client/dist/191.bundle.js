(self.webpackChunkclarkfecsource=self.webpackChunkclarkfecsource||[]).push([[191],{599:(e,t,n)=>{"use strict";n.d(t,{C:()=>o,i:()=>i});var r=n(9669),l=n.n(r);const o=function(e,t){const{name:n,value:r}=e.target;t((e=>{let t=Object.assign({},e);return t[n]=r,t}))},a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,i=function(e,t,n,r,o){if(e.preventDefault(),n.body&&n.name&&n.email)if(a.test(n.email)){const e={body:n.body,name:n.name,email:n.email};n.photos&&(e.photos=n.photos),l().post("http://52.26.193.201:3000/qa/"+r,e).then((e=>console.log(e))).then((()=>o(null))).catch((e=>console.log(e))),t(!1)}else o("Provided email address is not in correct email format");else o("You must enter the following: answer, nickname, and email")}},1384:(e,t,n)=>{"use strict";n.d(t,{vO:()=>l,hz:()=>o,Ye:()=>a,YV:()=>i,Yr:()=>c,Az:()=>u,SP:()=>s,B0:()=>m,qY:()=>d,Fy:()=>p,Sn:()=>f,es:()=>h,Ee:()=>b,QW:()=>y,xu:()=>x});var r=n(9163);const l=r.ZP.section`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`,o=r.ZP.article`
  align-items: center;
  background-color: seashell;
  border-radius: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  margin: 5% auto;
  padding: 20px;
  width: 70%;
`,a=r.ZP.article`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`,i=r.ZP.button`
  width: 30px;
  &:hover {
    cursor: pointer;
`,c=r.ZP.form`
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
`,u=r.ZP.label`
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
  justifiy-content: center;
  margin: 10px 0px;
`,b=r.ZP.img`
  border: 1px solid seashell;
  border-radius: 5px;
  height: 50px;
  margin: 5px;
  width: 50px;
`,y=r.ZP.u`
  &:hover {
    cursor: pointer;
  }
`,x=r.ZP.article`
  border: 1px solid black;
  font-size: 16px;
  font-weight: bold;
  margin-left: 0px;
  margin-right: 10px;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`},5191:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r=n(7294),l=n(1384),o=n(599);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,l=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){l=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(l)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=(0,r.lazy)((function(){return n.e(489).then(n.bind(n,3489))}));const u=function(e){var t=e.product,n=e.question,i=e.showPhotosModal,u=e.toggleAnswerForm,s=e.togglePhotosModal,m=e.handleClose,d=a((0,r.useState)({body:"",name:"",email:"",photos:null}),2),p=d[0],f=d[1],h=a((0,r.useState)(null),2),b=h[0],y=h[1];return r.createElement(r.Fragment,null,r.createElement(l.vO,{onClick:m,name:"answer-background"},r.createElement(l.hz,null,r.createElement(l.Ye,null,r.createElement(l.YV,{onClick:m,name:"answer-close-btn"},"X")),r.createElement("h2",null,"Submit your Answer"),r.createElement("h3",null,t.name,":  ",n.question_body),r.createElement(l.Yr,{onSubmit:function(){return(0,o.i)(event,u,p,"".concat(n.question_id,"/answers"),y)}},r.createElement(l.Az,null,"Your Answer*",r.createElement(l.B0,{type:"text",name:"body",value:p.body,onChange:function(){return(0,o.C)(event,f)}})),r.createElement("br",null),r.createElement(l.Az,null,"What is your nickname?*",r.createElement(l.SP,{placeholder:"Example: jack543!",type:"text",name:"name",value:p.name,onChange:function(){return(0,o.C)(event,f)}})),r.createElement(l.qY,null,r.createElement("p",null,"For privacy reasons, do not use your full name or email address")),r.createElement("br",null),r.createElement(l.Az,null,"Your email*",r.createElement(l.SP,{type:"text",name:"email",value:p.email,onChange:function(){return(0,o.C)(event,f)}})),r.createElement(l.qY,null,r.createElement("p",null,"For authentication reasons, you will not be emailed")),r.createElement("br",null),r.createElement(l.Sn,{onClick:function(e){e.preventDefault(),s(!0)}},"Upload photos"),r.createElement("br",null),r.createElement(l.Fy,{type:"submit",value:"Submit"})),b&&r.createElement("p",null,b))),i&&r.createElement(r.Suspense,{fallback:r.createElement("section",null)},r.createElement(c,{handleClose:m,handleUpload:function(e){f((function(t){var n=Object.assign({},t);return n.photos=e,n})),s(!1)}})))}}}]);