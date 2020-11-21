(self.webpackChunkclarkfecsource=self.webpackChunkclarkfecsource||[]).push([[493,950],{384:(e,t,n)=>{"use strict";n.d(t,{vO:()=>i,hz:()=>o,Ye:()=>l,YV:()=>a,Yr:()=>u,Az:()=>c,SP:()=>s,B0:()=>f,qY:()=>p,Fy:()=>d,Sn:()=>h,es:()=>x,Ee:()=>m,QW:()=>y,xu:()=>b});var r=n(9163);const i=r.ZP.section`
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
`,l=r.ZP.article`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`,a=r.ZP.button`
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
`,p=r.ZP.article`
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
`,h=r.ZP.button`
  align-self: center;
  border-radius: 10px;
  width: 75px;
  &:hover {
    cursor: pointer;
  }
`,x=r.ZP.section`
  display: flex;
  justifiy-content: center;
  margin: 10px 0px;
`,m=r.ZP.img`
  border: 1px solid seashell;
  border-radius: 5px;
  height: 50px;
  margin: 5px;
  width: 50px;
`,y=r.ZP.u`
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
`},950:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var r=n(7294),i=n(9163),o=n(9669),l=n.n(o),a=n(384);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(){var e,t,n=(e=["\n  display: flex;\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return c=function(){return n},n}var s=i.ZP.article(c());const f=function(e){var t,n,i=(t=(0,r.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var l,a=e[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],c=i[1];return r.createElement(s,null,r.createElement("p",{style:{marginRight:".25rem"}},"Helpful?"),r.createElement("p",null,o?r.createElement("u",null,"Yes"):r.createElement(a.QW,{onClick:function(t){c(!0),e.question?l().put("http://52.26.193.201:3000/qa/question/".concat(e.question,"/helpful")).then((function(){return e.updateHelp()})).catch((function(e){return console.log(e)})):e.answer&&l().put("http://52.26.193.201:3000/qa/answer/".concat(e.answer,"/helpful")).then((function(){return e.updateHelp()})).catch((function(e){return console.log(e)}))}},"Yes"),"  (",e.helpful,")"))}},493:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var r=n(7294),i=n(9163),o=n(950);function l(){var e=s(["\n  :hover {\n    cursor: pointer;\n  }\n"]);return l=function(){return e},e}function a(){var e=s(["\n  display: flex;\n  flex-wrap: nowrap;\n  font-size: 12px;\n  justify-self: end;\n  justify-content: space-around;\n  max-width: 250px;\n  min-width: 200px;\n"]);return a=function(){return e},e}function u(){var e=s(["\n  font-weight: bold;\n  justify-self: start;\n  width: 60%;\n"]);return u=function(){return e},e}function c(){var e=s(["\n  display: flex;\n  justify-content: space-between;\n"]);return c=function(){return e},e}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var f=i.ZP.section(c()),p=i.ZP.article(u()),d=i.ZP.article(a()),h=i.ZP.p(l());const x=function(e){var t=e.question,n=(e.product,e.toggleAnswerForm),i=e.updateHelp;return r.createElement(f,null,r.createElement(p,null,r.createElement("p",null,"Q: ",t.question_body)),r.createElement(d,null,r.createElement(o.default,{question:t.question_id,helpful:t.question_helpfulness,updateHelp:i}),r.createElement("p",null,"|"),r.createElement(h,{onClick:function(e){n(!0,t)}},r.createElement("u",null,"Add Answer"))))}}}]);