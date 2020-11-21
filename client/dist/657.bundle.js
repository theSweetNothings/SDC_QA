(self.webpackChunkclarkfecsource=self.webpackChunkclarkfecsource||[]).push([[657,642],{384:(e,t,n)=>{"use strict";n.d(t,{vO:()=>a,hz:()=>i,Ye:()=>l,YV:()=>o,Yr:()=>s,Az:()=>u,SP:()=>c,B0:()=>d,qY:()=>m,Fy:()=>f,Sn:()=>y,es:()=>p,Ee:()=>h,QW:()=>g,xu:()=>x});var r=n(9163);const a=r.ZP.section`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`,i=r.ZP.article`
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
`,o=r.ZP.button`
  width: 30px;
  &:hover {
    cursor: pointer;
`,s=r.ZP.form`
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
`,u=r.ZP.label`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  text-align: right;
`,c=r.ZP.input`
  margin-left: 10px;
  width: 55%;
`,d=r.ZP.textarea`
  margin-left: 10px;
  width: 55%;
`,m=r.ZP.article`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`,f=r.ZP.input`
  align-self: center;
  border-radius: 10px;
  width: 75px;
  &:hover {
    cursor: pointer;
  }
`,y=r.ZP.button`
  align-self: center;
  border-radius: 10px;
  width: 75px;
  &:hover {
    cursor: pointer;
  }
`,p=r.ZP.section`
  display: flex;
  justifiy-content: center;
  margin: 10px 0px;
`,h=r.ZP.img`
  border: 1px solid seashell;
  border-radius: 5px;
  height: 50px;
  margin: 5px;
  width: 50px;
`,g=r.ZP.u`
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
`},295:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(7294),a=n(8116),i=n.n(a),l=n(9163),o=n(384);function s(){var e=d(["\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  margin-left: 20px;\n  width: 375px;\n"]);return s=function(){return e},e}function u(){var e=d(["\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: start;\n"]);return u=function(){return e},e}function c(){var e=d(["\n  font-size: 12px;\n  justify-content: space-around;\n"]);return c=function(){return e},e}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var m=(0,r.lazy)((function(){return n.e(950).then(n.bind(n,950))})),f=(0,r.lazy)((function(){return n.e(407).then(n.bind(n,407))})),y=l.ZP.section(c()),p=l.ZP.article(u()),h=l.ZP.article(s());const g=function(e){var t;return r.createElement(y,null,r.createElement(p,null,r.createElement("p",null,r.createElement("strong",{style:{fontSize:"16px"}},"A: ")," ",e.answer.body)),r.createElement(o.es,null,e.answer.photos&&e.answer.photos.map((function(e){return r.createElement(o.Ee,{src:e})}))),r.createElement(h,null,r.createElement("p",null,"by ",e.answer.answerer_name,", ",(e.answer.date,t=new Date(e.answer.date),i()(t,"mmmm d, yyyy"))),r.createElement("p",null,"|"),r.createElement(r.Suspense,{fallback:r.createElement("section",null)},r.createElement(m,{answer:e.answer.id,helpful:e.answer.helpfulness,updateHelp:e.updateHelp})),r.createElement("p",null,"|"),r.createElement(r.Suspense,{fallback:r.createElement("section",null)},r.createElement(f,{answer:e.answer.id}))))}},657:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=n(7294),a=n(295);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(){var e,t,n=(e=["\n  font-weight: bold;\n  font-size: 12px;\n  margin-left: 20px;\n  &:hover {\n    cursor: pointer;\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return o=function(){return n},n}var s=n(9163).ZP.article(o());const u=function(e){var t=i((0,r.useState)(!1),2),n=t[0],a=t[1],l=i((0,r.useState)(!0),2),o=l[0],u=l[1];return r.createElement(r.Fragment,null,o&&r.createElement(s,null,r.createElement("p",{onClick:function(e){a((function(e){return!e})),u((function(e){return!e}))}},"LOAD MORE ANSWERS")),n&&e.answers)},c=function(e){var t=e.answers.sort((function(e,t){return t.helpfulness-e.helpfulness})).map((function(t){return r.createElement(a.default,{key:t.id,answer:t,updateHelp:e.updateHelp})}));return r.createElement("section",null,t.length>2?t.slice(0,2):t,t.length>2&&r.createElement(u,{answers:t.slice(2)}))}},8116:function(e,t,n){var r;!function(a){"use strict";var i,l,o,s=(i=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,l=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,o=/[^-+\dA-Z]/g,function(e,t,n,r){if(1!==arguments.length||"string"!==m(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var a=(t=String(s.masks[t]||t||s.masks.default)).slice(0,4);"UTC:"!==a&&"GMT:"!==a||(t=t.slice(4),n=!0,"GMT:"===a&&(r=!0));var f=n?"getUTC":"get",y=e[f+"Date"](),p=e[f+"Day"](),h=e[f+"Month"](),g=e[f+"FullYear"](),x=e[f+"Hours"](),w=e[f+"Minutes"](),b=e[f+"Seconds"](),v=e[f+"Milliseconds"](),M=n?0:e.getTimezoneOffset(),T=c(e),S=d(e),E={d:y,dd:u(y),ddd:s.i18n.dayNames[p],dddd:s.i18n.dayNames[p+7],m:h+1,mm:u(h+1),mmm:s.i18n.monthNames[h],mmmm:s.i18n.monthNames[h+12],yy:String(g).slice(2),yyyy:g,h:x%12||12,hh:u(x%12||12),H:x,HH:u(x),M:w,MM:u(w),s:b,ss:u(b),l:u(v,3),L:u(Math.round(v/10)),t:x<12?s.i18n.timeNames[0]:s.i18n.timeNames[1],tt:x<12?s.i18n.timeNames[2]:s.i18n.timeNames[3],T:x<12?s.i18n.timeNames[4]:s.i18n.timeNames[5],TT:x<12?s.i18n.timeNames[6]:s.i18n.timeNames[7],Z:r?"GMT":n?"UTC":(String(e).match(l)||[""]).pop().replace(o,""),o:(M>0?"-":"+")+u(100*Math.floor(Math.abs(M)/60)+Math.abs(M)%60,4),S:["th","st","nd","rd"][y%10>3?0:(y%100-y%10!=10)*y%10],W:T,N:S};return t.replace(i,(function(e){return e in E?E[e]:e.slice(1,e.length-1)}))});function u(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function c(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-r);var a=(t-n)/6048e5;return 1+Math.floor(a)}function d(e){var t=e.getDay();return 0===t&&(t=7),t}function m(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}s.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},s.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(r=function(){return s}.call(t,n,t,e))||(e.exports=r)}()}}]);