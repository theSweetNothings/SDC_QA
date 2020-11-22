(self.webpackChunkclarkfecsource=self.webpackChunkclarkfecsource||[]).push([[950,897],{1384:(e,t,r)=>{"use strict";r.d(t,{vO:()=>i,hz:()=>o,Ye:()=>l,YV:()=>a,Yr:()=>c,Az:()=>u,SP:()=>s,B0:()=>p,qY:()=>f,Fy:()=>d,Sn:()=>h,es:()=>x,Ee:()=>g,QW:()=>m,xu:()=>y});var n=r(9163);const i=n.ZP.section`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`,o=n.ZP.article`
  align-items: center;
  background-color: seashell;
  border-radius: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  margin: 5% auto;
  padding: 20px;
  width: 70%;
`,l=n.ZP.article`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`,a=n.ZP.button`
  width: 30px;
  &:hover {
    cursor: pointer;
`,c=n.ZP.form`
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
`,u=n.ZP.label`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  text-align: right;
`,s=n.ZP.input`
  margin-left: 10px;
  width: 55%;
`,p=n.ZP.textarea`
  margin-left: 10px;
  width: 55%;
`,f=n.ZP.article`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`,d=n.ZP.input`
  align-self: center;
  border-radius: 10px;
  width: 75px;
  &:hover {
    cursor: pointer;
  }
`,h=n.ZP.button`
  align-self: center;
  border-radius: 10px;
  width: 75px;
  &:hover {
    cursor: pointer;
  }
`,x=n.ZP.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`,g=n.ZP.img`
  border: 1px solid seashell;
  border-radius: 5px;
  height: 50px;
  justify-self: center;
  margin: 5px;
  width: 50px;
`,m=n.ZP.u`
  &:hover {
    cursor: pointer;
  }
`,y=n.ZP.article`
  border: 1px solid black;
  font-size: 16px;
  font-weight: bold;
  margin-left: 0px;
  margin-right: 10px;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`},4950:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(7294),i=r(9163),o=r(9669),l=r.n(o),a=r(1384);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(){var e,t,r=(e=["\n  display: flex;\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return u=function(){return r},r}var s=i.ZP.article(u());const p=function(e){var t,r,i=(t=(0,n.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,i=!1,o=void 0;try{for(var l,a=e[Symbol.iterator]();!(n=(l=a.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],u=i[1];return n.createElement(s,null,n.createElement("p",{style:{marginRight:".25rem"}},"Helpful?"),n.createElement("p",null,o?n.createElement("u",null,"Yes"):n.createElement(a.QW,{onClick:function(t){u(!0),e.question?l().put("http://52.26.193.201:3000/qa/question/".concat(e.question,"/helpful")).then((function(){return e.updateHelp()})).catch((function(e){return console.log(e)})):e.answer&&l().put("http://52.26.193.201:3000/qa/answer/".concat(e.answer,"/helpful")).then((function(){return e.updateHelp()})).catch((function(e){return console.log(e)}))}},"Yes"),"  (",e.helpful,")"))}}}]);